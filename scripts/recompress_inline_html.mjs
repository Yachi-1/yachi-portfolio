// One-off: recompress base64-inlined images inside a static HTML mockup so the
// file (loaded lazily in an iframe) is far smaller while looking identical.
// Decodes each data URI, downsizes + re-encodes to JPEG via macOS `sips`, and
// rewrites the data URI in place. Run: node scripts/recompress_inline_html.mjs <file>
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";

const file = process.argv[2];
if (!file) { console.error("usage: node recompress_inline_html.mjs <html>"); process.exit(1); }

const MAX_W = 1600;     // cap width; mockup is shown scaled-down
const QUALITY = 60;     // JPEG quality
const tmp = mkdtempSync(join(tmpdir(), "inline-img-"));
let html = readFileSync(file, "utf8");
const before = Buffer.byteLength(html);

const re = /data:image\/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=]+)/g;
let i = 0, saved = 0;
html = html.replace(re, (full, fmt, b64) => {
  const buf = Buffer.from(b64, "base64");
  const inExt = fmt === "jpg" ? "jpeg" : fmt;
  const inPath = join(tmp, `img${i}.${inExt}`);
  const outPath = join(tmp, `img${i}.jpg`);
  i++;
  try {
    writeFileSync(inPath, buf);
    // Re-encode to JPEG, downscaling only if wider than MAX_W.
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", String(QUALITY),
      "-Z", String(MAX_W), inPath, "--out", outPath], { stdio: "ignore" });
    const out = readFileSync(outPath);
    if (out.length >= buf.length) return full; // keep original if not smaller
    saved += buf.length - out.length;
    return `data:image/jpeg;base64,${out.toString("base64")}`;
  } catch (e) {
    console.warn(`  ! skipped image ${i}: ${e.message}`);
    return full;
  }
});

writeFileSync(file, html);
rmSync(tmp, { recursive: true, force: true });
const after = Buffer.byteLength(html);
console.log(`${file}: ${(before/1e6).toFixed(2)}MB -> ${(after/1e6).toFixed(2)}MB (${i} images, saved ${(saved/1e6).toFixed(2)}MB)`);
