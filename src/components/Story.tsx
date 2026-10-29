import Image from "next/image";
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
                A Marine who never
                <br />
                <span className="text-gold-foil italic">stopped showing up.</span>
              </>
            }
          />
          <Reveal className="mt-8 space-y-5 text-lg leading-relaxed text-mist">
            <p>
              Katie served in the United States Marine Corps. What stayed with her wasn&apos;t the toughness.
              It was learning to look out for the person next to you.
            </p>
            <p>
              She brought that home and built The Fix-It Shop from the ground up, right here in Eunice, one chair and
              one client at a time. She chose to work with men because she&apos;s seen what a good cut and an honest
              conversation can do for someone who&apos;s been carrying too much.
            </p>
            <p>
              She&apos;ll make sure you look sharp. Beyond that, she wants to see you win: at work, at home, and in
              the legacy you&apos;re building for the people who count on you. In the chair or out of it, if she can
              help, she will.
            </p>
            <p className="text-stone">
              The name says Fix-It. It was never about fixing you. It&apos;s about helping you get back to you.
            </p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <Glass as="figure" className="glass-gold mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[50%_50%_2rem_2rem/40%_40%_2rem_2rem]">
            <Image
              src="/scenes/craftsmanship.webp"
              alt="Illustrative service scene: a cosmetologist uses electric clippers and a comb to carefully taper a client's hair."
              fill
              sizes="(min-width: 1024px) 448px, (min-width: 640px) 448px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-8 text-center">
              <p className="text-chrome font-display text-3xl leading-tight italic sm:text-4xl">
                You&apos;re not broken.<br />You&apos;re just due.
              </p>
              <p className="mt-4 text-xs text-mist">Illustrative service scene</p>
            </figcaption>
          </Glass>
        </Reveal>
      </div>
    </section>
  );
}
