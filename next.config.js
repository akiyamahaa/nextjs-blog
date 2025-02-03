/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/rss.xml",
        destination: "/api/rss",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.notionusercontent.com",
        pathname: "/**", // Matches all paths from this hostname
      },
    ],
  },
};

module.exports = nextConfig;
