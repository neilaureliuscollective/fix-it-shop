import { policies } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Policies() {
  return (
    <section id="policies" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Good to Know" title={<>The fine print.</>} />
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {policies.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="border-t border-gold/40 pt-6">
              <h3 className="eyebrow text-stone">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-mist">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
