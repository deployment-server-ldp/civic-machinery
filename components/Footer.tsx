"use client";

import Link from "next/link";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import SocialLinks from "./SocialLinks";
import { siteConfig, whatsappLink, fullAddress } from "@/lib/site";
import {
  categories,
  getSubcategoriesFor,
  categoryHref,
  subcategoryHref,
} from "@/lib/products";
import { useLocale } from "@/lib/use-locale";
import { getDict } from "@/lib/dictionaries";
import { localeHref } from "@/lib/i18n";

export default function Footer() {
  const locale = useLocale();
  const dict = getDict(locale);
  const manufacturingSubs = getSubcategoriesFor("manufacturing-machines");

  const companyLinks = [
    { label: dict.footer.links.home, href: "/" },
    { label: dict.footer.links.about, href: "/about" },
    { label: dict.footer.links.blog, href: "/blog" },
    { label: dict.footer.links.contact, href: "/contact" },
  ];

  return (
    <footer className="mt-20 border-t border-brand-800 bg-brand-950 text-brand-200">
      <div className="container mx-auto py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" href={localeHref(locale, "/")} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-300">
              {dict.footer.blurb}
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:brightness-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {siteConfig.phoneDisplay}
            </a>
            <SocialLinks className="mt-5" />
          </div>

          {/* Machines */}
          <nav aria-label="Machines" className="text-sm">
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.machines}
            </h2>
            <ul className="space-y-2">
              {categories.map((c) => {
                const path = categoryHref(c);
                return (
                  <li key={c.slug}>
                    <Link
                      href={localeHref(locale, path)}
                      className="text-brand-300 hover:text-accent-300"
                    >
                      {dict.footer.labels[path] ?? c.navLabel}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/blog" className="text-brand-300 hover:text-accent-300">
                  {dict.footer.ourBlog}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Manufacturing */}
          <nav aria-label="Manufacturing machines" className="text-sm">
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.manufacturing}
            </h2>
            <ul className="space-y-2">
              {manufacturingSubs.map((s) => {
                const path = subcategoryHref(s);
                return (
                  <li key={s.slug}>
                    <Link
                      href={localeHref(locale, path)}
                      className="text-brand-300 hover:text-accent-300"
                    >
                      {dict.footer.labels[path] ?? s.navLabel}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-sm">
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              {dict.footer.reachUs}
            </h2>
            <address className="space-y-3 not-italic text-brand-300">
              <p>{fullAddress()}</p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-accent-300"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent-300"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="pt-1 text-brand-400">{dict.footer.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-800 pt-6 text-xs text-brand-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {dict.footer.rights}
          </p>
          <nav aria-label="Quick links">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={localeHref(locale, l.href)} className="hover:text-accent-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
