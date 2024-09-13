'use client'
import { Inter } from 'next/font/google'
import ServicesLayout from './ServicesLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section className='services-layout'>
      <ServicesLayout>{children}</ServicesLayout>
    </section>
  )
}
