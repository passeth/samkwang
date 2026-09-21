import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the local review server separate from vinext build caches.
  distDir: process.env.SAMKWANG_PREVIEW_DIR || ".next",
};

export default nextConfig;
