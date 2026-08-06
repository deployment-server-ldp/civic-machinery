"use client";

import { useEffect } from "react";
import { useLocale } from "@/lib/use-locale";
import { locales } from "@/lib/i18n";

/**
 * Keeps <html lang> and dir in sync with the active locale.
 *
 * With a static export and a single shared root layout, <html> is emitted once
 * with lang="en". This corrects it on the client for localized routes (and sets
 * dir="rtl" for right-to-left languages), so the document language matches the
 * content. hreflang + on-page content remain the primary language signals.
 */
export default function HtmlLangSync() {
  const locale = useLocale();
  useEffect(() => {
    const l = locales[locale];
    document.documentElement.lang = l.hreflang;
    document.documentElement.dir = l.dir;
  }, [locale]);
  return null;
}
