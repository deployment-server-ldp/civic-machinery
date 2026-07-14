/**
 * Client-side CMS helpers for the /admin panel.
 *
 * The admin panel runs entirely in the browser (the site is a static
 * export) and publishes posts by committing Markdown files to GitHub with
 * the owner's personal access token. GitHub Actions then rebuilds the site
 * and deploys it to Hostinger.
 */

/** Where posts and their images live, and which branch to commit to. */
export const CMS = {
  owner: "deployment-server-ldp",
  repo: "civic-machinery",
  branch: "claude/sweet-heisenberg-qlvxuw",
  postsDir: "content/blog",
  imagesDir: "public/images/blog",
} as const;

/** Recommended featured-image spec, surfaced in the UI. */
export const FEATURED_IMAGE_SPEC = {
  width: 1200,
  height: 630,
  maxKB: 300,
  note: "1200 × 630 px (landscape), JPG or WebP, under 300 KB.",
};

export interface PostFields {
  slug: string;
  title: string;
  metaTitle?: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  authorTitle?: string;
  authorBio?: string;
  featuredImage?: string;
  categories: string[];
  tags: string[];
  keywords: string[];
  content: string;
}

export const CATEGORY_PRESETS = [
  "Packing Machines",
  "Manufacturing Machines",
  "Filter Machines",
  "Wrapping & Boxing",
  "Tobacco Machinery",
  "Used Machinery",
  "Guides & Advice",
  "Company News",
];

/** Turn a title into a URL-safe slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

const splitList = (v: string): string[] =>
  v
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export const toList = (v: string | string[]): string[] =>
  Array.isArray(v) ? v.filter(Boolean) : splitList(v);

/** Build the Markdown file (front-matter + body) for a post. */
export function buildPostMarkdown(f: PostFields): string {
  const q = (s: string) => JSON.stringify(s ?? "");
  const arr = (a: string[]) => "[" + a.map((s) => JSON.stringify(s)).join(", ") + "]";

  const lines = [
    "---",
    `title: ${q(f.title)}`,
    ...(f.metaTitle ? [`metaTitle: ${q(f.metaTitle)}`] : []),
    `description: ${q(f.description)}`,
    `excerpt: ${q(f.excerpt)}`,
    `date: ${q(f.date)}`,
    `author: ${q(f.author)}`,
    ...(f.authorTitle ? [`authorTitle: ${q(f.authorTitle)}`] : []),
    ...(f.authorBio ? [`authorBio: ${q(f.authorBio)}`] : []),
    `featuredImage: ${q(f.featuredImage ?? "")}`,
    `categories: ${arr(f.categories)}`,
    `tags: ${arr(f.tags)}`,
    `keywords: ${arr(f.keywords)}`,
    "---",
    "",
    f.content.trim(),
    "",
  ];
  return lines.join("\n");
}

/** UTF-8 safe base64 (GitHub content API wants base64). */
export function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return btoa(binary);
}

/** Read a File as base64 (no data: prefix). */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ----------------------------- GitHub API ----------------------------- */

const API = "https://api.github.com";

function headers(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

const contentsUrl = (p: string) =>
  `${API}/repos/${CMS.owner}/${CMS.repo}/contents/${p}`;

/** Verify a token has access to the repo (used at login). */
export async function verifyToken(token: string): Promise<boolean> {
  const res = await fetch(`${API}/repos/${CMS.owner}/${CMS.repo}`, {
    headers: headers(token),
  });
  return res.ok;
}

export interface RepoFile {
  name: string;
  path: string;
  sha: string;
}

export async function listPosts(token: string): Promise<RepoFile[]> {
  const res = await fetch(
    `${contentsUrl(CMS.postsDir)}?ref=${CMS.branch}`,
    { headers: headers(token) },
  );
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`List failed: ${res.status}`);
  const data = (await res.json()) as RepoFile[];
  return data.filter((f) => f.name.endsWith(".md"));
}

/** Get the raw text + sha of an existing file (for editing). */
export async function getFile(
  token: string,
  path: string,
): Promise<{ text: string; sha: string } | null> {
  const res = await fetch(`${contentsUrl(path)}?ref=${CMS.branch}`, {
    headers: headers(token),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Get failed: ${res.status}`);
  const data = await res.json();
  const text = new TextDecoder().decode(
    Uint8Array.from(atob(data.content.replace(/\n/g, "")), (c) =>
      c.charCodeAt(0),
    ),
  );
  return { text, sha: data.sha };
}

async function getSha(token: string, path: string): Promise<string | undefined> {
  const res = await fetch(`${contentsUrl(path)}?ref=${CMS.branch}`, {
    headers: headers(token),
  });
  if (res.ok) return (await res.json()).sha as string;
  return undefined;
}

/** Create or update a file (content is already base64). */
export async function putFile(
  token: string,
  path: string,
  base64: string,
  message: string,
): Promise<void> {
  const sha = await getSha(token, path);
  const res = await fetch(contentsUrl(path), {
    method: "PUT",
    headers: { ...headers(token), "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: base64,
      branch: CMS.branch,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Save failed (${res.status}): ${body}`);
  }
}

export async function deleteFile(
  token: string,
  path: string,
  sha: string,
  message: string,
): Promise<void> {
  const res = await fetch(contentsUrl(path), {
    method: "DELETE",
    headers: { ...headers(token), "Content-Type": "application/json" },
    body: JSON.stringify({ message, sha, branch: CMS.branch }),
  });
  if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
}
