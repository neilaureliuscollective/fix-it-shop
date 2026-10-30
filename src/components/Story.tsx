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
            eyebrow="The Name Behind the Chair"
            title={
              <>
                A name passed down.
                <br />
                <span className="text-gold-foil italic">A purpose carried forward.</span>
              </>
            }
          />
          <Reveal className="mt-8 space-y-5 text-lg leading-relaxed text-mist">
            <p>
              The Fix-It Shop began with a story already woven into Katie&apos;s family: the children&apos;s book
              <em> Mr. Bell&apos;s Fixit Shop</em>, about a neighborhood craftsman known for mending what people brought
              through his door. The name carries that family history into something she is building for the next
              generation.
            </p>
            <p>
              Here, “fix it” means more than a fresh cut. It is the moment a man recognizes himself again, carries a
              little more confidence, and walks out ready to be better for himself, his family and his community.
            </p>
            <p>
              Katie built that purpose into one chair in Eunice. Her time in the Marine Corps is one chapter of her
              story; service still matters, but the legacy she is building now is rooted in family and in helping
              every man who sits down become more of who he wants to be.
            </p>
            <p className="text-stone">
              The name says Fix-It. It was never about fixing you. It&apos;s about helping you get back to you.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <Glass as="figure" className="glass-gold mx-auto aspect-[4/5] max-w-md rounded-[50%_50%_2rem_2rem/40%_40%_2rem_2rem] p-10">
            <div className="pointer-events-none absolute inset-3 rounded-[inherit] shadow-[inset_0_0_0_1px_rgb(220_176_98/0.18)]" />
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ArcEmblem className="w-40" />
              <p className="text-chrome mt-8 font-display text-3xl leading-tight italic sm:text-4xl">
                Legacy isn&apos;t left.
                <br />
                It&apos;s lived.
              </p>
              <figcaption className="eyebrow mt-8 text-gold">Family · Craft · Community</figcaption>
            </div>
          </Glass>
        </Reveal>
      </div>
    </section>
  );
}
