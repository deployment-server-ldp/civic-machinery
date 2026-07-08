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
