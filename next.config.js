const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    typescript: {
        // !! 忽略构建错误
        ignoreBuildErrors: true,
    },
};

module.exports = withNextIntl(nextConfig);
