import Image from "next/image";

// One reference-derived sculpted asset shared by every in-app placement.
export function Emblem({ className = "", title }: { className?: string; title?: string }) {
  return (
    <Image
      src="/icons/emblem.png"
      width={1024}
      height={1024}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      className={className}
    />
  );
}
