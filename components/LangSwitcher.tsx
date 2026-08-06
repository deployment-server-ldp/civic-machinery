"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  localesForPath,
  localePath,
  stripLocale,
} from "@/lib/i18n";
import { useLocale } from "@/lib/use-locale";

/**
 * Language switcher. Shows the languages this page is available in and links to
 * each counterpart. Hidden on pages with no translation (only English exists).
 */
export default function LangSwitcher({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const active = useLocale();
  const { path } = stripLocale(pathname);
  const available = localesForPath(path);

  if (available.length < 2) return null;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <GlobeIcon />
      <ul className="flex items-center gap-0.5">
        {available.map((code) => {
          const isActive = code === active;
          return (
            <li key={code}>
              <Link
                href={localePath(code, path)}
                hrefLang={locales[code].hreflang}
                aria-current={isActive ? "true" : undefined}
                className={`rounded px-1.5 py-0.5 text-xs font-semibold uppercase transition-colors ${
                  isActive
                    ? "text-accent-300"
                    : "text-brand-300 hover:text-white"
                }`}
              >
                {code}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 text-brand-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}
