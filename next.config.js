/* eslint-disable import/no-extraneous-dependencies */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const { withContentlayer } = require("next-contentlayer");

const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withContentlayer, withBundleAnalyzer], {
  eslint: {
    dirs: ["."],
  },
  experimental: {
    serverActions: true,
  },
  poweredByHeader: false,
  basePath: "",
  transpilePackages: ["@plaiceholder/ui"],
  images: {
    domains: [
      "images.unsplash.com",
      "www.patrickxin.com",
      "avatars.githubusercontent.com",
    ],
  },
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  // reactStrictMode: true,
});
