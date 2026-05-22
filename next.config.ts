import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/patios",
        destination: "/other-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
