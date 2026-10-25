import { ArcEmblem } from "./ArcEmblem";
import { Glass } from "./Glass";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Story() {
  return (
    <section id="katie" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_40%,rgb(27_92_134/0.25),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Meet Katie"
            title={
              <>
                Once a Marine.
                <br />
                <span className="text-gold-foil">Always the standard.</span>
              </>
            }
          />
          <Reveal className="mt-8 space-y-5 text-lg leading-relaxed text-mist">
            <p>
              Katie served in the United States Marine Corps, and she runs her chair the way she was trained to run
              everything: on time, squared away, and never finished until it&apos;s right.
            </p>
            <p>
              She built The Fix-It Shop from the ground up, right here in Eunice. No investors, no franchise. One
              client, one fade, one handshake at a time.
            </p>
            <p>
              She&apos;s a cosmetologist who chose to do one thing and do it better than anyone around: men&apos;s
              hair. The cuts are sharp. The conversation is real. And if something else in your life needs fixing,
              she&apos;ll probably have an opinion on that too.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <Glass as="figure" className="glass-gold mx-auto aspect-[4/5] max-w-md rounded-[50%_50%_2rem_2rem/40%_40%_2rem_2rem] p-10">
            <div className="pointer-events-none absolute inset-3 rounded-[inherit] shadow-[inset_0_0_0_1px_rgb(220_176_98/0.18)]" />
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ArcEmblem className="w-40" />
              <p className="text-chrome mt-8 font-display text-3xl leading-tight italic sm:text-4xl">
                Sharp isn&apos;t a style.
                <br />
                It&apos;s a standard.
              </p>
              <figcaption className="eyebrow mt-8 text-gold">The Fix-It Shop · Est. Eunice</figcaption>
            </div>
          </Glass>
        </Reveal>
      </div>
    </section>
  );
}
