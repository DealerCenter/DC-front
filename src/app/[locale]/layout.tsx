import type { Metadata } from 'next'
import { Roboto, Open_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import StyledComponentsRegistry from '@/lib/registry'
import ThemeClient from '../../lib/ThemeClient'
import '@/styles/styles.css'
import 'normalize.css/normalize.css'
import { Locale } from '@/lib/config'
import { SearchVehicleProvider } from './search-vehicle/hooks/useSearchVehicle'

const inter = Open_Sans({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dealer Center',
  description: 'Built by ZJ',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: any
  params: { locale: Locale }
}>) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <StyledComponentsRegistry>
            <SearchVehicleProvider>
              <ThemeClient>{children}</ThemeClient>
            </SearchVehicleProvider>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
