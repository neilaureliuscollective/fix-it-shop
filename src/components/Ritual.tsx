import { ritual } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Ritual() {
  return (
    <section id="ritual" className="py-24 sm:py-32">
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
        <ol className="mt-16 grid gap-px overflow-hidden border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {ritual.map((r, i) => (
            <Reveal as="li" key={r.n} delay={i * 110} className="relative bg-carbon p-8 sm:p-10">
              <span className="font-display text-6xl text-gold/25">{r.n}</span>
              <h3 className="mt-6 font-display text-3xl text-stone">{r.title}</h3>
              <span className="mt-4 block h-px w-10 bg-gold" />
              <p className="mt-4 leading-relaxed text-mist">{r.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
