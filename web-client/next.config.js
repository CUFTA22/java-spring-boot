/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/departments",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
