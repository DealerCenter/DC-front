'use client'
import React, { JSXElementConstructor } from 'react'
import SideBar from './components/sideBar/SideBar'
import Header from '@/common/components/header/Header'
import styled from 'styled-components'
import OrderHistory from './order-history/OrderHistory'
import ManageNotifications from './manageNotifications/ManageNotifications'
import PersonalInformation from './personalInformation/PersonalInformation'

type Props = { children: React.JSX.Element }

const DealerLayout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Frame>
        <SideBar />
        <ContentContainer>{children}</ContentContainer>
      </Frame>
    </Container>
  )
}

export default DealerLayout

const Container = styled.div`
  background-color: #2020200a;
`
const Frame = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 24px;
  margin-top: 8px;
`

const ContentContainer = styled.div`
  align-items: flex-start;
`
