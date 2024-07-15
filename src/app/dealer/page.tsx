'use client'
import React from 'react'
import SideBar from './components/sideBar/SideBar'
import Header from '@/common/components/header/Header'
import styled from 'styled-components'
import UsersListBox from './components/usersList/UsersListBox'
import OrderHistory from './order-history/OrderHistory'
import ManageNotifications from './manageNotifications/ManageNotifications'
import PersonalInformation from './personalInformation/PersonalInformation'
import DealerFrame from './DealerLayout'
import { usePathname } from 'next/navigation'
import { routeName } from '@/common/helpers/constants'

type Props = {}

const Page = (props: Props) => {
  const pathname = usePathname()
  console.log(pathname)

  const renderComponent = () => {
    switch (pathname) {
      case routeName.orderHistory:
        return <OrderHistory />
      case routeName.manageNotifications:
        return <ManageNotifications />
      default:
        return null
        break
    }
  }

  return (
    <DealerFrame>
      {renderComponent()}
      {/* <OrderHistory />
      <ManageNotifications />
      <PersonalInformation /> */}
      {/* <UsersListBox /> */}
    </DealerFrame>
  )
}

export default Page

// const Container = styled.div`
//   background-color: #2020200a;
// `
// const Frame = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   gap: 24px;
//   margin-top: 8px;
// `

// const ContentContainer = styled.div`
//   align-items: flex-start;
// `
