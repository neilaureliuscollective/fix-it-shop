// Renders the PWA / Apple icons from the emblem. Run: npm run icons
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");

const svg = readFileSync(new URL("../public/icons/icon.svg", import.meta.url), "utf8");
// Full-bleed square (no rounded corners) — platforms apply their own mask.
const square = svg.replace('rx="14"', 'rx="0"');
// Maskable: emblem shrunk into the 80% safe zone.
const maskable = square.replace('translate(9.6 8) scale(.7)', 'translate(14.4 13) scale(.55)');

const jobs = [
  ["icon-192.png", 192, square],
  ["icon-512.png", 512, square],
  ["icon-maskable-512.png", 512, maskable],
  ["apple-touch-icon.png", 180, square],
];

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [name, px, markup] of jobs) {
  await page.setViewportSize({ width: px, height: px });
  await page.setContent(`<style>*{margin:0}svg{display:block;width:${px}px;height:${px}px}</style>${markup}`);
  await page.screenshot({ path: new URL(`../public/icons/${name}`, import.meta.url).pathname });
}
await browser.close();
console.log("icons written");
