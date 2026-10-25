import { BOOKING_URL } from "@/content/site";

// Every "Book" CTA resolves through here so the destination changes in one place.
// GlossGenius per-service deep links are not documented; until one is verified
// against the live booking site, every service lands on the services page
// (the service id is still recorded in analytics by <BookButton>).
export function bookingHref(): string {
  return BOOKING_URL;
}
