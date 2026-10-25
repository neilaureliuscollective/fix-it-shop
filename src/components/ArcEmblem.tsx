import { Emblem } from "./Emblem";

// The hero centerpiece: the emblem suspended in a glass medallion, ringed by a
// slowly turning gold/ice light band and a precision bezel of tick marks.
export function ArcEmblem({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative aspect-square ${className}`}>
      {/* Outer glow */}
      <div
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(closest-side,rgb(220_176_98/0.35),transparent)] blur-2xl"
        style={{ animation: "pulse-glow 6s ease-in-out infinite" }}
      />
      {/* Rotating light band */}
      <div
        className="absolute inset-0 rounded-full p-px"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgb(245 220 162 / 0.95) 50deg, transparent 120deg, transparent 200deg, rgb(201 222 242 / 0.7) 250deg, transparent 320deg)",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
          animation: "spin-slow 14s linear infinite",
        }}
      />
      {/* Bezel ticks, counter-rotating */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-[4%] text-gold/50"
        style={{ animation: "spin-slow 90s linear infinite reverse" }}
      >
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.35" strokeDasharray="0.4 2.1" />
        <circle cx="50" cy="50" r="44.5" fill="none" stroke="rgb(201 222 242 / 0.25)" strokeWidth="0.2" />
        {[0, 90, 180, 270].map((a) => (
          <rect key={a} x="49.6" y="1" width="0.8" height="4" fill="currentColor" transform={`rotate(${a} 50 50)`} />
        ))}
      </svg>
      {/* Glass medallion */}
      <div className="glass absolute inset-[14%] flex items-center justify-center rounded-full">
        <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_50%_30%,rgb(255_255_255/0.08),transparent_60%)]" />
        <Emblem className="relative h-[46%] w-[46%] text-gold drop-shadow-[0_0_18px_rgb(220_176_98/0.6)]" />
      </div>
    </div>
  );
}
