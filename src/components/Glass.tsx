"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

// A glass surface whose specular highlight follows the pointer and which tilts
// a few degrees in 3D under a mouse. Touch and reduced-motion users get the
// static material only.
export function Glass({
  children,
  className = "",
  tilt = true,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  as?: "div" | "article" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef(0);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
      if (tilt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.style.transform = `perspective(1100px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 7}deg) translateY(-2px)`;
      }
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transform = "";
    el.style.removeProperty("--mx");
    el.style.removeProperty("--my");
  };

  return (
    <Tag
      ref={ref as never}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`glass transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${className}`}
    >
      {children}
    </Tag>
  );
}
