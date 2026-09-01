import Image from "next/image";

/**
 * Machine image with a graceful blank placeholder.
 *
 * Pass `src` once you have a real photo and it renders through next/image
 * (automatic optimisation, responsive sizes, lazy loading). Until then it
 * shows a clean branded placeholder so layouts are complete and consistent.
 */
export default function MachineImage({
  src,
  alt,
  label,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  aspect = "aspect-[4/3]",
  fit = "cover",
}: {
  src?: string;
  alt: string;
  /** Short caption shown on the placeholder. Defaults to alt. */
  label?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  aspect?: string;
  /** "contain" shows the whole machine without cropping (e.g. in a detail view). */
  fit?: "cover" | "contain";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-brand-100 ${aspect} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      ) : (
        <Placeholder label={label || alt} />
      )}
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-100 to-brand-200 p-4 text-center"
      aria-hidden="false"
      role="img"
      aria-label={label}
    >
      {/* subtle industrial gear/leaf mark */}
      <svg
        viewBox="0 0 64 64"
        className="h-12 w-12 text-brand-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="20" width="30" height="30" rx="4" />
        <path d="M38 30h10a6 6 0 0 1 6 6v14" />
        <circle cx="20" cy="35" r="6" />
        <path d="M20 14v6M14 41l-4 4M32 41l4 4" />
      </svg>
      <span className="text-xs font-medium uppercase tracking-wider text-brand-500">
        Image coming soon
      </span>
    </div>
  );
}
