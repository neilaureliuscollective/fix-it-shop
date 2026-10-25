import { site } from "@/content/site";
import { BookButton } from "./BookButton";
import { Emblem } from "./Emblem";

export function Hero() {
  return (
    <section id="top" className="surface-steel grain relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Oversized emblem as architecture, not decoration */}
      <Emblem className="pointer-events-none absolute -right-[18vw] top-1/2 h-[120vw] max-h-[1100px] w-[120vw] max-w-[1100px] -translate-y-1/2 text-gold opacity-[0.045] sm:-right-[8vw] sm:h-[78vw] sm:w-[78vw]" />
      {/* Vertical light seam */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[62%] hidden w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent lg:block" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-28 sm:px-8 sm:pb-24 lg:pb-32">
        <div className="flex items-center gap-4">
          <span className="eyebrow text-gold">Veteran-Owned · Eunice, Louisiana</span>
          <span className="hairline animate-draw hidden w-24 sm:block" />
        </div>

        <h1 className="mt-7 max-w-4xl font-display text-[3.4rem] leading-[0.95] font-medium tracking-[-0.02em] text-stone sm:text-[5.5rem] lg:text-[7.25rem]">
          Held to a <em className="text-gold-foil font-medium not-italic sm:italic">higher</em> standard.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
          Precision fades, sculpted beards and hot-towel finishes by {site.stylist}, a United States Marine who
          built this shop from the ground up.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <BookButton placement="hero" />
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.72rem] font-bold tracking-[0.28em] text-stone uppercase transition-colors hover:text-gold"
          >
            View the Menu
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/[0.08] pt-7">
          {[
            ["USMC", "Veteran"],
            ["Men's", "Hair only"],
            ["Local", "Built from scratch"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-display text-2xl text-gold sm:text-3xl">{k}</dt>
              <dd className="eyebrow mt-2 !text-[0.6rem] text-mist">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
