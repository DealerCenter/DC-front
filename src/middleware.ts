import createMiddleware from 'next-intl/middleware'
import { locales } from '@/common/helpers/constants'
import { localePrefix } from './navigation'

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,

  // Used when no locale matches
  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ge|en|ru)/:path*'],
}
