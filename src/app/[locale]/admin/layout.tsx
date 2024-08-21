'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AdminLayout from './AdminLayout'
import { AdminStateProvider } from './AdminStateContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section className='admin-layout'>
      <AdminStateProvider>
        <AdminLayout>{children}</AdminLayout>
      </AdminStateProvider>
    </section>
  )
}
