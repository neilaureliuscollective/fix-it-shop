// The Fix-It Shop mark: an arched doorway (the chair you step into), a guiding
// four-point star, and a single razor-straight threshold line.
export function Emblem({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path d="M14 55V28a18 18 0 0 1 36 0v27" stroke="currentColor" strokeWidth="2" />
      <path d="M19.5 55V28.5a12.5 12.5 0 0 1 25 0V55" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <path d="M32 24.5l2.1 8.4 8.4 2.1-8.4 2.1L32 45.5l-2.1-8.4-8.4-2.1 8.4-2.1z" fill="currentColor" />
      <path d="M7 55.5h50" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
