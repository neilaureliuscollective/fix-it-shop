import { Emblem } from "./Emblem";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Emblem className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-semibold tracking-[0.18em] whitespace-nowrap text-chrome">FIX-IT SHOP</span>
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.42em] whitespace-nowrap text-mist">EUNICE · LOUISIANA</span>
      </span>
    </span>
  );
}
