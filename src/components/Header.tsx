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

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        scrolled ? "border-b border-white/[0.06] bg-carbon/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="The Fix-It Shop — back to top">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eyebrow text-mist transition-colors hover:text-stone">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <BookButton placement="header" variant="outline" className="!px-5 !py-3">
            Book Now
          </BookButton>
        </div>
      </div>
    </header>
  );
}
