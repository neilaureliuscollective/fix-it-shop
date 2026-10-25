"use client";

import { useEffect, useState } from "react";
import { BookButton } from "./BookButton";

// Mobile-only: a permanent, thumb-reach booking bar once the hero CTA scrolls away.
export function StickyBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-carbon/90 px-4 pt-3 backdrop-blur-xl transition-transform duration-500 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
      inert={!show}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg leading-tight text-stone">Ready when you are.</p>
          <p className="eyebrow !text-[0.55rem] text-mist">Online booking · 24/7</p>
        </div>
        <BookButton placement="sticky_bar" className="!px-5 !py-3.5">
          Book
        </BookButton>
      </div>
    </div>
  );
}
