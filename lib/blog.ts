/**
 * Blog articles.
 *
 * Posts live as Markdown files with YAML front-matter in `content/blog/`.
 * The CMS at `/admin` creates and edits those files (committed to GitHub);
 * this loader reads them at build time so every post is statically
 * generated. Each post renders an Article + Breadcrumb JSON-LD.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  /** Custom <title> (defaults to `title`). Keep < 60 chars. */
  metaTitle?: string;
  description: string;
  excerpt: string;
  date: string; // ISO (YYYY-MM-DD)
  updated?: string;
  author: string;
  /** Small line under the author name, e.g. a role or location. */
  authorTitle?: string;
  /** Short author bio shown at the bottom of the article. */
  authorBio?: string;
  readMinutes: number;
  /** Path to the featured image under /public, e.g. /images/blog/foo.webp. */
  featuredImage?: string;
  categories: string[];
  tags: string[];
  keywords: string[];
  /** Article body as Markdown. */
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Directory for a locale's posts. English lives at the root; others nest. */
const localeDir = (locale: string) =>
  locale === "en" ? BLOG_DIR : path.join(BLOG_DIR, locale);

const asStringArray = (value: unknown): string[] =>
  Array.isArray(value)
    ? value.map((v) => String(v)).filter(Boolean)
    : typeof value === "string" && value.trim()
      ? value
          .split(",")
          .map((v) => v.trim())
          .filter(Boolean)
      : [];

/** Rough reading time from word count (~200 wpm), min 1. */
const estimateReadMinutes = (content: string): number =>
  Math.max(1, Math.round(content.trim().split(/\s+/).length / 200));

function readPost(dir: string, fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(dir, fileName), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    metaTitle: data.metaTitle ? String(data.metaTitle) : undefined,
    description: String(data.description ?? ""),
    excerpt: String(data.excerpt ?? data.description ?? ""),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    updated: data.updated ? String(data.updated) : undefined,
    author: String(data.author ?? "Civic Tobacco Machinery"),
    authorTitle: data.authorTitle ? String(data.authorTitle) : undefined,
    authorBio: data.authorBio ? String(data.authorBio) : undefined,
    readMinutes: data.readMinutes
      ? Number(data.readMinutes)
      : estimateReadMinutes(content),
    featuredImage:
      data.featuredImage && String(data.featuredImage).trim()
        ? String(data.featuredImage)
        : undefined,
    categories: asStringArray(data.categories),
    tags: asStringArray(data.tags),
    keywords: asStringArray(data.keywords),
    content: content.trim(),
  };
}

function loadPosts(dir: string): BlogPost[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => readPost(dir, e.name))
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

/** Posts for a locale (English at the root, others from content/blog/<locale>). */
export const getPostsForLocale = (locale: string): BlogPost[] =>
  loadPosts(localeDir(locale));

export const getPostForLocale = (locale: string, slug: string) =>
  getPostsForLocale(locale).find((p) => p.slug === slug);

/** English posts (default) — kept as the original exports. */
export const blogPosts: BlogPost[] = getPostsForLocale("en");

export const getPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

/**
 * Blog paths that have a German translation — "/blog" plus each translated
 * post. Server-only (reads the filesystem); consumed by the sitemap. The
 * client-facing translated-path set in i18n.ts hardcodes these so chrome
 * links + hreflang stay consistent without pulling `fs` into the client.
 */
export const translatedBlogPaths: string[] = (() => {
  const de = getPostsForLocale("de");
  if (de.length === 0) return [];
  return ["/blog", ...de.map((p) => `/blog/${p.slug}`)];
})();
