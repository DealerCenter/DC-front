'use client'
import React, { useEffect } from 'react'
import SideBar from './components/sideBar/SideBar'
import Header from '@/common/components/header/Header'
import styled from 'styled-components'
import UsersListBox from './users-list/UsersListBox'
import OrderHistory from './order-history/OrderHistory'
import ManageNotifications from './manage-notifications/ManageNotifications'
import PersonalInformation from './personal-information/PersonalInformation'
import DealerFrame from './DealerLayout'
import { redirect, usePathname } from 'next/navigation'
import { routeName } from '@/common/helpers/constants'
import EmptyPlaceHolder from './components/DealerComponentEmpty'

type Props = {}

const Page = (props: Props) => {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === routeName.dealer) redirect(routeName.orderHistory)
  }, [pathname])

  console.log(pathname)

  const renderComponent = () => {
    switch (pathname) {
      case routeName.orderHistory:
        return <OrderHistory />
      case routeName.manageNotifications:
        return <ManageNotifications />
      case routeName.personalInformation:
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
