// Fixed, slowly drifting light field behind the whole page. Glass surfaces
// refract this as content scrolls over it. Pure CSS gradients: no blur filters,
// so it stays cheap on phones.
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-carbon">
      <div
        className="absolute -top-[25vh] -right-[20vw] h-[90vh] w-[80vw] rounded-full opacity-90"
        style={{
          background: "radial-gradient(closest-side, rgb(220 176 98 / 0.20), rgb(220 176 98 / 0.06) 55%, transparent)",
          animation: "drift-a 38s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute top-[30vh] -left-[30vw] h-[100vh] w-[90vw] rounded-full"
        style={{
          background: "radial-gradient(closest-side, rgb(27 92 134 / 0.42), rgb(13 59 88 / 0.16) 55%, transparent)",
          animation: "drift-b 46s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute -bottom-[30vh] right-[5vw] h-[80vh] w-[70vw] rounded-full"
        style={{
          background: "radial-gradient(closest-side, rgb(201 222 242 / 0.10), transparent 70%)",
          animation: "drift-a 52s ease-in-out infinite alternate-reverse",
        }}
      />
      {/* Fine grain so gradients never band */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_55%,rgb(0_0_0/0.65))]" />
    </div>
  );
}
