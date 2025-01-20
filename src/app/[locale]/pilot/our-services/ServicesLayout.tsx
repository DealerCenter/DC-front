'use client'
import React from 'react'

import Header from '@/common/components/header/Header'

import Footer from '@/common/components/footer/Footer'
import styled from 'styled-components'

type Props = { children: React.JSX.Element }

const ServicesLayout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default ServicesLayout

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
