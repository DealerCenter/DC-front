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
  adminSettings: routeName.adminSettings,
}

type Props = { children: React.JSX.Element }

const AdminLayout = ({ children }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const pathname = usePathname()
  const isSideBarVisible =
    pathname !== routeName.adminOrder &&
    pathname !== routeName.adminOrderImageUpload &&
    !pathname.startsWith(routeName.adminCreateOrder) &&
    !pathname.startsWith(routeName.adminDealerProfile)

  return (
    <>
      <Header />
      <Container>
        <Frame>
          {isSideBarVisible && <SideBarAdmin routes={routeNames} />}
          {!isMobile && <ChildrenContainer>{children}</ChildrenContainer>}
        </Frame>
      </Container>
      {isMobile && <ChildrenContainer>{children}</ChildrenContainer>}
    </>
  )
}

export default AdminLayout

const Container = styled.div`
  min-height: 100vh;
  padding: 0 8%;
  padding-bottom: 100px;

  @media ${({ theme }) => theme.media?.md} {
    padding: 0 3%;
    padding-bottom: 100px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0 5%;
    margin-bottom: 20px;
    min-height: unset;
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
    padding: 0 5%;
  }
`
