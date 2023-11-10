const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
};

module.exports = withSitemap({
    ...nextConfig,
    siteUrl: 'https://www.SGCifuentes.com.co',
    generateRobotsTxt: true
});
