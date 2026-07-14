"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  CMS,
  CATEGORY_PRESETS,
  FEATURED_IMAGE_SPEC,
  type PostFields,
  type RepoFile,
  buildPostMarkdown,
  deleteFile,
  fileToBase64,
  getFile,
  listPosts,
  putFile,
  slugify,
  todayISO,
  toList,
  utf8ToBase64,
  verifyToken,
} from "@/lib/cms";

const LS_TOKEN = "cms_token";
const LS_AUTHOR = "cms_author";

type Status = { kind: "idle" | "busy" | "ok" | "error"; msg?: string };

const errMsg = (e: unknown) => (e instanceof Error ? e.message : String(e));

const emptyForm = (author: string): PostFields => ({
  slug: "",
  title: "",
  metaTitle: "",
  description: "",
  excerpt: "",
  date: todayISO(),
  author: author || "Civic Tobacco Machinery",
  authorTitle: "Tobacco Machinery Specialists, Karachi",
  authorBio:
    "Civic Tobacco Machinery supplies new and reconditioned cigarette manufacturing, packing, wrapping and used tobacco machinery across Pakistan.",
  featuredImage: "",
  categories: [],
  tags: [],
  keywords: [],
  content: "",
});

/** Minimal parser for the front-matter our own files use. */
function parsePost(text: string): PostFields {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const author = "";
  const f = emptyForm(author);
  if (!m) {
    f.content = text;
    return f;
  }
  const [, fm, body] = m;
  const val = (raw: string) => {
    const t = raw.trim();
    try {
      if (t.startsWith('"') || t.startsWith("[")) return JSON.parse(t);
    } catch {
      /* fall through */
    }
    return t;
  };
  const rec = f as unknown as Record<string, string | string[]>;
  fm.split("\n").forEach((line) => {
    const i = line.indexOf(":");
    if (i < 0) return;
    const key = line.slice(0, i).trim();
    const raw = line.slice(i + 1);
    const v = val(raw);
    switch (key) {
      case "categories":
      case "tags":
      case "keywords":
        rec[key] = toList(v);
        break;
      default:
        if (key in f) rec[key] = typeof v === "string" ? v : String(v);
    }
  });
  f.content = body.trim();
  return f;
}

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [author, setAuthor] = useState("");
  const [authed, setAuthed] = useState(false);
  const [booting, setBooting] = useState(true);

  const [view, setView] = useState<"list" | "edit">("list");
  const [posts, setPosts] = useState<RepoFile[]>([]);
  const [form, setForm] = useState<PostFields>(emptyForm(""));
  const [editingSha, setEditingSha] = useState<string | undefined>();
  const [slugTouched, setSlugTouched] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const contentRef = useRef<HTMLTextAreaElement>(null);

  // Restore session
  useEffect(() => {
    const t = localStorage.getItem(LS_TOKEN) || "";
    const a = localStorage.getItem(LS_AUTHOR) || "";
    if (t) {
      verifyToken(t).then((ok) => {
        if (ok) {
          setToken(t);
          setAuthor(a);
          setAuthed(true);
          refreshPosts(t);
        } else {
          localStorage.removeItem(LS_TOKEN);
        }
        setBooting(false);
      });
    } else {
      setBooting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refreshPosts(t: string) {
    try {
      setPosts(await listPosts(t));
    } catch (e) {
      setStatus({ kind: "error", msg: errMsg(e) });
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ kind: "busy", msg: "Checking access…" });
    const ok = await verifyToken(token);
    if (!ok) {
      setStatus({ kind: "error", msg: "Access key is invalid or has no access to this repository." });
      return;
    }
    localStorage.setItem(LS_TOKEN, token);
    localStorage.setItem(LS_AUTHOR, author);
    setAuthed(true);
    setStatus({ kind: "idle" });
    refreshPosts(token);
  }

  function logout() {
    localStorage.removeItem(LS_TOKEN);
    setToken("");
    setAuthed(false);
    setView("list");
  }

  function newPost() {
    setForm(emptyForm(author));
    setEditingSha(undefined);
    setSlugTouched(false);
    setImageFile(null);
    setImagePreview("");
    setStatus({ kind: "idle" });
    setView("edit");
  }

  async function editPost(file: RepoFile) {
    setStatus({ kind: "busy", msg: "Loading post…" });
    const got = await getFile(token, file.path);
    if (!got) {
      setStatus({ kind: "error", msg: "Could not load post." });
      return;
    }
    const parsed = parsePost(got.text);
    parsed.slug = file.name.replace(/\.md$/, "");
    setForm(parsed);
    setEditingSha(got.sha);
    setSlugTouched(true);
    setImageFile(null);
    setImagePreview(parsed.featuredImage || "");
    setStatus({ kind: "idle" });
    setView("edit");
  }

  async function removePost(file: RepoFile) {
    if (!confirm(`Delete "${file.name}"? This cannot be undone.`)) return;
    setStatus({ kind: "busy", msg: "Deleting…" });
    try {
      await deleteFile(token, file.path, file.sha, `CMS: delete ${file.name}`);
      setStatus({ kind: "ok", msg: "Post deleted." });
      refreshPosts(token);
    } catch (e) {
      setStatus({ kind: "error", msg: errMsg(e) });
    }
  }

  function set<K extends keyof PostFields>(key: K, value: PostFields[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  const slug = useMemo(
    () => (slugTouched ? form.slug : slugify(form.title)),
    [form.slug, form.title, slugTouched],
  );

  function onImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function insert(before: string, after = "", placeholder = "") {
    const el = contentRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const sel = form.content.slice(start, end) || placeholder;
    const next =
      form.content.slice(0, start) + before + sel + after + form.content.slice(end);
    set("content", next);
    requestAnimationFrame(() => {
      el.focus();
      el.selectionStart = start + before.length;
      el.selectionEnd = start + before.length + sel.length;
    });
  }

  async function publish() {
    if (!form.title.trim()) return setStatus({ kind: "error", msg: "Title is required." });
    if (!form.content.trim()) return setStatus({ kind: "error", msg: "Content is required." });
    const finalSlug = slug || slugify(form.title);
    if (!finalSlug) return setStatus({ kind: "error", msg: "Could not build a URL slug from the title." });

    setStatus({ kind: "busy", msg: "Publishing…" });
    try {
      let featuredImage = form.featuredImage || "";

      if (imageFile) {
        const ext = (imageFile.name.split(".").pop() || "jpg").toLowerCase();
        const imgPath = `${CMS.imagesDir}/${finalSlug}.${ext}`;
        const base64 = await fileToBase64(imageFile);
        await putFile(token, imgPath, base64, `CMS: image for ${finalSlug}`);
        featuredImage = `/images/blog/${finalSlug}.${ext}`;
      }

      const fields: PostFields = {
        ...form,
        slug: finalSlug,
        author: form.author || author || "Civic Tobacco Machinery",
        featuredImage,
      };
      const md = buildPostMarkdown(fields);
      await putFile(
        token,
        `${CMS.postsDir}/${finalSlug}.md`,
        utf8ToBase64(md),
        `CMS: ${editingSha ? "update" : "publish"} ${finalSlug}`,
      );

      setStatus({
        kind: "ok",
        msg: "Published! Your site is rebuilding and will be live in a few minutes.",
      });
      setEditingSha(undefined);
      refreshPosts(token);
      setView("list");
    } catch (e) {
      setStatus({ kind: "error", msg: errMsg(e) });
    }
  }

  if (booting) {
    return (
      <div className="grid min-h-screen place-items-center text-brand-500">Loading…</div>
    );
  }

  /* ------------------------------- Login ------------------------------- */
  if (!authed) {
    return (
      <div className="grid min-h-screen place-items-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-2xl border border-brand-100 bg-white p-8 shadow-card"
        >
          <h1 className="text-2xl font-bold text-brand-900">Content Manager</h1>
          <p className="mt-1 text-sm text-brand-500">Civic Tobacco Machinery — blog CMS</p>

          <label className="mt-6 block text-sm font-semibold text-brand-700">
            Your name (author)
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Saad Subzwari"
              className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 font-normal"
            />
          </label>

          <label className="mt-4 block text-sm font-semibold text-brand-700">
            Access key
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="GitHub access token"
              className="mt-1 w-full rounded-lg border border-brand-200 px-3 py-2 font-normal"
              required
            />
          </label>
          <p className="mt-2 text-xs text-brand-400">
            Your access key is stored only in this browser and never shared. See the setup guide
            to create one.
          </p>

          <button
            type="submit"
            disabled={status.kind === "busy"}
            className="mt-6 w-full rounded-full bg-accent-500 px-5 py-3 font-semibold text-white hover:bg-accent-600 disabled:opacity-60"
          >
            {status.kind === "busy" ? "Checking…" : "Log in"}
          </button>
          {status.kind === "error" && (
            <p className="mt-3 text-sm text-red-600">{status.msg}</p>
          )}
        </form>
      </div>
    );
  }

  /* ------------------------------- Shell ------------------------------- */
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-brand-900">Content Manager</h1>
          <p className="text-sm text-brand-500">Signed in as {author || "author"}</p>
        </div>
        <div className="flex items-center gap-2">
          <a href="/blog" target="_blank" className="rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-white">
            View blog ↗
          </a>
          <button onClick={logout} className="rounded-full border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-white">
            Log out
          </button>
        </div>
      </header>

      {status.msg && (
        <div
          className={`mt-4 rounded-lg px-4 py-3 text-sm ${
            status.kind === "error"
              ? "bg-red-50 text-red-700"
              : status.kind === "ok"
                ? "bg-green-50 text-green-700"
                : "bg-brand-100 text-brand-700"
          }`}
        >
          {status.msg}
        </div>
      )}

      {view === "list" ? (
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-brand-800">All posts ({posts.length})</h2>
            <button onClick={newPost} className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-600">
              + New post
            </button>
          </div>
          <ul className="mt-4 divide-y divide-brand-100 rounded-2xl border border-brand-100 bg-white">
            {posts.length === 0 && (
              <li className="p-6 text-sm text-brand-500">No posts yet. Create your first one.</li>
            )}
            {posts.map((p) => (
              <li key={p.path} className="flex items-center justify-between gap-4 p-4">
                <span className="truncate text-sm font-medium text-brand-800">
                  {p.name.replace(/\.md$/, "")}
                </span>
                <span className="flex shrink-0 gap-2">
                  <button onClick={() => editPost(p)} className="rounded-full border border-brand-200 px-3 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-50">
                    Edit
                  </button>
                  <button onClick={() => removePost(p)} className="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50">
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main column */}
          <div className="space-y-5 rounded-2xl border border-brand-100 bg-white p-6">
            <Field label="Title (H1)">
              <input
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="Your headline"
                className="w-full rounded-lg border border-brand-200 px-3 py-2 text-lg font-semibold"
              />
            </Field>

            <Field label="URL slug" hint={`/blog/${slug || "…"}`}>
              <input
                value={slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  set("slug", slugify(e.target.value));
                }}
                className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
              />
            </Field>

            <Field label="Content" hint="Markdown supported">
              <div className="mb-2 flex flex-wrap gap-1.5">
                <ToolBtn onClick={() => insert("## ", "", "Heading")}>H2</ToolBtn>
                <ToolBtn onClick={() => insert("### ", "", "Subheading")}>H3</ToolBtn>
                <ToolBtn onClick={() => insert("**", "**", "bold")}>Bold</ToolBtn>
                <ToolBtn onClick={() => insert("*", "*", "italic")}>Italic</ToolBtn>
                <ToolBtn onClick={() => insert("- ", "", "list item")}>List</ToolBtn>
                <ToolBtn onClick={() => insert("[", "](https://)", "link text")}>Link</ToolBtn>
              </div>
              <textarea
                ref={contentRef}
                value={form.content}
                onChange={(e) => set("content", e.target.value)}
                rows={18}
                placeholder="Write your article here. Use ## for section headings."
                className="w-full rounded-lg border border-brand-200 px-3 py-2 font-mono text-sm leading-relaxed"
              />
            </Field>

            <Field label="Excerpt" hint="Short summary shown on the blog list">
              <textarea
                value={form.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
              />
            </Field>

            <Field label="Meta description" hint="For Google (≤ 160 chars)">
              <textarea
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                rows={2}
                className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
              />
            </Field>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="space-y-4 rounded-2xl border border-brand-100 bg-white p-5">
              <button
                onClick={publish}
                disabled={status.kind === "busy"}
                className="w-full rounded-full bg-accent-500 px-5 py-3 font-semibold text-white hover:bg-accent-600 disabled:opacity-60"
              >
                {status.kind === "busy" ? "Publishing…" : editingSha ? "Update post" : "Publish"}
              </button>
              <button onClick={() => setView("list")} className="w-full text-sm font-semibold text-brand-500 hover:text-brand-700">
                ← Back to all posts
              </button>
            </div>

            <div className="space-y-3 rounded-2xl border border-brand-100 bg-white p-5">
              <p className="text-sm font-semibold text-brand-800">Featured image</p>
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-brand-100">
                {imagePreview ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={imagePreview} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full place-items-center text-xs text-brand-400">No image</div>
                )}
              </div>
              <input type="file" accept="image/*" onChange={onImage} className="w-full text-xs" />
              <p className="text-xs text-brand-400">Recommended: {FEATURED_IMAGE_SPEC.note}</p>
              {imageFile && imageFile.size > FEATURED_IMAGE_SPEC.maxKB * 1024 && (
                <p className="text-xs text-amber-600">
                  This image is {(imageFile.size / 1024).toFixed(0)} KB — larger than the recommended{" "}
                  {FEATURED_IMAGE_SPEC.maxKB} KB. It will still work but may load slower.
                </p>
              )}
            </div>

            <div className="space-y-4 rounded-2xl border border-brand-100 bg-white p-5">
              <Field label="Publish date">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                  className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
                />
              </Field>

              <Field label="Categories">
                <div className="flex flex-wrap gap-1.5">
                  {CATEGORY_PRESETS.map((c) => {
                    const on = form.categories.includes(c);
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() =>
                          set(
                            "categories",
                            on
                              ? form.categories.filter((x) => x !== c)
                              : [...form.categories, c],
                          )
                        }
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          on ? "bg-accent-500 text-white" : "bg-brand-100 text-brand-600"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Tags" hint="Comma separated">
                <input
                  value={form.tags.join(", ")}
                  onChange={(e) => set("tags", toList(e.target.value))}
                  placeholder="HLP-200, Buying Guide"
                  className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
                />
              </Field>

              <Field label="Keywords (SEO)" hint="Comma separated">
                <input
                  value={form.keywords.join(", ")}
                  onChange={(e) => set("keywords", toList(e.target.value))}
                  className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
                />
              </Field>
            </div>

            <div className="space-y-4 rounded-2xl border border-brand-100 bg-white p-5">
              <Field label="Author name">
                <input
                  value={form.author}
                  onChange={(e) => set("author", e.target.value)}
                  className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
                />
              </Field>
              <Field label="Author title">
                <input
                  value={form.authorTitle}
                  onChange={(e) => set("authorTitle", e.target.value)}
                  className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
                />
              </Field>
              <Field label="Author bio" hint="Shown at the bottom of the post">
                <textarea
                  value={form.authorBio}
                  onChange={(e) => set("authorBio", e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-brand-200 px-3 py-2 text-sm"
                />
              </Field>
            </div>
          </aside>
        </section>
      )}
    </div>
  );
}

/* ------------------------------ Small UI ------------------------------ */

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 flex items-center justify-between text-sm font-semibold text-brand-700">
        {label}
        {hint && <span className="font-normal text-brand-400">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

function ToolBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md border border-brand-200 bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-600 hover:bg-brand-100"
    >
      {children}
    </button>
  );
}
