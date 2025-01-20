'use client'
import React, { useEffect } from 'react'
import UsersListBox from './users-list/UsersListBox'
import OrderHistory from './order-history/OrderHistory'
import ManageNotifications from './manage-notifications/ManageNotifications'
import PersonalInformation from './personal-information/PersonalInformation'
import { useRouter, usePathname } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import DealerComponentEmpty from '../../../../common/components/emptyComponents/DealerComponentEmpty'

type Props = {}

const Page = (props: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === routeName.dealer) router.push(routeName.dealerOrderHistory)
  }, [pathname, router])

  const renderComponent = () => {
    switch (pathname) {
      case routeName.dealerOrderHistory:
        return <OrderHistory />
      case routeName.dealerManageNotifications:
        return <ManageNotifications />
      case routeName.dealerPersonalInformation:
        return <PersonalInformation />
      case routeName.dealerUsersList:
        return <UsersListBox />
      default:
        return <DealerComponentEmpty />
    }
  }

  return <>{renderComponent()}</>
}

export default Page
