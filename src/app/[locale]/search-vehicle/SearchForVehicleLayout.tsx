'use client'
import React from 'react'
import styled from 'styled-components'

import Header from '@/common/components/header/Header'
import Footer from '@/common/components/footer/Footer'

type Props = { children: React.JSX.Element }

const SearchForVehicleLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </>
  )
}

export default SearchForVehicleLayout

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
`
