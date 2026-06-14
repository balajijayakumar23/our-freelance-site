import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/our-freelance-site",
  assetPrefix: "/our-freelance-site",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
