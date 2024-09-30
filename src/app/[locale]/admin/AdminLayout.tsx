import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { routeName } from '@/common/helpers/constants'
import { usePathname } from '@/navigation'

import theme from '../theme'

import Header from '@/common/components/header/Header'
import Footer from '@/common/components/footer/Footer'
import SideBarAdmin from './components/sideBar/SideBarAdmin'

const routeNames = {
  orders: routeName.adminOrderHistory,
  dealers: routeName.adminDealersList,
  containers: routeName.adminContainers,
  settings: routeName.adminPersonalInformation,
}

type Props = { children: React.JSX.Element }

const AdminLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const pathname = usePathname()
  const isSideBarVisible =
    pathname !== routeName.adminOrder &&
    pathname !== routeName.adminOrderImageUpload &&
    pathname !== routeName.adminCreateOrder &&
    pathname !== routeName.adminCreateOrderImageUpload &&
    !pathname.startsWith(routeName.adminUserProfile)

  return (
    <>
      <Header />
      <Container>
        <Frame>
          {isSideBarVisible && !isMobile && (
            <SideBarAdmin routes={routeNames} />
          )}
          {!isMobile && <ChildrenContainer>{children}</ChildrenContainer>}
        </Frame>
      </Container>
      {isMobile && <ChildrenContainer>{children}</ChildrenContainer>}
      <Footer />
    </>
  )
}

export default AdminLayout

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
`
