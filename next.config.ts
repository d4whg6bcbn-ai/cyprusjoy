import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/Aluminium-Fencing",
        destination: "/aluminium-fencing",
        permanent: true,
      },
      {
        source: "/Natural-Stone",
        destination: "/other-services",
        permanent: true,
      },
      {
        source: "/patios",
        destination: "/other-services",
        permanent: true,
      },
      {
        source: "/glass-screens",
        destination: "/other-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
