import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/lib/site";
import { getDict } from "@/lib/dictionaries";
import { localeHref, type LocaleCode } from "@/lib/i18n";
import { generateLocaleParams } from "@/lib/locale-static-params";

export const dynamicParams = false;
export const generateStaticParams = generateLocaleParams;

export function generateMetadata({
  params,
}: {
  params: { locale: LocaleCode };
}): Metadata {
  const dict = getDict(params.locale);
  return buildMetadata({
    title: dict.about.metaTitle,
    description: dict.about.metaDescription,
    path: "/about",
    locale: params.locale,
  });
}

export default function LocaleAboutPage({
  params,
}: {
  params: { locale: LocaleCode };
}) {
  const locale = params.locale;
  const a = getDict(locale).about;

  return (
    <>
      <PageHero
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        intro={a.hero.intro}
        crumbs={[
          { name: getDict(locale).breadcrumbHome, path: localeHref(locale, "/") },
          { name: a.hero.eyebrow, path: localeHref(locale, "/about") },
        ]}
      />

      <section className="container mx-auto py-14">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="prose-content lg:col-span-2">
            <h2 className="text-2xl">{a.whoHeading}</h2>
            {a.who.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 className="text-2xl">{a.howHeading}</h2>
            {a.how.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <h2 className="text-2xl">{a.brandsHeading}</h2>
            <p>{a.brands}</p>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <h3 className="text-lg">{a.glance.heading}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-brand-500">{a.glance.basedIn}</dt>
                  <dd className="font-medium text-brand-800">{a.glance.basedInValue}</dd>
                </div>
                <div>
                  <dt className="text-brand-500">{a.glance.supply}</dt>
                  <dd className="font-medium text-brand-800">{a.glance.supplyValue}</dd>
                </div>
                <div>
                  <dt className="text-brand-500">{a.glance.serve}</dt>
                  <dd className="font-medium text-brand-800">{a.glance.serveValue}</dd>
                </div>
                <div>
                  <dt className="text-brand-500">{a.glance.call}</dt>
                  <dd className="font-medium text-brand-800">{siteConfig.phoneDisplay}</dd>
                </div>
              </dl>
              <Link href={localeHref(locale, "/contact")} className="btn-primary mt-6 w-full">
                {a.glance.talk}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-50 py-14">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{a.valuesEyebrow}</p>
            <h2 className="mt-2 text-3xl">{a.valuesHeading}</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {a.values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-brand-100 bg-white p-6"
              >
                <h3 className="text-lg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={a.ctaTitle} text={a.ctaText} locale={locale} />
    </>
  );
}
