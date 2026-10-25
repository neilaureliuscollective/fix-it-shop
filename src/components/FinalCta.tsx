import { BookButton } from "./BookButton";
import { Emblem } from "./Emblem";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="surface-steel grain relative overflow-hidden border-t border-gold/20 py-28 text-center sm:py-36">
      <Emblem className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.05]" />
      <Reveal className="relative mx-auto max-w-3xl px-5">
        <span className="eyebrow text-gold">Your Chair Is Ready</span>
        <h2 className="mt-6 font-display text-5xl leading-[1] font-medium text-stone sm:text-7xl">
          Walk in a client.
          <br />
          <span className="text-gold-foil italic">Walk out a regular.</span>
        </h2>
        <div className="mt-12 flex justify-center">
          <BookButton placement="final_cta" />
        </div>
      </Reveal>
    </section>
  );
}
