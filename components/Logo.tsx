import Link from "next/link";
import Image from "next/image";

/**
 * Brand wordmark logo.
 * `variant="light"` swaps to the white version for dark backgrounds (footer, dark hero).
 * To use your own file instead, drop it in /public and update the `src` below.
 */
export default function Logo({
  variant = "dark",
  className = "h-8 w-auto sm:h-9",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src = variant === "light" ? "/logo-light.svg" : "/logo.svg";

  return (
    <Link
      href="/"
      aria-label="Civic Tobacco Machinery — Home"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src={src}
        alt="Civic Tobacco Machinery"
        width={700}
        height={92}
        priority
        unoptimized
        className={className}
      />
    </Link>
  );
}
