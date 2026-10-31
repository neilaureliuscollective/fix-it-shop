import { BOOKING_URL, site } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const a = site.address;
  return (
    <footer className="relative border-t border-white/[0.08] bg-carbon/60 pt-16 pb-32 backdrop-blur-xl sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-6 max-w-sm leading-relaxed text-mist">A good chair, a clean cut, and someone in your corner.</p>
          <p className="eyebrow mt-6 !text-[0.6rem] text-gold">Men&apos;s Grooming · Built in Eunice</p>
        </div>
        <div>
          <p className="eyebrow text-stone">Visit</p>
          <address className="mt-4 leading-relaxed text-mist not-italic">
            {a.street}
            <br />
            {a.city}, {a.region} {a.postalCode}
          </address>
          <a href={site.phone.href} className="mt-2 block text-mist transition-colors hover:text-gold">
            {site.phone.display}
          </a>
        </div>
        <div>
          <p className="eyebrow text-stone">Explore</p>
          <ul className="mt-4 space-y-2 text-mist">
            <li><a href="#menu" className="transition-colors hover:text-gold">The Menu</a></li>
            <li><a href="#katie" className="transition-colors hover:text-gold">Meet Katie</a></li>
            <li><a href="#policies" className="transition-colors hover:text-gold">Policies</a></li>
            <li><a href={BOOKING_URL} target="_blank" rel="noopener" className="transition-colors hover:text-gold">Book Online</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-white/[0.06] px-5 pt-6 text-xs text-steel sm:flex-row sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Booking powered by GlossGenius.</span>
      </div>
    </footer>
  );
}
