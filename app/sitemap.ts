import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import {
  categories,
  subcategories,
  products,
  categoryHref,
  subcategoryHref,
  productHref,
} from "@/lib/products";
import { blogPosts } from "@/lib/blog";
import { translatedPaths, hreflangAlternates } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();
  // The static export builds with trailingSlash: true, so every live URL
  // (other than the bare root) is served with a trailing slash. Sitemap
  // entries must match that canonical form exactly, or crawlers see each
  // one as a 301 redirect instead of a clean 200.
  const abs = (path: string) =>
    path === "/" || path.endsWith("/") ? `${base}${path}` : `${base}${path}/`;

  // hreflang alternates block for a translated path (en + de + x-default),
  // or undefined for pages that exist only in English.
  const langs = (path: string) => {
    const alts = hreflangAlternates(path);
    if (alts.length <= 1) return undefined;
    return {
      languages: Object.fromEntries(alts.map((a) => [a.hreflang, abs(a.path)])),
    };
  };

  const staticPages: MetadataRoute.Sitemap = [
    { url: abs("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: abs("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: abs("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: abs("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: abs(categoryHref(c)),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const subcategoryPages: MetadataRoute.Sitemap = subcategories.map((s) => ({
    url: abs(subcategoryHref(s)),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: abs(productHref(p)),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: abs(`/blog/${post.slug}`),
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const english = [
    ...staticPages,
    ...categoryPages,
    ...subcategoryPages,
    ...productPages,
    ...blogPages,
  ];

  // De-duplicate by URL (some sub-categories now share a category URL).
  const seen = new Set<string>();
  const dedupedEnglish = english.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });

  // Attach hreflang alternates to the English entries that are translated.
  const withAlternates = dedupedEnglish.map((entry) => {
    const path =
      entry.url === abs("/") ? "/" : entry.url.slice(base.length).replace(/\/$/, "");
    const alternates = translatedPaths.includes(path) ? langs(path) : undefined;
    return alternates ? { ...entry, alternates } : entry;
  });

  // Add a localized entry for every translated path × prefixed locale.
  const localizedPages: MetadataRoute.Sitemap = translatedPaths.flatMap((path) => {
    const alts = hreflangAlternates(path).filter(
      (a) => a.hreflang !== "x-default" && a.path !== path,
    );
    return alts.map((a) => ({
      url: abs(a.path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 0.9 : 0.7,
      alternates: langs(path),
    }));
  });

  return [...withAlternates, ...localizedPages];
}
