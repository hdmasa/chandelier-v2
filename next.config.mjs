import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["setareyakhi.com", "your-cdn.com"], // Add all domains where images are hosted
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // good for canonical consistency
  poweredByHeader: false,
};

// ✅ Only enable Sentry in production to avoid CORS errors locally
const sentryWebpackPluginOptions = {
  silent: true, // Suppress Sentry build logs
};

export default process.env.NODE_ENV === "production"
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
  : nextConfig;
