// Set EXPORT_STATIC=1 to build a static site (out/) for shared hosting such
// as Hostinger. In that mode Next can't run a server, so image optimisation,
// redirects and headers are handled at the host level (see deploy/.htaccess).
const isExport = process.env.EXPORT_STATIC === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  ...(isExport ? { output: "export", trailingSlash: true } : {}),
  images: isExport
    ? { unoptimized: true }
    : {
        // Modern formats for smaller, faster images (Core Web Vitals).
        formats: ["image/avif", "image/webp"],
        // When you add real machine photos hosted elsewhere, whitelist the host here, e.g.:
        // remotePatterns: [{ protocol: "https", hostname: "images.civic-tobacco-machinery.com" }],
      },
  async redirects() {
    if (isExport) return []; // handled by deploy/.htaccess on static hosting
    // Permanent (308) redirects from old URLs to the new clean structure.
    return [
      // Blog: old "karachi" URLs → "pakistan" URLs.
      {
        source: "/blog/how-to-choose-cigarette-packing-machine-karachi",
        destination: "/blog/how-to-choose-cigarette-packing-machine-pakistan",
        permanent: true,
      },
      {
        source: "/blog/buying-used-tobacco-machinery-karachi-checklist",
        destination: "/blog/buying-used-tobacco-machinery-pakistan-checklist",
        permanent: true,
      },

      // Packing / wrapping category slugs → keyword-first slugs.
      {
        source: "/packing-machines",
        destination: "/cigarette-packing-machines",
        permanent: true,
      },
      {
        source: "/packing-machines/:slug",
        destination: "/cigarette-packing-machines/:slug",
        permanent: true,
      },
      {
        source: "/wrapping-machines",
        destination: "/cigarette-box-wrapping-machines",
        permanent: true,
      },
      {
        source: "/wrapping-machines/:slug",
        destination: "/cigarette-box-wrapping-machines/:slug",
        permanent: true,
      },

      // Manufacturing sub-categories flattened to the site root.
      {
        source: "/manufacturing-machines/cigarette-making-machines/:path*",
        destination: "/cigarette-making-machines/:path*",
        permanent: true,
      },
      {
        source: "/manufacturing-machines/cigarette-filter-making-machines/:path*",
        destination: "/cigarette-filter-making-machines/:path*",
        permanent: true,
      },
      {
        source: "/manufacturing-machines/tobacco-machinery/:path*",
        destination: "/tobacco-machinery/:path*",
        permanent: true,
      },

      // Used-machinery product pages flattened to the site root.
      {
        source: "/used-machinery/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
  async headers() {
    if (isExport) return []; // headers come from deploy/.htaccess on static hosting
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
