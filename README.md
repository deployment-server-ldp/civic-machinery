# Civic Tobacco Machinery — Website

Production-ready, SEO-first website for **Civic Tobacco Machinery**, a supplier of
cigarette manufacturing, packing, wrapping and used tobacco machinery in Pakistan.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and
server-side rendering / static generation.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerendered)
npm run start    # serve the production build
```

Set your live domain before deploying (used for canonical URLs, sitemap,
robots and JSON-LD):

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com
```

## What's included (SEO)

- **Dynamic metadata** per page (title, description, keywords) via `lib/seo.ts`
- **Canonical URLs** on every page
- **JSON-LD structured data** — Organization, LocalBusiness (Store), WebSite,
  Product, BreadcrumbList, FAQPage and Article (`lib/schema.ts`)
- **Open Graph + Twitter cards**
- **Automatic XML sitemap** (`app/sitemap.ts`) and **robots.txt** (`app/robots.ts`)
- **Breadcrumb navigation** (visible + schema) on all inner pages
- **Static generation (SSG)** for every route — fast, crawlable HTML
- **Image optimization** via `next/image` (AVIF/WebP) + lazy loading
- **Accessible semantic HTML** — landmarks, skip link, labelled controls, focus styles
- Clean URLs, internal linking, responsive design, mobile mega-menu

## Project structure

```
app/
  layout.tsx                     Root layout: header, footer, global schema, fonts
  page.tsx                       Home
  about/ contact/ blog/          Static + blog pages
  packing-machines/[slug]        Category + product routes
  wrapping-machines/[slug]
  manufacturing-machines/[subcategory]/[slug]   (mega-menu, nested)
  used-machinery/[slug]
  sitemap.ts  robots.ts  manifest.ts
components/                       Header, Footer, ProductCard, ProductDetail, etc.
lib/
  site.ts          Business info (address, phone, WhatsApp, hours) — edit here
  products.ts      All machines (single source of truth)
  blog.ts          Blog articles
  navigation.ts    Menu structure (derived from products)
  seo.ts  schema.ts SEO + JSON-LD helpers
public/            logo.svg, icon.svg, og-default.svg
```

## Adding a machine

Everything is data-driven. Add an object to the relevant array in
`lib/products.ts` and the machine appears automatically in the menu, its
category page, the sitemap and gets its own SEO-optimised page.

## Adding machine photos

Image placeholders ("Image coming soon") show until you provide a photo.
Drop images into `public/images/` and pass the `src` to `MachineImage`
(and `imageSrc` to `ProductCard`). `next/image` handles optimisation and
lazy loading. For images hosted elsewhere, whitelist the host in
`next.config.mjs` under `images.remotePatterns`.

## Contact details

Edit business info in one place — `lib/site.ts` (address, phone, WhatsApp
number, email, opening hours, social links).
