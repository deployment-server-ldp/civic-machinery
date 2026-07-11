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

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}${categoryHref(c)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const subcategoryPages: MetadataRoute.Sitemap = subcategories.map((s) => ({
    url: `${base}${subcategoryHref(s)}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}${productHref(p)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const all = [
    ...staticPages,
    ...categoryPages,
    ...subcategoryPages,
    ...productPages,
    ...blogPages,
  ];

  // De-duplicate by URL (some sub-categories now share a category URL).
  const seen = new Set<string>();
  return all.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
