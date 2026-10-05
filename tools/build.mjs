// Builds the static site into dist/ for hosting outside Claude (e.g. Vercel).
//
// index.html is written as a page fragment: Claude's artifact viewer wraps it in a document
// skeleton when publishing. Anywhere else it needs that skeleton itself; without a doctype the
// browser falls back to quirks mode, and without the viewport tag phones render it zoomed out.
//
//     node tools/build.mjs
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const out = new URL("dist/", root);

const page = await readFile(new URL("index.html", root), "utf8");
const split = page.indexOf("<main");
if (split < 0) throw new Error("index.html: expected a <main> element after the head content");
const head = page.slice(0, split).replace(/<meta charset="utf-8">\s*/i, "").trim();
const body = page.slice(split).trim();

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await writeFile(new URL("index.html", out), `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body>
${body}
</body>
</html>
`);
await cp(new URL("lessons.js", root), new URL("lessons.js", out));
await cp(new URL("audio/", root), new URL("audio/", out), { recursive: true });
console.log("Built dist/");
