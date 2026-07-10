import Link from "next/link";

/**
 * Brand wordmark, rendered as text in the Poppins logo font so it never
 * clips and stays crisp at any size.
 * `variant="light"` is for dark backgrounds (footer, dark hero).
 */
export default function Logo({
  variant = "dark",
  className = "text-[1.35rem] sm:text-[1.55rem]",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const color = variant === "light" ? "text-white" : "text-accent-600";

  return (
    <Link
      href="/"
      aria-label="Civic Tobacco Machinery — Home"
      className="inline-flex shrink-0 items-center"
    >
      <span
        className={`whitespace-nowrap font-logo font-bold leading-none tracking-tight ${color} ${className}`}
      >
        Civic Tobacco Machinery
      </span>
    </Link>
  );
}
