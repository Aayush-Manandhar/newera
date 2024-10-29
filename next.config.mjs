/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          localPatterns: [
            {
              pathname: '/src/images/**',
              search: '',
            },
          ],
        },
      };

export default nextConfig;
