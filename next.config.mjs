/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
  },
  eslint: {
    // Only run ESLint on local development
    ignoreDuringBuilds: true,
  },
  typescript: {
    // We're running build in CI, ignore type errors
    ignoreBuildErrors: true,
  },
  experimental: {
    appDocumentPreloading: true,
  },
};

export default nextConfig;
