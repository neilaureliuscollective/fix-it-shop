// Single source of truth for everything Katie may need to change.
// Prices, hours, services and policy copy live here — nowhere else.

export const BOOKING_URL = "https://fixitshop.glossgenius.com/services";

export const site = {
  name: "The Fix-It Shop",
  shortName: "Fix-It Shop",
  stylist: "Katie",
  tagline: "Precision grooming for men.",
  description:
    "Veteran-owned men's grooming in Eunice, Louisiana. Precision fades, sculpted beards and hot-towel finishes by Katie — a United States Marine who built The Fix-It Shop from the ground up.",
  phone: { display: "(337) 945-9138", href: "tel:+13379459138" },
  address: {
    street: "230 W Walnut Ave",
    city: "Eunice",
    region: "LA",
    postalCode: "70535",
    country: "US",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Fix-It+Shop+230+W+Walnut+Ave+Eunice+LA+70535",
  },
} as const;

export type Service = {
  id: string;
  name: string;
  line: string;
  description: string;
  price: number | null; // null → shown as "See booking"
  minutes: number | null;
  includes: string[];
  signature?: boolean;
};

export const services: Service[] = [
  {
    id: "fix-it-edge-plus",
    name: "Fix-It: Edge+",
    line: "The full reset.",
    description:
      "Everything she does, in one sitting. Precision cut, beard sculpt, edge-up, scalp massage and hot towels. You walk out squared away.",
    price: null, // TODO: confirm price with Katie
    minutes: null, // TODO: confirm duration with Katie
    includes: ["Precision haircut", "Beard sculpting", "Edge-up", "Scalp massage", "Hot towels"],
    signature: true,
  },
  {
    id: "fix-it",
    name: "The Fix-It",
    line: "The signature fade.",
    description:
      "A precision-blended fade, cut to how you actually wear your hair. Finished with an optional hot-towel shampoo.",
    price: 30,
    minutes: 30,
    includes: ["Precision fade", "Line-up", "Optional hot-towel shampoo"],
  },
  {
    id: "fix-it-edge",
    name: "Fix-It: Edge",
    line: "Fade and full beard sculpt.",
    description:
      "The signature fade paired with a fully sculpted beard. Shape, length and lines, all drawn on purpose.",
    price: 45,
    minutes: 60,
    includes: ["Precision fade", "Beard sculpting", "Defined lines"],
  },
  {
    id: "fix-it-jr",
    name: "Fix-It: Jr.",
    line: "For young gentlemen, 10 & under.",
    description:
      "A clean, quick cut that builds confidence early. Calm chair, sharp result. No wash or towel service.",
    price: 25,
    minutes: 25,
    includes: ["Kids' cut", "Ages 10 & under"],
  },
];

export type Hours = { day: string; short: string; open: string | null; close: string | null; note?: string };

// TODO: confirm Thursday, Friday and Sunday with Katie.
export const hours: Hours[] = [
  { day: "Monday", short: "Mon", open: null, close: null, note: "Closed" },
  { day: "Tuesday", short: "Tue", open: "12:00", close: "18:00" },
  { day: "Wednesday", short: "Wed", open: "10:00", close: "18:00" },
  { day: "Thursday", short: "Thu", open: null, close: null, note: "By appointment" },
  { day: "Friday", short: "Fri", open: null, close: null, note: "By appointment" },
  { day: "Saturday", short: "Sat", open: "09:00", close: "14:00" },
  { day: "Sunday", short: "Sun", open: null, close: null, note: "Closed" },
];

export const pillars = [
  {
    n: "01",
    title: "Discipline",
    body: "On time, squared away, never rushed. The way a Marine runs anything.",
  },
  {
    n: "02",
    title: "Precision",
    body: "Every line measured, every blend finished. Men's hair is all she does.",
  },
  {
    n: "03",
    title: "Hospitality",
    body: "Real conversation in a chair that feels like yours. Sit down a client, leave a regular.",
  },
];

export const ritual = [
  { n: "01", title: "Consult", body: "How you wear it, how you work, what you want to see in the mirror." },
  { n: "02", title: "Cut", body: "Clean sections, tight blends, a shape built for your head." },
  { n: "03", title: "Detail", body: "Edges, lines and beard sharpened until it's right. Not close. Right." },
  { n: "04", title: "Finish", body: "Hot towel, styled, one last check. You leave ready." },
];

export const policies = [
  {
    title: "Booking",
    body: "Book online anytime through GlossGenius. Pick your service, pick your time, and you're set.",
  },
  {
    title: "Cancellations",
    body: "Plans change. Give as much notice as you can so the chair can go to someone else. Late cancellations are subject to a 50% fee.",
  },
  {
    title: "Young gentlemen",
    body: "Fix-It: Jr. is for clients 10 and under. Older gents book The Fix-It.",
  },
];
