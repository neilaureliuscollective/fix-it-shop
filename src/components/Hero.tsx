import { site } from "@/content/site";
import { ArcEmblem } from "./ArcEmblem";
import { BookButton } from "./BookButton";
import { Glass } from "./Glass";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Horizon grid: a faint perspective floor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] opacity-40 [mask-image:linear-gradient(to_top,#000,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(220 176 98 / 0.18) 1px, transparent 1px), linear-gradient(90deg, rgb(220 176 98 / 0.18) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: "perspective(600px) rotateX(62deg)",
          transformOrigin: "bottom",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-32 pb-24 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:pb-28">
        <div>
          <ArcEmblem className="mb-8 w-24 lg:hidden" />

          <span className="glass inline-flex items-center gap-3 rounded-full px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_2px_rgb(220_176_98/0.8)]" />
            <span className="eyebrow !text-[0.62rem] text-gold-bright">Veteran-Owned · Eunice, Louisiana</span>
          </span>

          <h1 className="mt-8 max-w-4xl font-display text-[3.4rem] leading-[0.95] font-medium tracking-[-0.02em] sm:text-[5.5rem] lg:text-[7rem]">
            <span className="text-chrome">Held to a </span>
            <em className="text-gold-foil text-glow-gold font-medium not-italic sm:italic">higher</em>
            <span className="text-chrome"> standard.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
            Precision fades, sculpted beards and hot-towel finishes by {site.stylist}, a United States Marine who
            built this shop from the ground up.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookButton placement="hero" />
            <a
              href="#menu"
              className="btn-glass inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.72rem] font-bold tracking-[0.28em] uppercase"
            >
              View the Menu
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {[
              ["USMC", "Veteran"],
              ["Men's", "Hair only"],
              ["Local", "Built from scratch"],
            ].map(([k, v]) => (
              <Glass key={k} className="rounded-2xl px-4 py-4 sm:px-5 sm:py-5">
                <dt className="font-display text-2xl text-gold-bright sm:text-3xl">{k}</dt>
                <dd className="eyebrow mt-1.5 !text-[0.55rem] !tracking-[0.24em] text-mist sm:!text-[0.6rem]">{v}</dd>
              </Glass>
            ))}
          </dl>
        </div>

        <ArcEmblem className="hidden w-full max-w-[460px] justify-self-end lg:block" />
      </div>
    </section>
  );
}
