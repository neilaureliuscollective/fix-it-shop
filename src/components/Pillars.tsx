import { pillars } from "@/content/site";
import { Glass } from "./Glass";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Pillars() {
  return (
    <section id="more" aria-label="More than a haircut" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <SectionHeading
          eyebrow="More Than a Haircut"
          title={
            <>
              It was never
              <br />
              <span className="text-gold-foil italic">just about the hair.</span>
            </>
          }
        />
        <Reveal className="space-y-5 text-lg leading-relaxed text-mist lg:pt-16">
          <p>
            Most men don&apos;t come in for a fade alone. They come in carrying a long week, a hard season, a lot on
            their mind. They sit down, the cape goes on, and for a little while somebody is looking out for them.
          </p>
          <p>
            That&apos;s the part Katie cares about most. The cut gets you looking right. The time in the chair gets
            you feeling right. And you walk back out a little more like the man you&apos;re working to become.
          </p>
        </Reveal>
      </div>
      <ol className="mx-auto mt-16 grid max-w-7xl gap-4 px-5 sm:grid-cols-3 sm:gap-5 sm:px-8">
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
