import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "The Fix-It Shop — Veteran-owned men's grooming in Eunice, Louisiana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const emblem = await readFile(path.join(process.cwd(), "public/icons/emblem.png"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f2efe8",
          background:
            "radial-gradient(90% 90% at 90% 0%, rgba(207,165,87,0.18), transparent 60%), linear-gradient(160deg, #15181c 0%, #0b0c0e 60%, #0f2d3d 130%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* ImageResponse embeds the shared asset directly into the social image. */}
          <img width={64} height={64} alt="" src={`data:image/png;base64,${emblem.toString("base64")}`} />
          <div style={{ fontSize: 30, letterSpacing: 8, fontWeight: 600 }}>FIX-IT SHOP</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 7, color: "#cfa557", textTransform: "uppercase" }}>
            Veteran-Owned · Eunice, Louisiana
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.05, marginTop: 24, fontFamily: "serif" }}>Come as you are. Leave standing taller.</div>
        </div>
        <div style={{ display: "flex", height: 2, background: "linear-gradient(90deg, #cfa557, transparent)" }} />
      </div>
    ),
    size,
  );
}
