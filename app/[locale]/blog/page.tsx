import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import MachineImage from "@/components/MachineImage";
import CtaBand from "@/components/CtaBand";
import { getPostsForLocale } from "@/lib/blog";
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
    title: dict.blog.metaTitle,
    description: dict.blog.metaDescription,
    path: "/blog",
    locale: params.locale,
  });
}

export default function LocaleBlogPage({
  params,
}: {
  params: { locale: LocaleCode };
}) {
  const locale = params.locale;
  const dict = getDict(locale);
  const b = dict.blog;
  const posts = getPostsForLocale(locale);
  const dateFmt = (iso: string) =>
    new Date(iso).toLocaleDateString(b.dateLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <>
      <PageHero
        eyebrow={b.eyebrow}
        title={b.indexTitle}
        intro={b.indexIntro}
        crumbs={[
          { name: dict.breadcrumbHome, path: localeHref(locale, "/") },
          { name: b.eyebrow, path: localeHref(locale, "/blog") },
        ]}
      />

      <section className="container mx-auto py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card transition-shadow hover:shadow-card-hover"
            >
              <MachineImage
                src={post.featuredImage}
                alt={post.title}
                label="Article"
                aspect="aspect-[16/9]"
                className="rounded-none"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-brand-400">
                  <time dateTime={post.date}>{dateFmt(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>
                    {post.readMinutes} {b.minRead}
                  </span>
                </div>
                <h2 className="mt-3 text-lg leading-snug">
                  <Link
                    href={localeHref(locale, `/blog/${post.slug}`)}
                    className="text-brand-900 after:absolute after:inset-0 group-hover:text-accent-700"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-600">
                  {post.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-accent-700">
                  {b.readArticle}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
