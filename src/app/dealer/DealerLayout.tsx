'use client'
import React, { JSXElementConstructor } from 'react'
import SideBar from './components/sideBar/SideBar'
import Header from '@/common/components/header/Header'
import styled, { css } from 'styled-components'
import OrderHistory from './order-history/OrderHistory'
import ManageNotifications from './manage-notifications/ManageNotifications'
import PersonalInformation from './personal-information/PersonalInformation'
import { useMediaQuery } from 'react-responsive'

type Props = { children: React.JSX.Element }

const DealerLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  return (
    <Container isMobile={isMobile}>
      <Header />
      <Frame isMobile={isMobile}>
        <SideBar />
        {/* <ContentContainer>{children}</ContentContainer> */}
      </Frame>
    </Container>
  )
}

export default DealerLayout

type ContainerProps = { isMobile: boolean }

const Container = styled.div<ContainerProps>`
  ${({ isMobile }) =>
    isMobile
      ? css`
          background-color: white;
        `
      : css`
          background-color: #2020200a;
        `}
`

type FrameProps = { isMobile: boolean }

const Frame = styled.div<FrameProps>`
  display: flex;
  gap: 24px;
  margin-top: 8px;

  ${({ isMobile }) =>
    isMobile
      ? css`
          flex-direction: column;
          align-items: center;
        `
      : css`
          flex-direction: row;
          justify-content: center;
        `}
`

const ContentContainer = styled.div`
  align-items: flex-start;
`
