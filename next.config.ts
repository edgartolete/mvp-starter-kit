import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */
  transpilePackages: ["jotai-devtools"],
  devIndicators: false
};

export default nextConfig;
