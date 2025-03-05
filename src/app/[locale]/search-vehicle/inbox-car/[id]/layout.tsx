'use client'
import Header from '@/common/components/header/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section className='vehicle-listing-layout'>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#fff',
          boxShadow: '0 1px 2px -2px black',
        }}
      >
        <Header />
      </div>
      {children}
    </section>
  )
}
