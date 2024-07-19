'use client'
import React from 'react'
import styled from 'styled-components'

import Header from '@/common/components/header/Header'
import SideBar from './components/sideBar/SideBar'
import { useMediaQuery } from 'react-responsive'

type Props = { children: React.JSX.Element }

const DealerLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  return (
    <>
      <Container>
        <Header />
        <Frame>
          <SideBar />
          {!isMobile && <ChildrenContainer>{children}</ChildrenContainer>}
        </Frame>
      </Container>
      {isMobile && <ChildrenContainer>{children}</ChildrenContainer>}
    </>
  )
}

export default DealerLayout

const Container = styled.div`
  padding: 0 8%;

  @media (max-width: 1440px) and (min-width: 500px) {
    padding: 0 3%;
  }
`

const Frame = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
  flex-direction: row;
`
const ChildrenContainer = styled.div`
  flex: 1;
`
