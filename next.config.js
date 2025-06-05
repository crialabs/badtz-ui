const { withContentlayer } = require("next-contentlayer2");
const { withPlausibleProxy } = require("next-plausible");
import createNextIntlPlugin from "next-intl/plugin";




/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96],
    loader: "custom",
    domains: ["cdn.badtz-ui.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: false,
  },
  const withNextIntl = createNextIntlPlugin();
  export default withNextIntl(nextConfig);
};

module.exports = withPlausibleProxy()(withContentlayer(nextConfig));
