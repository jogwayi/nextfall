/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverComponentsExternalPackages: ["@node-rs/argon2"],
        serverActions: {
            bodySizeLimit: '4mb',
        }
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: "images.unsplash.com" },
            { protocol: 'https', hostname: "crm.trpeglobal.com" },
            { protocol: 'https', hostname: "trpe.ae" },
            { protocol: 'https', hostname: "files.edgestore.dev" },
            { protocol: 'https', hostname: "trpe-ae.s3.me-central-1.amazonaws.com" },
            { protocol: 'https', hostname: "assets.aceternity.com" }
        ],
    },
    // Removing redirects from next.config.mjs, now handled in middleware.ts
    // This prevents overlapping redirect definitions
};

// Add this for bundle analysis
import withBundleAnalyzerFactory from '@next/bundle-analyzer';
const withBundleAnalyzer = withBundleAnalyzerFactory({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
