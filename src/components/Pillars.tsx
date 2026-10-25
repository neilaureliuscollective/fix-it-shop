import { pillars } from "@/content/site";
import { Reveal } from "./Reveal";

export function Pillars() {
  return (
    <section aria-label="What we stand for" className="border-y border-white/[0.06] bg-ink">
      <ol className="mx-auto grid max-w-7xl divide-y divide-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {pillars.map((p, i) => (
          <Reveal as="li" key={p.n} delay={i * 120} className="px-5 py-12 sm:px-8 sm:py-16">
            <span className="font-display text-4xl text-gold">{p.n}</span>
            <h3 className="eyebrow mt-5 text-stone">{p.title}</h3>
            <p className="mt-3 max-w-xs leading-relaxed text-mist">{p.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
