// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
  assetPrefix: process.env.NEXT_PUBLIC_URL
};

module.exports = withNextIntl(config);
