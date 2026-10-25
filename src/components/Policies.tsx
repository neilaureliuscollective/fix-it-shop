import { policies } from "@/content/site";
import { Glass } from "./Glass";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Policies() {
  return (
    <section id="policies" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Good to Know" title={<>The fine print.</>} />
        <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {policies.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <Glass className="h-full rounded-3xl p-8">
                <span className="hairline block w-10" />
                <h3 className="eyebrow mt-5 text-stone">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-mist">{p.body}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
