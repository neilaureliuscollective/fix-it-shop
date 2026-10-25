import { ImageResponse } from "next/og";

export const alt = "The Fix-It Shop — Veteran-owned men's grooming in Eunice, Louisiana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#cfa557">
            <path d="M14 55V28a18 18 0 0 1 36 0v27" strokeWidth="2" />
            <path d="M19.5 55V28.5a12.5 12.5 0 0 1 25 0V55" strokeWidth="0.9" />
            <path d="M32 24.5l2.1 8.4 8.4 2.1-8.4 2.1L32 45.5l-2.1-8.4-8.4-2.1 8.4-2.1z" fill="#cfa557" stroke="none" />
            <path d="M7 55.5h50" strokeWidth="2" />
          </svg>
          <div style={{ fontSize: 30, letterSpacing: 8, fontWeight: 600 }}>FIX-IT SHOP</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 7, color: "#cfa557", textTransform: "uppercase" }}>
            Veteran-Owned · Eunice, Louisiana
          </div>
          <div style={{ fontSize: 96, lineHeight: 1, marginTop: 24, fontFamily: "serif" }}>Held to a higher standard.</div>
        </div>
        <div style={{ display: "flex", height: 2, background: "linear-gradient(90deg, #cfa557, transparent)" }} />
      </div>
    ),
    size,
  );
}
