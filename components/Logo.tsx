import Link from "next/link";

/**
 * Brand logo image. `variant="dark"` (default) is the red wordmark with the
 * "Karachi - Pakistan" line, for light backgrounds (header).
 * `variant="light"` is the white wordmark for dark backgrounds (footer).
 * Pass `className` to set the rendered height; width follows the image.
 */
const LOGOS = {
  dark: { src: "/logo-red.png", width: 395, height: 56 },
  light: { src: "/logo-white.png", width: 316, height: 29 },
};

export default function Logo({
  variant = "dark",
  className,
  href = "/",
}: {
  variant?: "dark" | "light";
  className?: string;
  href?: string;
}) {
  const logo = LOGOS[variant];
  const size =
    className ?? (variant === "light" ? "h-[25px] sm:h-[29px]" : "h-[42px] sm:h-[47px]");

  return (
    <Link
      href={href}
      aria-label="Civic Tobacco Machinery — Home"
      className="inline-flex shrink-0 items-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export serves images unoptimized */}
      <img
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt="Civic Tobacco Machinery"
        className={`w-auto ${size}`}
      />
    </Link>
  );
}
