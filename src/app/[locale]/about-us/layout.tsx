'use client'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return <section className='about-us-layout'>{children}</section>
}
