// const { withSentryConfig } = require("@sentry/nextjs");
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig;

const { withSentryConfig } = require("@sentry/nextjs");

/**
 * @type {import('next').NextConfig}
 */
const moduleExports = {
  images: {
    domains: ["www.kobakoo.com"],
  },
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
