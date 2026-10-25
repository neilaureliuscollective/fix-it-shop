import { site } from "@/content/site";
import { HoursList } from "./HoursList";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Visit() {
  const a = site.address;
  return (
    <section id="visit" className="border-t border-white/[0.06] bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Visit" title={<>Find the chair.</>} />
          <Reveal className="mt-10 space-y-8">
            <div>
              <p className="eyebrow text-gold">Address</p>
              <address className="mt-3 font-display text-3xl leading-snug text-stone not-italic">
                {a.street}
                <br />
                {a.city}, {a.region} {a.postalCode}
              </address>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={a.mapsUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 text-[0.72rem] font-bold tracking-[0.28em] text-stone uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Directions
              </a>
              <a
                href={site.phone.href}
                className="inline-flex items-center justify-center gap-3 border border-white/15 px-6 py-4 text-[0.72rem] font-bold tracking-[0.28em] text-stone uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Call {site.phone.display}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <p className="eyebrow text-gold">Hours</p>
          <HoursList />
          <p className="mt-6 text-sm leading-relaxed text-mist">
            Appointments only. Live availability is always on the booking page.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
