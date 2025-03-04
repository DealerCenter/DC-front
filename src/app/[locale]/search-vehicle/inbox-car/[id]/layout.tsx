'use client'
import Header from '@/common/components/header/Header'
import FullHeader from '@/common/components/header/components/fullHeader/FullHeader'
import { Inter } from 'next/font/google'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section className='vehicle-listing-layout'>
      <StickyHeader>
        <Header />
      </StickyHeader>
      {children}
    </section>
  )
}

export const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 1px 2px -2px black;
`
