'use client'
import React from 'react'
import styled from 'styled-components'

import Header from '@/common/components/header/Header'
import SideBar from './components/sideBar/SideBar'
import { useMediaQuery } from 'react-responsive'
import theme from '../theme'
import Footer from '@/common/components/footer/Footer'

type Props = { children: React.JSX.Element }

const DealerLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

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
      {!isMobile && <Footer />}
    </>
  )
}

export default DealerLayout

const Container = styled.div`
  padding: 0 8%;

  @media ${({ theme }) => theme.media?.md} {
    padding: 0 3%;
  }

  margin-bottom: 100px;
`

const Frame = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
  }
  flex-direction: row;
`
const ChildrenContainer = styled.div`
  flex: 1;
`