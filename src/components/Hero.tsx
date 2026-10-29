import Image from "next/image";
import { BookButton } from "./BookButton";
export function Hero() {
  return <section id="top" className="legacy-hero">
    <div className="hero-copy">
      <p className="eyebrow text-gold">Men’s grooming · Eunice, Louisiana</p>
      <h1>A little care.<br />A stronger <em>you.</em></h1>
      <p className="hero-intro">A careful cut. A moment to reset. A chair where you’re treated like you matter. That’s Katie’s Fix-It Shop.</p>
      <div className="hero-actions"><BookButton placement="hero" /><a className="story-link" href="#katie">The story behind the chair <span aria-hidden>↗</span></a></div>
      <p className="hero-signoff">ROOTED IN CARE. BUILT FOR A LEGACY.</p>
    </div>
    <figure className="hero-photo">
      <Image src="/images/care-still-life.webp" alt="An ivory towel and tortoiseshell comb on warm walnut, an illustrative study of care and craftsmanship" fill priority sizes="(max-width: 800px) 100vw, 50vw" />
      <div className="photo-overlay"><span className="eyebrow">The Fix-It philosophy</span><p>Some things are<br />worth caring for.</p></div>
      <figcaption>Illustrative still life · The spirit of the shop</figcaption>
    </figure>
  </section>;
}
