import { site } from "@/content/site";
import { Glass } from "./Glass";
import { HoursList } from "./HoursList";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pill =
  "btn-glass inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-[0.72rem] font-bold tracking-[0.28em] uppercase";

export function Visit() {
  const a = site.address;
  return (
    <section id="visit" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div>
          <SectionHeading eyebrow="Visit" title={<>Find the chair.</>} />
          <Reveal className="mt-10">
            <Glass className="rounded-[2rem] p-8 sm:p-10">
              <p className="eyebrow text-gold">Address</p>
              <address className="text-chrome mt-3 font-display text-3xl leading-snug not-italic sm:text-4xl">
                {a.street}
                <br />
                {a.city}, {a.region} {a.postalCode}
              </address>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={a.mapsUrl} target="_blank" rel="noopener" className={pill}>
                  Directions
                </a>
                <a href={site.phone.href} className={pill}>
                  Call {site.phone.display}
                </a>
              </div>
            </Glass>
          </Reveal>
        </div>
        <Reveal delay={120} className="lg:pt-[7.5rem]">
          <Glass tilt={false} className="rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow text-gold">Hours</p>
            <HoursList />
            <p className="mt-6 text-sm leading-relaxed text-mist">
              Walk-ins are welcome Tuesday through Friday. Saturday is appointment only. Live availability is always
              on the booking page.
            </p>
          </Glass>
        </Reveal>
      </div>
    </section>
  );
}
