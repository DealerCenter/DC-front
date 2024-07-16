'use client'
import React from 'react'
import styled from 'styled-components'

import Header from '@/common/components/header/Header'
import SideBar from './components/sideBar/SideBar'

type Props = { children: React.JSX.Element }

const DealerLayout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Frame>
        <SideBar />
        {children}
      </Frame>
    </Container>
  )
}

export default DealerLayout

const Container = styled.div`
  @media (max-width: 500px) {
    background-color: white;
  }
  background-color: #2020200a;
`

const Frame = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
  flex-direction: row;
  justify-content: center;
`
