import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { Locale, defaultLocale } from './lib/config'
const locales = ['en', 'ge', 'ru']

// export default getRequestConfig(async () => {
//   // Provide a static locale, fetch a user setting,
//   // read from `cookies()`, `headers()`, etc.

//   return {
//     locale,
//     messages: (await import(`../messages/${locale}.json`)).default,
//   }
// })

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
