import { ArcEmblem } from "./ArcEmblem";
import { BookButton } from "./BookButton";
import { Glass } from "./Glass";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-5xl">
        <Glass tilt={false} className="glass-gold overflow-hidden rounded-[2.5rem] px-6 py-20 text-center sm:px-12 sm:py-28">
          <div className="pointer-events-none absolute top-1/2 left-1/2 w-[620px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14]">
            <ArcEmblem />
          </div>
          <div className="relative">
            <span className="eyebrow text-gold-bright">Whenever You&apos;re Ready</span>
            <h2 className="mt-6 font-display text-5xl leading-[1] font-medium sm:text-7xl">
              <span className="text-chrome">Come sit down a while.</span>
              <br />
              <span className="text-gold-foil text-glow-gold italic">You&apos;ve earned it.</span>
            </h2>
            <div className="mt-12 flex justify-center">
              <BookButton placement="final_cta" />
            </div>
          </div>
        </Glass>
      </Reveal>
    </section>
  );
}
