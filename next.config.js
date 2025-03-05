/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["back.nurazyanconstruction.am", "res.cloudinary.com"],
  },
  experimental: {
    concurrentFeatures: true,
  },
  sassOptions: {
    additionalData: `@import "src/app/styles/mixins.scss";`,
  },
};

module.exports = nextConfig;
