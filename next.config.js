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
      {
        protocol: "http",
        hostname: "strapi-blog-cms-production.up.railway.app",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
