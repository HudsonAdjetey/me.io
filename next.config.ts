import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/templates/*",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/pro/*",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
