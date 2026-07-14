import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import MachineImage from "@/components/MachineImage";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Markdown from "@/components/Markdown";
import { articleSchema } from "@/lib/schema";
import { blogPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle ?? post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated || post.date,
  });
}

const dateFmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleSchema(post, path, post.featuredImage || "/og-default.svg")} />

      <PageHero
        eyebrow="Blog"
        title={post.title}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
      />

      <article className="container mx-auto py-14">
        <div className="mx-auto max-w-3xl">
          {post.categories.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-brand-400">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{dateFmt(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readMinutes} min read</span>
          </div>

          <div className="mt-6">
            <MachineImage
              src={post.featuredImage}
              alt={post.title}
              label="Article image"
              aspect="aspect-[16/9]"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="prose-content mt-8">
            <p className="text-lg text-brand-700">{post.excerpt}</p>
            <Markdown>{post.content}</Markdown>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-brand-500">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-200 px-3 py-1 text-xs text-brand-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.authorBio && (
            <div className="mt-10 flex gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
              <div
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-500 text-lg font-bold text-white"
              >
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-brand-900">{post.author}</p>
                {post.authorTitle && (
                  <p className="text-sm text-brand-500">{post.authorTitle}</p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-brand-600">
                  {post.authorBio}
                </p>
              </div>
            </div>
          )}

          <div className="mt-10 border-t border-brand-100 pt-6">
            <Link href="/blog" className="link-accent">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="container mx-auto pb-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl">Keep reading</h2>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/blog/${o.slug}`}
                    className="flex items-center justify-between gap-4 rounded-xl border border-brand-100 bg-white p-4 hover:border-accent-300"
                  >
                    <span className="font-medium text-brand-800">{o.title}</span>
                    <span className="text-accent-700" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
