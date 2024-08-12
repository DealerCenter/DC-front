'use client'
import { Inter } from 'next/font/google'
import DealerLayout from './DealerLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section className='dealer-layout'>
      <DealerLayout>{children}</DealerLayout>
    </section>
  )
}
