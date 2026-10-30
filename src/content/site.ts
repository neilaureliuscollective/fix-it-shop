// Single source of truth for everything Katie may need to change.
// Prices, hours, services and policy copy live here — nowhere else.

export const BOOKING_URL = "https://fixitshop.glossgenius.com/services";

export const site = {
  name: "The Fix-It Shop",
  shortName: "Fix-It Shop",
  stylist: "Katie",
  tagline: "More than a haircut.",
  description:
    "Men's grooming in Eunice, Louisiana, built around family, confidence and the legacy you carry forward. Clean fades, shaped beards and a chair where Katie helps every client leave standing taller.",
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
      "Everything, start to finish. Precision cut, beard sculpt, edge-up, scalp massage and hot towels. The one you book when you need the whole visit to be about you.",
    price: null, // TODO: confirm price with Katie
    minutes: null, // TODO: confirm duration with Katie
    includes: ["Precision haircut", "Beard sculpting", "Edge-up", "Scalp massage", "Hot towels"],
    signature: true,
  },
  {
    id: "fix-it",
    name: "The Fix-It",
    line: "Your everyday fade.",
    description:
      "A clean, carefully blended fade, cut for how you actually wear your hair. Add a hot-towel shampoo if you want a few extra minutes to unwind.",
    price: 30,
    minutes: 30,
    includes: ["Precision fade", "Line-up", "Optional hot-towel shampoo"],
  },
  {
    id: "fix-it-edge",
    name: "Fix-It: Edge",
    line: "Fade plus a shaped beard.",
    description:
      "Your fade plus a fully shaped beard. Tidy, defined, and easy to keep up between visits.",
    price: 45,
    minutes: 60,
    includes: ["Precision fade", "Beard sculpting", "Defined lines"],
  },
  {
    id: "fix-it-jr",
    name: "Fix-It: Jr.",
    line: "For the young men, 10 & under.",
    description:
      "A patient chair and a cut they're proud to show off. Good habits start early. No wash or towel service.",
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
    title: "A chair that's yours",
    body: "No rush and no pressure. Talk about your week, your family, your plans, or just close your eyes. Both are welcome.",
  },
  {
    n: "02",
    title: "Work done with care",
    body: "Clean fades, sharp lines, a beard with real shape. Done carefully, because you trusted her with it.",
  },
  {
    n: "03",
    title: "A legacy carried forward",
    body: "You leave ready to show up for the people who count on you. Because how you carry yourself reaches far beyond the chair.",
  },
];

export const ritual = [
  {
    n: "01",
    title: "You walk in.",
    body: "Maybe it's been a long week. Maybe a long year. Either way, you're welcome here, just as you are.",
  },
  {
    n: "02",
    title: "You sit down.",
    body: "The cape goes on. The phone goes down. Talk if you want to. Sit quiet if you need to.",
  },
  {
    n: "03",
    title: "You breathe out.",
    body: "Clippers, shears, a warm towel. While the work comes together, you finally get a minute for yourself.",
  },
  {
    n: "04",
    title: "You see yourself.",
    body: "That first look in the mirror. Shoulders back. Same man, carrying it a little lighter.",
  },
];

export const policies = [
  {
    title: "Booking",
    body: "Book online anytime through GlossGenius. Pick your service, pick your time, and you're set.",
  },
  {
    title: "Cancellations",
    body: "Life happens. Just give as much notice as you can so someone else can have the chair. Late cancellations are subject to a 50% fee.",
  },
  {
    title: "The young men",
    body: "Fix-It: Jr. is for clients 10 and under. Older guys book The Fix-It.",
  },
];
