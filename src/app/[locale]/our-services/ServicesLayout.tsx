'use client'
import React from 'react'

import Header from '@/common/components/header/Header'

import Footer from '@/common/components/footer/Footer'

type Props = { children: React.JSX.Element }

const ServicesLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default ServicesLayout
