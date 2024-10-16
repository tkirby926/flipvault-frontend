/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
        appDir: true
    },
};

export default nextConfig;
