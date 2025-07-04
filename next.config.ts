import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['avatars.githubusercontent.com','images.unsplash.com'], // 👈 allow external image domain
  },
};

export default nextConfig;
