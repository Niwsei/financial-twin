/** @type {import('next').NextConfig} */
const nextConfig = {};

// Conditionally import and use the bundle analyzer
let withBundleAnalyzer;
if (process.env.ANALYZE === 'true') {
  const bundleAnalyzer = (await import('@next/bundle-analyzer')).default;
  withBundleAnalyzer = bundleAnalyzer({
    enabled: true,
  });
} else {
  withBundleAnalyzer = (config) => config;
}

export default withBundleAnalyzer(nextConfig);
