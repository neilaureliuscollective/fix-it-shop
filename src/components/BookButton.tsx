"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";
import { bookingHref } from "@/lib/booking";

type Variant = "solid" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  solid: "btn-gold rounded-full",
  outline: "btn-glass rounded-full",
  ghost: "text-gold hover:text-gold-bright",
};

export function BookButton({
  service,
  placement,
  variant = "solid",
  className = "",
  children = "Book with Katie",
}: {
  service?: string;
  placement: string;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={bookingHref()}
      target="_blank"
      rel="noopener"
      onClick={() => track("book_click", { placement, service: service ?? "any" })}
      className={`group inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.72rem] font-bold tracking-[0.28em] uppercase ${styles[variant]} ${className}`}
    >
      {variant === "solid" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[sheen_1s_ease-out]"
        />
      )}
      <span className="relative">{children}</span>
      <svg aria-hidden viewBox="0 0 24 24" className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 12h15M13 6l6 6-6 6" />
      </svg>
      <span className="sr-only">(opens booking in a new tab)</span>
    </a>
  );
}
