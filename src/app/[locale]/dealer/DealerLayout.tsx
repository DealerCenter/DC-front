'use client'
import React, { useEffect } from 'react'
import styled from 'styled-components'

import Header from '@/common/components/header/Header'
import SideBar from '../../../common/components/sideBar/SideBar'
import { useMediaQuery } from 'react-responsive'
import theme from '../theme'
import Footer from '@/common/components/footer/Footer'
import { usePathname } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import { useUserData } from '@/common/store/userDataStore'
import { fetchUserData } from '@/api/apiCalls'

type Props = { children: React.JSX.Element }

const routeNames = {
  orderHistory: routeName.dealerOrderHistory,
  personalInformation: routeName.dealerPersonalInformation,
  usersList: routeName.dealerUsersList,
  manageNotifications: routeName.dealerManageNotifications,
}

const DealerLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const pathname = usePathname()

  const { fetchAndUpdateUser } = useUserData()

  useEffect(() => {
    fetchAndUpdateUser()
    // eslint-disable-next-line
  }, [])

  const isSideBarVisible = pathname !== routeName.dealerOrder

  return (
    <>
      <Header />
      <Container>
        <Frame>
          {isSideBarVisible && <SideBar routes={routeNames} />}
          {!isMobile && <ChildrenContainer>{children}</ChildrenContainer>}
        </Frame>
      </Container>
      {isMobile && <ChildrenContainer>{children}</ChildrenContainer>}
      <Footer />
    </>
  )
}

export default DealerLayout

const Container = styled.div`
  padding: 0 8%;
  margin-bottom: 100px;

  @media ${({ theme }) => theme.media?.md} {
    padding: 0 3%;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0 5%;
    margin-bottom: unset;
  }
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

  @media ${({ theme }) => theme.media?.sm} {
    margin-bottom: 150px;
  }
`
