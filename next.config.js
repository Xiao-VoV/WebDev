/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //跨域
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
