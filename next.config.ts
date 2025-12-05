import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  /* config options here */
  transpilePackages: ["jotai-devtools"],
  devIndicators: false
};

export default nextConfig;
