import createNextIntlPlugin from 'next-intl/plugin'
/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    domains: [
      'production-dc-dealers.s3.amazonaws.com',
      'production-dc-orders.s3.eu-central-1.amazonaws.com',
      'production-dc-orders.s3.amazonaws.com',
      'images.cdn.manheim.com',
      'vis.iaai.com',
      'cs.copart.com',
      'production-dc-receivers.s3.amazonaws.com',
    ],
  },
}

export default withNextIntl(nextConfig)
