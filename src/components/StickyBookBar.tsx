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
      className={`pb-safe fixed inset-x-0 bottom-0 z-40 px-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-[140%] opacity-0"
      }`}
      aria-hidden={!show}
      inert={!show}
    >
      <div className="glass glass-strong flex items-center gap-3 rounded-full py-2 pr-2 pl-6">
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg leading-tight text-stone">Ready when you are.</p>
          <p className="eyebrow !text-[0.55rem] text-mist">Online booking · 24/7</p>
        </div>
        <BookButton placement="sticky_bar" className="!px-6 !py-3.5">
          Book
        </BookButton>
      </div>
    </div>
  );
}
