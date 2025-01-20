'use client'
import React from 'react'
import styled from 'styled-components'

import Header from '@/common/components/header/Header'
import Footer from '@/common/components/footer/Footer'

type Props = { children: React.JSX.Element; isFooterShowing: boolean }

const SearchForVehicleLayout = ({ children, isFooterShowing }: Props) => {
  return (
    <>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
      {isFooterShowing && <Footer />}
    </>
  )
}

export default SearchForVehicleLayout

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
`
