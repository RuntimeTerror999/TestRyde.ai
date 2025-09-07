/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Next.js ≥14.2/15: top-level serverActions config
  serverActions: {
    bodySizeLimit: "10mb", // adjust as needed
  },

  experimental: {
    serverComponentsHmrCache: false, // defaults to true
    // For older Next.js versions: experimental.serverActions
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fymzcldwbxkereshbhqy.supabase.co",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://sidecoder.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
