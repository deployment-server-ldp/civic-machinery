/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Modern formats for smaller, faster images (Core Web Vitals).
    formats: ["image/avif", "image/webp"],
    // When you add real machine photos hosted elsewhere, whitelist the host here, e.g.:
    // remotePatterns: [{ protocol: "https", hostname: "images.civictobaccomachinery.com" }],
  },
  async redirects() {
    // Old "karachi" blog URLs → new "pakistan" URLs (keep SEO equity / no 404s).
    return [
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
    ];
  },
  async headers() {
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
