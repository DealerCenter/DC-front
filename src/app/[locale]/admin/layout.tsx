'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AdminLayout from './AdminLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section className='admin-layout'>
      <AdminLayout>{children}</AdminLayout>
    </section>
  )
}
