/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/landing_page2',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
