import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The entry tier was renamed from Basic to Bronze. Keep the old URLs (and
  // whatever ranking/backlinks they earned) pointing at the new pages.
  async redirects() {
    return ["coupe", "sedan", "suv-truck"].map((v) => ({
      source: `/services/basic-${v}-detail`,
      destination: `/services/bronze-${v}-detail`,
      permanent: true,
    }));
  },
  images: {
    // AVIF first (~35% smaller than WebP on photos), WebP as the fallback.
    formats: ["image/avif", "image/webp"],
    // Phone-first breakpoints. The stock list starts at 640 and tops out at 3840,
    // which over-serves small screens and wastes optimizer work on sizes we never use.
    deviceSizes: [360, 414, 640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2678400, // 31 days — these photos are static
  },
};

export default nextConfig;
