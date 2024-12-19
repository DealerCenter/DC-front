import createNextIntlPlugin from 'next-intl/plugin'
/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'production-dc-dealers.s3.amazonaws.com',
      'production-dc-orders.s3.eu-central-1.amazonaws.com',
      'production-dc-orders.s3.amazonaws.com',
      'images.cdn.manheim.com',
    ],
  },
}

export default withNextIntl(nextConfig)
