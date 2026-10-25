import { ritual } from "@/content/site";
import { Glass } from "./Glass";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Ritual() {
  return (
    <section id="ritual" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Ritual"
          title={
            <>
              What happens
              <br />
              <span className="text-mist italic">in the chair.</span>
            </>
          }
          intro="Same order, every visit. That's how the result stays consistent."
        />
        <ol className="relative mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* Connecting filament (desktop) */}
          <span aria-hidden className="hairline absolute top-[3.25rem] right-8 left-8 hidden opacity-40 lg:block" />
          {ritual.map((r, i) => (
            <Reveal as="li" key={r.n} delay={i * 110}>
              <Glass className="h-full rounded-3xl p-8">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-carbon/60 font-display text-lg text-gold-bright shadow-[inset_0_0_0_1px_rgb(220_176_98/0.5),0_0_20px_-2px_rgb(220_176_98/0.45)]">
                  {r.n}
                </span>
                <h3 className="text-chrome mt-7 font-display text-3xl">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-mist">{r.body}</p>
              </Glass>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
