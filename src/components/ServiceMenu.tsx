import { services, type Service } from "@/content/site";
import { BookButton } from "./BookButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Meta({ s }: { s: Service }) {
  return (
    <div className="text-right">
      {s.price !== null && <div className="font-display text-3xl text-gold sm:text-4xl">${s.price}</div>}
      <div className="eyebrow mt-1 !text-[0.6rem] text-mist">{s.minutes !== null ? `${s.minutes} min` : "Pricing on booking"}</div>
    </div>
  );
}

function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 90}
      className={`group relative flex flex-col border p-7 transition-colors duration-500 sm:p-9 ${
        s.signature
          ? "surface-steel border-gold/50 lg:col-span-3"
          : "border-white/[0.08] bg-ink hover:border-gold/40"
      }`}
    >
      {s.signature && (
        <span className="eyebrow absolute -top-3 left-7 bg-gold px-3 py-1 !text-[0.6rem] text-carbon sm:left-9">
          Signature Experience
        </span>
      )}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-3xl font-medium text-stone sm:text-4xl">{s.name}</h3>
          <p className="eyebrow mt-3 text-gold">{s.line}</p>
        </div>
        <Meta s={s} />
      </div>
      <p className="mt-6 max-w-xl leading-relaxed text-mist">{s.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {s.includes.map((i) => (
          <li key={i} className="border border-white/10 px-3 py-1.5 text-xs tracking-wide text-stone/80">
            {i}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <BookButton
          service={s.id}
          placement="menu"
          variant={s.signature ? "solid" : "outline"}
          className="w-full sm:w-auto"
        >
          Book {s.name}
        </BookButton>
      </div>
    </Reveal>
  );
}

export function ServiceMenu() {
  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Menu"
          title={
            <>
              Four services.
              <br />
              <span className="text-mist italic">No shortcuts.</span>
            </>
          }
          intro="Every appointment gets the same thing: her full attention and a finish she'd put her name on."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
