import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators : false
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
