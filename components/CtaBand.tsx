import Link from "next/link";
import { whatsappLink, siteConfig } from "@/lib/site";
import { getDict } from "@/lib/dictionaries";
import { localeHref, defaultLocale, type LocaleCode } from "@/lib/i18n";

/**
 * Conversion band used near the bottom of most pages. `title`/`text` override
 * the localized defaults; `locale` selects the language for the button labels
 * and the contact link.
 */
export default function CtaBand({
  title,
  text,
  waMessage,
  locale = defaultLocale,
}: {
  title?: string;
  text?: string;
  waMessage?: string;
  locale?: LocaleCode;
}) {
  const dict = getDict(locale);
  const heading = title ?? dict.cta.title;
  const body = text ?? dict.cta.text;
  return (
    <section className="container mx-auto my-16">
      <div className="overflow-hidden rounded-3xl bg-brand-950 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl text-white sm:text-3xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-300">{body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] text-white hover:brightness-105"
            >
              {dict.cta.whatsapp}: {siteConfig.phoneDisplay}
            </a>
            <Link href={localeHref(locale, "/contact")} className="btn-ghost-light">
              {dict.cta.enquiry}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
