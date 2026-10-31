import Image from "next/image";
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

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-32 pb-24 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:pb-28">
        <div>
          <ArcEmblem className="mb-8 w-24 lg:hidden" />

          <span className="glass inline-flex items-center gap-3 rounded-full px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_2px_rgb(220_176_98/0.8)]" />
            <span className="eyebrow !text-[0.62rem] text-gold-bright">Men&apos;s Grooming · Eunice, Louisiana</span>
          </span>

          <h1 className="mt-8 max-w-4xl font-display text-[3.4rem] leading-[0.95] font-medium tracking-[-0.02em] sm:text-[5.5rem] lg:text-[7rem]">
            <span className="text-chrome">Come as you are.</span>
            <br />
            <span className="text-chrome">Leave </span>
            <em className="text-gold-foil text-glow-gold font-medium italic">standing taller.</em>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
            A men&apos;s chair in Eunice for looking sharp, carrying yourself with confidence, and showing up for what
            matters. {site.stylist} takes care of the cut. You carry the rest forward.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookButton placement="hero" />
            <a
              href="#menu"
              className="btn-glass inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[0.72rem] font-bold tracking-[0.28em] uppercase"
            >
              See the Menu
            </a>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {[
              ["Your hour", "Taken seriously"],
              ["Eunice", "Built for home"],
              ["Legacy", "Starts with you"],
            ].map(([k, v]) => (
              <Glass key={k} className="rounded-2xl px-4 py-4 sm:px-5 sm:py-5">
                <dt className="font-display text-2xl text-gold-bright sm:text-3xl">{k}</dt>
                <dd className="eyebrow mt-1.5 !text-[0.55rem] !tracking-[0.24em] text-mist sm:!text-[0.6rem]">{v}</dd>
              </Glass>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
          <div className="glass-gold relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_100px_-35px_rgb(0_0_0/0.9)] lg:aspect-[4/5]">
            <Image
              src="/images/confident-beard-hero-v2.webp"
              alt="A white man with a full head of freshly styled hair and a carefully shaped full beard"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              className="object-cover object-[48%_center]"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-transparent to-transparent" />
            <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-5 rounded-2xl border border-white/10 bg-carbon/55 p-5 backdrop-blur-xl">
              <p className="max-w-[14rem] font-display text-2xl leading-tight italic text-stone">Clean work. Careful detail. A chair where you can breathe out.</p>
              <ArcEmblem className="w-16 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
