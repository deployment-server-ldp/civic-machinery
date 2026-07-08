"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { mainNav, type NavItem } from "@/lib/navigation";
import { siteConfig, whatsappLink } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Utility bar */}
      <div className="hidden border-b border-brand-100 bg-brand-950 text-brand-100 lg:block">
        <div className="container mx-auto flex h-9 items-center justify-between text-xs">
          <p>{siteConfig.tagline}</p>
          <div className="flex items-center gap-5">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-accent-300">
              Call: {siteConfig.phoneDisplay}
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
              WhatsApp
            </a>
            <span aria-hidden="true" className="text-brand-700">
              |
            </span>
            <span>SITE, Karachi</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <DesktopNavItem key={item.label} item={item} active={isActive(item.href)} />
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-800 hover:bg-brand-50 lg:hidden"
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {mobileOpen && <MobileMenu onNavigate={() => setMobileOpen(false)} />}
    </header>
  );
}

/* ----------------------------- Desktop ----------------------------- */

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  const hasDropdown = Boolean(item.children || item.columns);
  const linkCls = `inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    active
      ? "text-accent-700"
      : "text-brand-700 hover:text-accent-700 hover:bg-brand-50"
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
      <Link href={item.href} className={linkCls} aria-haspopup="true">
        {item.label}
        <IconChevron className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180" />
      </Link>

      {/* Simple dropdown */}
      {item.children && (
        <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <ul className="w-72 rounded-xl border border-brand-100 bg-white p-2 shadow-card">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block rounded-lg px-3 py-2 text-sm text-brand-700 hover:bg-brand-50 hover:text-accent-700"
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
        <div className="invisible absolute left-1/2 top-full z-50 w-screen max-w-4xl -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
            <div className="grid grid-cols-3 gap-6">
              {item.columns.map((col) => (
                <div key={col.heading}>
                  <Link
                    href={col.headingHref || item.href}
                    className="mb-3 block border-b border-brand-100 pb-2 text-sm font-semibold text-brand-900 hover:text-accent-700"
                  >
                    {col.heading}
                  </Link>
                  <ul className="space-y-1">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-md px-2 py-1.5 text-sm text-brand-600 hover:bg-brand-50 hover:text-accent-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-brand-50 px-4 py-3 text-sm">
              <span className="text-brand-600">
                Looking for a specific machine or a full line?
              </span>
              <Link href={item.href} className="link-accent">
                View all manufacturing machines →
              </Link>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}

/* ----------------------------- Mobile ------------------------------ */

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div
      id="mobile-menu"
      className="lg:hidden"
    >
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-brand-100 bg-white px-4 pb-8 pt-2">
        <ul className="divide-y divide-brand-100">
          {mainNav.map((item) => (
            <MobileNavItem key={item.label} item={item} onNavigate={onNavigate} />
          ))}
        </ul>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="btn-primary mt-5 w-full"
        >
          Get a Quote
        </Link>
        <div className="mt-4 flex flex-col gap-1 text-sm text-brand-500">
          <a href={`tel:${siteConfig.phone}`} className="py-1">
            📞 {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1"
          >
            💬 WhatsApp us
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
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="py-3 text-base font-medium text-brand-800"
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={`Toggle ${item.label} submenu`}
          className="flex h-10 w-10 items-center justify-center rounded-md text-brand-500 hover:bg-brand-50"
        >
          <IconChevron
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="pb-3">
          {item.children && (
            <ul className="space-y-0.5 border-l-2 border-brand-100 pl-4">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    onClick={onNavigate}
                    className="block py-2 text-sm text-brand-600"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {item.columns && (
            <div className="space-y-4 border-l-2 border-brand-100 pl-4">
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
