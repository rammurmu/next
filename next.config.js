/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'X-About-Custom-Header',
            value: 'about_header_value',
          },
        ],
      },
      {
        source: '/seller/:id',
        headers: [
          {
            key: 'X-Seller-Custom-Header',
            value: 'seller_header_value',
          },
        ],
      },
    ]
  },
}
