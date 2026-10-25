import { BOOKING_URL, hours, services, site } from "@/content/site";

const dayMap: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

export function localBusinessSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    description: site.description,
    url,
    telephone: site.phone.href.replace("tel:", ""),
    priceRange: "$$",
    image: `${url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[h.day],
        opens: h.open,
        closes: h.close,
      })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
        ...(s.price !== null && { price: s.price, priceCurrency: "USD" }),
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: BOOKING_URL },
      result: { "@type": "Reservation", name: "Appointment" },
    },
  };
}
