/* Regenerates public/img/og.png from card.html.
 *
 *   node tools/og/render.mjs
 *
 * Renders card.html in headless Chrome at 2x (2400x1260), downsamples to the
 * exact 1200x630 Open Graph size with Lanczos, and quantises to a 128-colour
 * palette — the card is three flat colours plus text antialiasing, so this
 * cuts the file to roughly a third with no visible change.
 *
 * Needs Chrome and Python with Pillow on PATH. Fonts come from Google Fonts,
 * so the machine must be online. index.html and public/sitemap.xml both point
 * at /img/og.png, so the path and the 1200x630 size are fixed.
 */
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const card = join(here, "card.html");
const out = resolve(here, "../../public/img/og.png");

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].find((p) => existsSync(p));

if (!CHROME) throw new Error("Chrome not found — add its path to CHROME in tools/og/render.mjs");

const work = mkdtempSync(join(tmpdir(), "og-"));
const raw = join(work, "raw.png");

try {
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=2",
    "--window-size=1200,630",
    "--virtual-time-budget=12000", // let the Google Fonts request settle
    "--default-background-color=FFFFFFFF",
    `--user-data-dir=${join(work, "profile")}`,
    `--screenshot=${raw}`,
    pathToFileURL(card).href,
  ], { stdio: "ignore" });

  execFileSync("python", ["-c", `
from PIL import Image
im = Image.open(r"${raw}").convert("RGB")
assert im.size == (2400, 1260), im.size
im = im.resize((1200, 630), Image.LANCZOS)
im.quantize(colors=128, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG).save(r"${out}", optimize=True)
`], { stdio: "inherit" });

  console.log(`wrote ${out}`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
