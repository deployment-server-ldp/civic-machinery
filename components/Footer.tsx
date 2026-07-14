import Link from "next/link";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { siteConfig, whatsappLink, fullAddress } from "@/lib/site";
import {
  categories,
  getSubcategoriesFor,
  categoryHref,
  subcategoryHref,
} from "@/lib/products";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const manufacturingSubs = getSubcategoriesFor("manufacturing-machines");

  return (
    <footer className="mt-20 border-t border-brand-800 bg-brand-950 text-brand-200">
      <div className="container mx-auto py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-300">
              Suppliers of new and used cigarette manufacturing, packing and
              wrapping machines in Pakistan, with installation, spares and
              service you can rely on.
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
          </div>

          {/* Machines */}
          <nav aria-label="Machines" className="text-sm">
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Machines
            </h2>
            <ul className="space-y-2">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={categoryHref(c)}
                    className="text-brand-300 hover:text-accent-300"
                  >
                    {c.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-brand-300 hover:text-accent-300">
                  Our Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Manufacturing */}
          <nav aria-label="Manufacturing machines" className="text-sm">
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Manufacturing
            </h2>
            <ul className="space-y-2">
              {manufacturingSubs.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={subcategoryHref(s)}
                    className="text-brand-300 hover:text-accent-300"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-sm">
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Reach Us
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
              <p className="pt-1 text-brand-400">
                Mon–Sat, {siteConfig.hours.opens}–{siteConfig.hours.closes}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-800 pt-6 text-xs text-brand-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Quick links">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-accent-300">
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
