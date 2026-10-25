"use client";

import { useEffect, useState } from "react";
import { BookButton } from "./BookButton";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#katie", label: "Katie" },
  { href: "#ritual", label: "The Ritual" },
  { href: "#visit", label: "Visit" },
];

// Floating glass capsule, detached from the edges, with a scroll-progress filament.
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-[calc(env(safe-area-inset-top)+0.75rem)] sm:px-6">
      <div
        className={`glass mx-auto flex h-16 max-w-6xl items-center justify-between overflow-hidden rounded-full pr-2 pl-5 transition-all duration-500 sm:pl-6 ${
          scrolled ? "glass-strong" : ""
        }`}
      >
        <a href="#top" aria-label="The Fix-It Shop — back to top">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eyebrow text-mist transition-colors hover:text-stone">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <BookButton placement="header" className="!px-6 !py-3">
            Book Now
          </BookButton>
        </div>
        <span
          aria-hidden
          className="scroll-progress absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>
    </header>
  );
}
