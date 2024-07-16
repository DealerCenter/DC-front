'use client'
import React from 'react'
import SideBar from './components/sideBar/SideBar'
import Header from '@/common/components/header/Header'
import styled from 'styled-components'
import UsersListBox from './users-list/UsersListBox'
import OrderHistory from './order-history/OrderHistory'
import ManageNotifications from './manage-notifications/ManageNotifications'
import PersonalInformation from './personal-information/PersonalInformation'
import DealerFrame from './DealerLayout'
import { usePathname } from 'next/navigation'
import { routeName } from '@/common/helpers/constants'
import EmptyPlaceHolder from './components/EmptyPlaceHolder'

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
      case routeName.PersonalInformation:
        return <PersonalInformation />
      case routeName.usersList:
        return <UsersListBox />
      default:
        return <EmptyPlaceHolder />
        break
    }
  }

  return <>{renderComponent()}</>
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
