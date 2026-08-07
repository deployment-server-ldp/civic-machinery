"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { countries, type Country } from "@/lib/countries";
import {
  liveLocaleCodes,
  locales,
  localeHref,
  stripLocale,
  defaultLocale,
} from "@/lib/i18n";
import { useLocale } from "@/lib/use-locale";
import FlagIcon from "./FlagIcon";

/** Countries A→Z by name (used for the desktop single-row selector). */
const countriesAZ = [...countries].sort((a, b) => a.name.localeCompare(b.name));

/** The language a country is actually served in right now (falls back to en). */
const servedLocale = (c: Country) =>
  liveLocaleCodes.includes(c.locale) ? c.locale : defaultLocale;

export default function CountrySwitcher({
  variant = "bar",
}: {
  variant?: "bar" | "mobile";
}) {
  const pathname = usePathname() || "/";
  const activeLocale = useLocale();
  const { path } = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // The currently-selected market (first country matching the active language).
  const current =
    countries.find((c) => servedLocale(c) === activeLocale) ?? countries[0];

  const buttonCls =
    variant === "mobile"
      ? "flex w-full items-center justify-between gap-2 rounded-lg bg-brand-950 px-3 py-2.5 text-sm font-semibold text-brand-100"
      : "flex items-center gap-1.5 text-brand-100 hover:text-accent-300";

  return (
    <div ref={ref} className={`relative ${variant === "mobile" ? "" : ""}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={buttonCls}
      >
        <GlobeIcon />
        <span className="flex items-center gap-1.5">
          {variant === "bar" ? (
            <FlagIcon code={current.code} className="h-3.5 w-5" />
          ) : (
            <span aria-hidden="true">{current.flag}</span>
          )}
          {current.name}
        </span>
        <ChevronIcon open={open} />
      </button>

      {open && variant === "bar" && (
        <div className="absolute right-0 top-full z-[60] mt-2 w-64 rounded-2xl border border-brand-100 bg-white p-3 shadow-card">
          <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-brand-400">
            Select your country / region
          </p>
          {/* All countries A→Z in a single vertically-scrolling column. */}
          <ul className="flex max-h-80 flex-col gap-0.5 overflow-y-auto pr-1">
            {countriesAZ.map((c) => {
              const loc = servedLocale(c);
              const isActive = c.code === current.code;
              const localized = loc !== defaultLocale; // has a translated version
              return (
                <li key={c.code} className="shrink-0">
                  <Link
                    href={localeHref(loc, path)}
                    hrefLang={locales[loc].hreflang}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-accent-50 font-semibold text-accent-700"
                        : "text-brand-700 hover:bg-brand-50 hover:text-accent-700"
                    }`}
                  >
                    <FlagIcon code={c.code} className="h-3.5 w-5" />
                    <span>{c.name}</span>
                    {localized && (
                      <span className="shrink-0 rounded bg-accent-100 px-1 text-[0.6rem] font-bold uppercase text-accent-700">
                        {c.locale}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {open && variant === "mobile" && (
        <div className="mt-2 rounded-2xl border border-brand-100 bg-white p-3 shadow-card">
          <p className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-brand-400">
            Select your country / region
          </p>
          <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
            {countries.map((c) => {
              const loc = servedLocale(c);
              const isActive = c.code === current.code;
              const localized = loc !== defaultLocale; // has a translated version
              return (
                <li key={c.code}>
                  <Link
                    href={localeHref(loc, path)}
                    hrefLang={locales[loc].hreflang}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-accent-50 font-semibold text-accent-700"
                        : "text-brand-700 hover:bg-brand-50 hover:text-accent-700"
                    }`}
                  >
                    <span className="text-base leading-none" aria-hidden="true">
                      {c.flag}
                    </span>
                    <span className="min-w-0 flex-1 truncate">{c.name}</span>
                    {localized && (
                      <span className="shrink-0 rounded bg-accent-100 px-1 text-[0.6rem] font-bold uppercase text-accent-700">
                        {c.locale}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
