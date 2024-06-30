/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/pages/:path*',
            destination: '/:path*',
          },
        ];
    },
};

export default nextConfig;
