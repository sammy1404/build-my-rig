import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgur.com", // Fixed to allow subdomains
      },
      {
        protocol: "https",
        hostname: "imgur.com", // Added to allow the main domain
      },
      {
        protocol: "https",
        hostname: "www.pcstudio.in", // Added to allow this hostname
      }
    ]
  }
};


export default nextConfig;
