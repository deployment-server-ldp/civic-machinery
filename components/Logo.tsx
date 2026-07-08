import Link from "next/link";

/**
 * Text wordmark logo — "Civic Tobacco Machinery".
 * `variant` switches colours for light headers vs dark footers.
 */
export default function Logo({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const primary = variant === "light" ? "text-white" : "text-brand-900";
  const sub = variant === "light" ? "text-accent-300" : "text-accent-600";

  return (
    <Link
      href="/"
      aria-label="Civic Tobacco Machinery — Home"
      className="group inline-flex items-center gap-3"
    >
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-900 transition-colors group-hover:bg-brand-800"
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7">
          <path
            d="M20 6 a14 14 0 1 0 9.7 24 l-6.6-6.6 a4.7 4.7 0 1 1 0-13.1 L29.7 4 A14 14 0 0 0 20 6 Z"
            fill="#c8952e"
          />
          <circle cx="20" cy="20" r="4" fill="#c8952e" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight sm:text-xl ${primary}`}
        >
          Civic Tobacco
        </span>
        <span
          className={`text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${sub}`}
        >
          Machinery
        </span>
      </span>
    </Link>
  );
}
