/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["rickandmortyapi.com"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/character",
        permanent: true,
      },
    ];
  },
};
