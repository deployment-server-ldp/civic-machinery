import Link from "next/link";
import { categories, categoryHref } from "@/lib/products";

export default function NotFound() {
  return (
    <section className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404, Page not found</p>
      <h1 className="mt-3 text-3xl sm:text-4xl">This page could not be found</h1>
      <p className="mt-4 max-w-md text-brand-600">
        The page you are looking for may have moved or no longer exists. Try one
        of our machine ranges below, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact Us
        </Link>
      </div>
      <ul className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={categoryHref(c)} className="link-accent">
              {c.navLabel}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
