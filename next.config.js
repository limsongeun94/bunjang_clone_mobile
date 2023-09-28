/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {};
module.exports = {
  experimental: {
    serverAction: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
