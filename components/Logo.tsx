import Link from "next/link";

/**
 * Brand wordmark, rendered as text in the Poppins logo font so it never
 * clips and stays crisp at any size. Pass `tagline` to show a small line
 * (e.g. location) under the wordmark.
 * `variant="light"` is for dark backgrounds (footer, dark hero).
 */
export default function Logo({
  variant = "dark",
  className = "text-[1.35rem] sm:text-[1.55rem]",
  tagline,
}: {
  variant?: "dark" | "light";
  className?: string;
  tagline?: string;
}) {
  const color = variant === "light" ? "text-white" : "text-accent-600";
  const tagColor = variant === "light" ? "text-brand-300" : "text-brand-500";

  return (
    <Link
      href="/"
      aria-label="Civic Tobacco Machinery — Home"
      className="inline-flex shrink-0 flex-col items-start justify-center leading-none"
    >
      <span
        className={`whitespace-nowrap font-logo font-bold leading-none tracking-tight ${color} ${className}`}
      >
        Civic Tobacco Machinery
      </span>
      {tagline && (
        <span
          className={`mt-1.5 w-full whitespace-nowrap text-center text-[0.72rem] font-semibold tracking-wide sm:text-[0.8rem] ${tagColor}`}
        >
          {tagline}
        </span>
      )}
    </Link>
  );
}
