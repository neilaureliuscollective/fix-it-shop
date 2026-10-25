import { pillars } from "@/content/site";
import { Glass } from "./Glass";
import { Reveal } from "./Reveal";

export function Pillars() {
  return (
    <section aria-label="What we stand for" className="relative py-8 sm:py-12">
      <ol className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-3 sm:gap-5 sm:px-8">
        {pillars.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i * 120}>
            <Glass className="h-full rounded-3xl p-8 sm:p-9">
              <span className="text-gold-foil font-display text-5xl">{p.n}</span>
              <h3 className="eyebrow mt-6 text-stone">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{p.body}</p>
            </Glass>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
