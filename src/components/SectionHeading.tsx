import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5">
        <span className="h-1 w-1 rounded-full bg-gold shadow-[0_0_8px_2px_rgb(220_176_98/0.8)]" />
        <span className="eyebrow !text-[0.6rem] text-gold-bright">{eyebrow}</span>
      </span>
      <h2 className="text-chrome mt-6 font-display text-[2.6rem] leading-[1.02] font-medium tracking-tight sm:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{intro}</p>}
    </div>
  );
}
