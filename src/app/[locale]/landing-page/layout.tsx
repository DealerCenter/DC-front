'use client'
import { Inter } from 'next/font/google'
import LandingPageLayout from './LandingPageLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section className='landing-layout'>
      <LandingPageLayout>{children}</LandingPageLayout>
    </section>
  )
}
