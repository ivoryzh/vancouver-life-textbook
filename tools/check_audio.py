"""Listen back to every generated clip with speech recognition and flag the doubtful ones.

Each clip in audio/manifest.js is transcribed with Whisper and compared with the sentence it
should say. A clip is flagged when the transcript differs noticeably (a misread word, a wrong
language, a garbled name) or when the recogniser itself is unsure, which usually means the
voice sounds odd. Flagged clips are worth a listen; fix them by changing the voice for that
role in make_audio.py or rewording the sentence, then run make_audio.py again.

    pip install faster-whisper          # first run also downloads the model (~150 MB)
    python tools/check_audio.py
"""
import difflib
import json
import re
import sys
from pathlib import Path

import av
import numpy as np
from faster_whisper import WhisperModel

ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT / "audio"

MIN_SIMILARITY = 0.85   # transcript vs. sentence, on letters only
MIN_LOGPROB = -0.55     # Whisper's average log-probability; lower means it struggled


def read_manifest():
    body = (AUDIO_DIR / "manifest.js").read_text(encoding="utf-8")
    return json.loads(body[body.index("{"): body.rindex("}") + 1])


def letters(s):
    return re.sub(r"[^a-z]", "", s.lower())


def load_audio(path):
    """16 kHz mono float samples. Decoded here because faster-whisper's own decoder
    passes an argument that newer PyAV releases no longer accept."""
    resampler = av.audio.resampler.AudioResampler(format="s16", layout="mono", rate=16000)
    chunks = []
    with av.open(str(path)) as container:
        for frame in container.decode(audio=0):
            for out in resampler.resample(frame):
                chunks.append(out.to_ndarray().reshape(-1))
    for out in resampler.resample(None):
        chunks.append(out.to_ndarray().reshape(-1))
    return np.concatenate(chunks).astype(np.float32) / 32768.0


def main():
    clips = read_manifest()
    model = WhisperModel("base.en", device="cpu", compute_type="int8")
    flagged = []
    for i, (key, entry) in enumerate(sorted(clips.items()), 1):
        role, text = key.split("|", 1)
        segments, _ = model.transcribe(load_audio(AUDIO_DIR / entry["f"]), language="en", beam_size=5)
        segments = list(segments)
        heard = " ".join(s.text.strip() for s in segments)
        logprob = min((s.avg_logprob for s in segments), default=-9)
        # Whisper writes numbers as digits, so only compare when the sentence has no spelled-out numbers.
        has_numbers = bool(re.search(r"\d", heard))
        similarity = 1.0 if has_numbers else difflib.SequenceMatcher(None, letters(text), letters(heard)).ratio()
        if similarity < MIN_SIMILARITY or logprob < MIN_LOGPROB:
            flagged.append((similarity, logprob, role, text, heard, entry["f"]))
        print(f"\r{i}/{len(clips)}", end="", file=sys.stderr)
    print(file=sys.stderr)

    for similarity, logprob, role, text, heard, name in sorted(flagged):
        print(f"[{similarity:.2f} | {logprob:.2f}] {role}  {name}\n    should say: {text}\n    heard:      {heard}")
    print(f"{len(flagged)} of {len(clips)} clips flagged")


if __name__ == "__main__":
    main()
