// Derive every install icon from the same transparent, reference-edited emblem.
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const root = new URL("../public/icons/", import.meta.url);
const source = new URL("emblem.png", root);
const background = "#0d3b58";
const jobs = [
  ["icon-192.png", 192, 0.84],
  ["icon-512.png", 512, 0.84],
  // A centered square of 56% fits entirely within the circular 80% safe zone.
  ["icon-maskable-512.png", 512, 0.56],
  ["apple-touch-icon.png", 180, 0.84],
  ["favicon.png", 32, 0.90],
];
for (const [name, size, fraction] of jobs) {
  const side = Math.round(size * fraction);
  const emblem = await sharp(source.pathname).resize(side, side).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: emblem, gravity: "centre" }])
    .png().toFile(new URL(name, root).pathname);
}
// Self-contained SVG favicon wrapper preserves the sculpted raster material.
const embedded = await sharp(source.pathname).resize(128, 128).png().toBuffer();
await writeFile(new URL("icon.svg", root), `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" fill="${background}"/><image x="6" y="6" width="116" height="116" href="data:image/png;base64,${embedded.toString("base64")}"/></svg>\n`);
console.log("Generated ring-free PNG and SVG icons from emblem.png");
