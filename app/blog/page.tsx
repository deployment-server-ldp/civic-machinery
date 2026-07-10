import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import MachineImage from "@/components/MachineImage";
import CtaBand from "@/components/CtaBand";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Civic Tobacco Machinery",
  description:
    "Practical guides on cigarette and tobacco machinery, choosing packing machines, comparing makers, and buying used machines in Pakistan. From Civic Tobacco Machinery.",
  path: "/blog",
  keywords: [
    "cigarette machinery blog",
    "tobacco machinery guides",
    "buying cigarette machines Pakistan",
  ],
});

const dateFmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides & Advice on Cigarette Machinery"
        intro="Straight-talking articles to help you choose, buy and run cigarette and tobacco machinery, written by people who work with these machines every day."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
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
                alt={post.title}
                label="Article"
                aspect="aspect-[16/9]"
                className="rounded-none"
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs text-brand-400">
                  <time dateTime={post.date}>{dateFmt(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readMinutes} min read</span>
                </div>
                <h2 className="mt-3 text-lg leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-brand-900 after:absolute after:inset-0 group-hover:text-accent-700"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 text-sm font-semibold text-accent-700">
                  Read article →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
