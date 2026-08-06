"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import LangSwitcher from "./LangSwitcher";
import { mainNav, type NavItem } from "@/lib/navigation";
import { siteConfig, whatsappLink } from "@/lib/site";
import { useLocale } from "@/lib/use-locale";
import { getDict } from "@/lib/dictionaries";
import { localeHref } from "@/lib/i18n";

// Maps each top-level nav href to its dictionary label key.
const NAV_LABEL_KEY: Record<
  string,
  "about" | "making" | "packing" | "filter" | "wrappers" | "cutter" | "contact"
> = {
  "/about": "about",
  "/cigarette-manufacturing-machines": "making",
  "/cigarette-packing-machines": "packing",
  "/cigarette-filter-making-machines": "filter",
  "/cigarette-box-wrapping-machines": "wrappers",
  "/cutter-feeder-reclaimer": "cutter",
  "/contact": "contact",
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const dict = getDict(locale);

  // Localize labels + prefix hrefs for the active locale. Product-page children
  // keep their English URLs (proper-noun names, not yet translated).
  const nav: NavItem[] = mainNav.map((item) => {
    const key = NAV_LABEL_KEY[item.href];
    return {
      ...item,
      label: key ? dict.nav[key] : item.label,
      href: localeHref(locale, item.href),
      children: item.children?.map((c) => ({
        ...c,
        href: localeHref(locale, c.href),
      })),
    };
  });

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/80 bg-white/85 shadow-[0_1px_2px_rgba(16,23,30,0.04),0_16px_40px_-28px_rgba(16,23,30,0.45)] backdrop-blur-xl">
      {/* Utility bar */}
      <div className="hidden bg-brand-950 text-brand-100 xl:block">
        <div className="mx-auto flex h-9 w-full max-w-[1600px] items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <p>{dict.header.tagline}</p>
          <div className="flex items-center gap-5">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-accent-300">
              {dict.header.call}: {siteConfig.phoneDisplay}
            </a>
            <span aria-hidden="true" className="text-brand-700">
              |
            </span>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-300"
            >
              {dict.header.whatsapp}
            </a>
            <span aria-hidden="true" className="text-brand-700">
              |
            </span>
            <LangSwitcher />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex h-[6.6rem] w-full max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:h-[7.5rem]">
        <Logo className="text-[1.45rem] sm:text-[1.65rem] 2xl:text-[1.95rem]" tagline="Karachi - Pakistan" href={localeHref(locale, "/")} />

        {/* Desktop nav, single-line glass pill */}
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-brand-200/70 bg-white/70 px-2 py-2 shadow-[0_10px_30px_-14px_rgba(28,35,45,0.4)] ring-1 ring-brand-900/[0.05] backdrop-blur-md 2xl:gap-1 2xl:px-2.5">
            {nav.map((item) => (
              <DesktopNavItem key={item.href} item={item} active={isActive(item.href)} dict={dict} />
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-200/70 bg-white/60 text-brand-800 backdrop-blur hover:bg-white xl:hidden"
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {mobileOpen && (
        <MobileMenu nav={nav} onNavigate={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

/* ----------------------------- Desktop ----------------------------- */

function DesktopNavItem({
  item,
  active,
  dict,
}: {
  item: NavItem;
  active: boolean;
  dict: ReturnType<typeof getDict>;
}) {
  const hasDropdown = Boolean(item.children || item.columns);
  const linkCls = `inline-flex items-center gap-0.5 whitespace-nowrap rounded-full px-2 py-3 text-[0.82rem] font-semibold tracking-tight transition-colors 2xl:px-2.5 2xl:text-[0.95rem] ${
    active
      ? "bg-accent-500 text-white shadow-sm"
      : "text-brand-700 hover:bg-white/80 hover:text-accent-700"
  }`;

  if (!hasDropdown) {
    return (
      <li>
        <Link href={item.href} className={linkCls}>
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="group relative">
      {/* Parent links to its category page; hovering reveals the dropdown. */}
      <Link href={item.href} className={linkCls} aria-haspopup="true">
        {item.label}
        <IconChevron className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180 2xl:h-4 2xl:w-4" />
      </Link>

      {/* Simple dropdown */}
      {item.children && (
        <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
          <ul className="w-80 rounded-2xl border border-brand-100 bg-white/95 p-2.5 shadow-card backdrop-blur">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className={
                    child.heading
                      ? "mb-1 block rounded-xl px-4 pb-2.5 pt-2.5 text-[1.05rem] font-semibold text-brand-900 underline decoration-accent-500/40 decoration-2 underline-offset-4 hover:bg-accent-50 hover:text-accent-700"
                      : "block rounded-xl px-4 py-2.5 text-[1.05rem] text-brand-700 hover:bg-accent-50 hover:text-accent-700"
                  }
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mega menu */}
      {item.columns && (
        <div className="invisible absolute right-0 top-full z-50 w-[min(56rem,calc(100vw-2rem))] pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
          <div className="rounded-3xl border border-brand-100 bg-white/95 p-6 shadow-card backdrop-blur">
            <div className="grid grid-cols-3 gap-6">
              {item.columns.map((col) => (
                <div key={col.heading}>
                  <Link
                    href={col.headingHref || item.href}
                    className="mb-3 block border-b border-brand-100 pb-2 text-[0.95rem] font-semibold text-brand-900 hover:text-accent-700"
                  >
                    {col.heading}
                  </Link>
                  <ul className="space-y-1">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-md px-2 py-1.5 text-[0.95rem] text-brand-600 hover:bg-accent-50 hover:text-accent-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-accent-50 px-4 py-3 text-sm">
              <span className="text-brand-600">{dict.megaMenu.prompt}</span>
              <Link href={item.href} className="link-accent">
                {dict.megaMenu.viewAll}
              </Link>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

/* ----------------------------- Mobile ------------------------------ */

function MobileMenu({
  nav,
  onNavigate,
}: {
  nav: NavItem[];
  onNavigate: () => void;
}) {
  return (
    <div id="mobile-menu" className="xl:hidden">
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-brand-100 bg-white/95 px-4 pb-8 pt-2 backdrop-blur">
        <ul className="divide-y divide-brand-100">
          {nav.map((item) => (
            <MobileNavItem key={item.href} item={item} onNavigate={onNavigate} />
          ))}
        </ul>
        <div className="mt-4 border-t border-brand-100 pt-4">
          <LangSwitcher className="rounded-lg bg-brand-950 px-3 py-2" />
        </div>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {siteConfig.phoneDisplay}
        </a>
        <div className="mt-4 flex flex-col gap-1 text-sm text-brand-500">
          <a href={`tel:${siteConfig.phone}`} className="py-1">
            📞 {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasDropdown = Boolean(item.children || item.columns);

  if (!hasDropdown) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="block py-3 text-base font-medium text-brand-800"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      {/* Parent row toggles the submenu (it has no page of its own). */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-brand-800"
      >
        <span>{item.label}</span>
        <IconChevron
          className={`h-4 w-4 text-brand-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="pb-3">
          {item.children && (
            <ul className="space-y-0.5 border-l-2 border-accent-100 pl-4">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={onNavigate}
                    className={
                      child.heading
                        ? "block py-2 text-sm font-semibold text-brand-900 underline decoration-accent-500/40 decoration-2 underline-offset-4"
                        : "block py-2 text-sm text-brand-600"
                    }
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {item.columns && (
            <div className="space-y-4 border-l-2 border-accent-100 pl-4">
              {item.columns.map((col) => (
                <div key={col.heading}>
                  <Link
                    href={col.headingHref || item.href}
                    onClick={onNavigate}
                    className="block py-1.5 text-sm font-semibold text-brand-800"
                  >
                    {col.heading}
                  </Link>
                  <ul className="space-y-0.5 pl-3">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onNavigate}
                          className="block py-1.5 text-sm text-brand-500"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </li>
  );
}

/* ----------------------------- Icons ------------------------------- */

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
function IconChevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
