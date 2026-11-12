/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Static HTML export for GitHub Pages (https://shafiullahshafin.github.io).
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
