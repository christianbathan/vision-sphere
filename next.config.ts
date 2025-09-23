import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable built-in View Transitions for App Router navigations
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
