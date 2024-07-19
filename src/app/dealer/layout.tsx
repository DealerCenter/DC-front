'use client'
import Header from '@/common/components/header/Header'
import { Inter } from 'next/font/google'
import SideBar from './components/sideBar/SideBar'
import DealerLayout from './DealerLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return <DealerLayout>{children}</DealerLayout>
}
