import { services, type Service } from "@/content/site";
import { BookButton } from "./BookButton";
import { Glass } from "./Glass";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Meta({ s }: { s: Service }) {
  return (
    <div className={`shrink-0 ${s.price !== null ? "text-right" : "sm:text-right"}`}>
      {s.price !== null && (
        <div className="text-gold-foil font-display text-4xl leading-none sm:text-5xl">${s.price}</div>
      )}
      <div className="eyebrow mt-2 !text-[0.6rem] text-mist">
        {s.minutes !== null ? `${s.minutes} min` : "Pricing on booking"}
      </div>
    </div>
  );
}

function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <Reveal delay={index * 90} className={s.signature ? "lg:col-span-3" : ""}>
      <Glass
        as="article"
        tilt={!s.signature}
        className={`flex h-full flex-col rounded-[2rem] p-7 sm:p-10 ${s.signature ? "glass-gold lg:p-12" : ""}`}
      >
        {s.signature && (
          <span className="btn-gold eyebrow mb-6 inline-flex self-start rounded-full px-3.5 py-1.5 !text-[0.58rem]">
            Signature Experience
          </span>
        )}
        <div className={`flex items-start justify-between gap-6 ${s.price === null ? "flex-col sm:flex-row" : ""}`}>
          <div>
            <h3 className={`text-chrome font-display font-medium ${s.signature ? "text-4xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
              {s.name}
            </h3>
            <p className="eyebrow mt-3 text-gold">{s.line}</p>
          </div>
          <Meta s={s} />
        </div>
        <p className={`mt-6 leading-relaxed text-mist ${s.signature ? "max-w-2xl text-lg" : "max-w-xl"}`}>{s.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {s.includes.map((i) => (
            <li
              key={i}
              className="rounded-full bg-white/[0.05] px-3.5 py-1.5 text-xs tracking-wide text-stone/85 shadow-[inset_0_1px_0_rgb(255_255_255/0.12),inset_0_0_0_1px_rgb(255_255_255/0.08)]"
            >
              {i}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-9">
          <BookButton
            service={s.id}
            placement="menu"
            variant={s.signature ? "solid" : "outline"}
            className="w-full sm:w-auto"
          >
            Book {s.name}
          </BookButton>
        </div>
      </Glass>
    </Reveal>
  );
}

export function ServiceMenu() {
  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 / Find your service"
          title={
            <>
              Four ways
              <br />
              <span className="text-mist italic">to take a seat.</span>
            </>
          }
          intro="Whichever you choose, you get the same thing: her full attention and the time you need."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
