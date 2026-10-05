"""Generate natural-sounding audio for every sentence in lessons.js.

Each dialogue line becomes audio/<hash>.mp3, and audio/manifest.js records the file plus
the start time of every word, so the page can move its highlight in step with the voice.
The short "say" and "words" chips are not generated; the page reads them with the device's voice.

Voices come from edge-tts (Microsoft's neural voices, the ones Edge uses for Read Aloud).
That service is unofficial and free; it is fine for a family prototype. For a public app,
switch synth() to the official Azure Speech API, which offers the same voices.

    pip install edge-tts
    python tools/make_audio.py           # only new or changed sentences are generated
    python tools/make_audio.py --prune   # also delete mp3 files nothing uses any more

Needs Node.js on PATH (used to read lessons.js).
"""
import asyncio
import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT / "audio"
MANIFEST = AUDIO_DIR / "manifest.js"

# Voice for every line, keyed by `role` in lessons.js; "我" is every line where who is "me".
# Only the four newest voices (Ava, Andrew, Emma, Brian) are used: the older ones sound stiff,
# and the *Multilingual* variants guess the language and misread short phrases like "No worries!".
AVA, ANDREW, EMMA, BRIAN = (f"en-US-{n}Neural" for n in ("Ava", "Andrew", "Emma", "Brian"))
VOICES = {
    "我": AVA,
    "店员": ANDREW,
    "收银员": EMMA,
    "邻居": EMMA,
    "服务员": BRIAN,
    "司机": BRIAN,
    "车上广播": EMMA,
    "路人": ANDREW,
    "药剂师": EMMA,
    "前台": EMMA,
    "医生": ANDREW,
    "遛狗的人": EMMA,
    "顾客": BRIAN,
    "摊主": BRIAN,
    "学生 Emily": AVA,
    "学生 Jason": BRIAN,
    "同事 Sarah": EMMA,
    "同事 Mike": ANDREW,
    "邻居 Karen": AVA,
    "邻居 Dave": BRIAN,
}
DEFAULT_VOICE = ANDREW
RATE = "+0%"            # native speed; the page slows playback down when asked
BYTES_PER_MS = 6        # edge-tts returns 48 kbit/s mono mp3


def load_lessons():
    js = "global.window={};require(process.argv[1]);process.stdout.write(JSON.stringify(window.LESSONS))"
    out = subprocess.run(["node", "-e", js, str(ROOT / "lessons.js")],
                         capture_output=True, text=True, encoding="utf-8", check=True)
    return json.loads(out.stdout)


def collect(lessons):
    """Every dialogue line, keyed the way the page looks it up ("role|text")."""
    items = {}
    for chapter in lessons:
        for scene in chapter["scenes"]:
            for line in scene["lines"]:
                role = "我" if line["who"] == "me" else line.get("role") or "对方"
                items[f"{role}|{line['en']}"] = (VOICES.get(role, DEFAULT_VOICE), line["en"])
    return items


def norm(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())


def align(text, marks):
    """Start time (ms) of each whitespace-separated token in text, from the voice's word marks."""
    tokens = re.findall(r"\S+", text)
    flat, owner = "", []
    for i, tok in enumerate(tokens):
        n = norm(tok)
        flat += n
        owner += [i] * len(n)
    starts = [None] * len(tokens)
    pos = 0
    for ms, dur, word in marks:
        w = norm(word)
        j = flat.find(w, pos) if w else -1
        if j < 0:
            continue
        # One mark can cover several tokens (names like "Stanley Park"); spread it by character position.
        for c in range(j, j + len(w)):
            k = owner[c]
            if starts[k] is None:
                starts[k] = round(ms + dur * (c - j) / len(w))
        pos = j + len(w)
    prev = 0
    for i, s in enumerate(starts):
        starts[i] = prev if s is None else s
        prev = starts[i]
    return starts


async def synth(text, voice):
    comm = edge_tts.Communicate(text, voice, rate=RATE, boundary="WordBoundary")
    audio, marks = bytearray(), []
    async for chunk in comm.stream():
        if chunk["type"] == "audio":
            audio += chunk["data"]
        elif chunk["type"] == "WordBoundary":
            marks.append((chunk["offset"] / 10_000, chunk["duration"] / 10_000, chunk["text"]))
    if not audio:
        raise RuntimeError("no audio returned")
    return bytes(audio), marks


def read_manifest():
    if not MANIFEST.exists():
        return {}
    body = MANIFEST.read_text(encoding="utf-8")
    return json.loads(body[body.index("{"): body.rindex("}") + 1])


async def main(prune):
    AUDIO_DIR.mkdir(exist_ok=True)
    items = collect(load_lessons())
    old = read_manifest()
    manifest, todo = {}, []
    for key, (voice, text) in items.items():
        name = hashlib.sha1(f"{voice}|{RATE}|{text}".encode()).hexdigest()[:12] + ".mp3"
        if key in old and old[key]["f"] == name and (AUDIO_DIR / name).exists():
            manifest[key] = old[key]
        else:
            todo.append((key, voice, text, name))

    print(f"{len(items)} clips, {len(todo)} to generate")
    sem = asyncio.Semaphore(4)
    failed = []

    async def work(key, voice, text, name):
        async with sem:
            for attempt in range(3):
                try:
                    audio, marks = await synth(text, voice)
                    break
                except Exception as e:  # network hiccups are common; retry a couple of times
                    if attempt == 2:
                        failed.append((key, str(e)))
                        return
                    await asyncio.sleep(1.5 * (attempt + 1))
            (AUDIO_DIR / name).write_bytes(audio)
            manifest[key] = {"f": name, "w": align(text, marks), "d": round(len(audio) / BYTES_PER_MS)}
            print(f"  {voice:34} {text}")

    await asyncio.gather(*(work(*t) for t in todo))

    ordered = {k: manifest[k] for k in sorted(manifest)}
    MANIFEST.write_text(
        "// Generated by tools/make_audio.py. Do not edit by hand.\n"
        "window.AUDIO = " + json.dumps(ordered, ensure_ascii=False, indent=0) + ";\n",
        encoding="utf-8")

    used = {v["f"] for v in ordered.values()}
    orphans = [p for p in AUDIO_DIR.glob("*.mp3") if p.name not in used]
    if orphans and prune:
        for p in orphans:
            p.unlink()
        print(f"deleted {len(orphans)} unused mp3 files")
    elif orphans:
        print(f"{len(orphans)} mp3 files are no longer used (run with --prune to delete them)")
    for key, err in failed:
        print(f"FAILED {key}: {err}", file=sys.stderr)
    print(f"done: {len(ordered)} clips in manifest")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main("--prune" in sys.argv)))
