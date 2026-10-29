import { Emblem } from "./Emblem";

// The sculpted mark stands alone, without a ring, frame or artificial halo.
export function ArcEmblem({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`relative aspect-square ${className}`}>
      <Emblem className="h-full w-full object-contain" />
    </div>
  );
}
