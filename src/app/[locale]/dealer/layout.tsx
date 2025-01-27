'use client'
import { Inter } from 'next/font/google'
import DealerLayout from './DealerLayout'
import ProtectedRoute from '@/common/components/protectedRoute/ProtectedRoute'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <ProtectedRoute>
      <section className='dealer-layout'>
        <DealerLayout>{children}</DealerLayout>
      </section>
    </ProtectedRoute>
  )
}
