"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, isLocale, type LocaleCode } from "./i18n";

/**
 * Determine the active locale from the URL. Client-only. The root layout is
 * shared across all routes, so chrome components (Header, Footer) read the
 * locale from the pathname rather than from route params.
 */
export function useLocale(): LocaleCode {
  const pathname = usePathname() || "/";
  const seg = pathname.split("/")[1];
  return seg && isLocale(seg) && seg !== defaultLocale
    ? (seg as LocaleCode)
    : defaultLocale;
}
