import Header from '@/common/components/header/Header'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import theme from '../theme'
import Footer from '@/common/components/footer/Footer'
import SideBar from '../../../common/components/sideBar/SideBar'
import { routeName } from '@/common/helpers/constants'
import { usePathname } from '@/navigation'

const routeNames = {
  orderHistory: routeName.adminOrderHistory,
  personalInformation: routeName.adminManageNotifications,
  usersList: routeName.adminUsersList,
  manageNotifications: routeName.adminPersonalInformation,
}

type Props = { children: React.JSX.Element }

const AdminLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const pathname = usePathname()
  const isSideBarVisible = pathname !== routeName.adminOrder

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
      {!isMobile && <Footer />}
    </>
  )
}

export default AdminLayout

const Container = styled.div`
  padding: 0 8%;

  @media ${({ theme }) => theme.media?.md} {
    padding: 0 3%;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0 5%;
    margin-bottom: unset;
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