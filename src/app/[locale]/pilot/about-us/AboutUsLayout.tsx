'use client'
import React from 'react'
import styled from 'styled-components'

import Footer from '@/common/components/footer/Footer'
import Header from '@/common/components/header/Header'

type Props = { children: React.JSX.Element }

const AboutUsLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </>
  )
}

export default AboutUsLayout

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
`
