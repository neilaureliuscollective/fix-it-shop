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
      <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
        <span className="eyebrow text-gold">{eyebrow}</span>
        <span className="h-px w-12 bg-gold/60" />
      </div>
      <h2 className="mt-5 font-display text-[2.6rem] leading-[1.02] font-medium tracking-tight text-stone sm:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">{intro}</p>}
    </div>
  );
}
