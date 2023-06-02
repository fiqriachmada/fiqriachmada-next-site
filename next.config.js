/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { removeConsole: { exclude: ['log'] } },
};

module.exports = nextConfig;
