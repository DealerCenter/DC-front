'use client'
import React, { useEffect } from 'react'
import UsersListBox from './dealers-list/DealersListBox'
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
    if (pathname === routeName.admin) router.push(routeName.adminOrderHistory)
  }, [pathname, router])

  const renderComponent = () => {
    switch (pathname) {
      case routeName.adminOrderHistory:
        return <OrderHistory />
      case routeName.adminManageNotifications:
        return <ManageNotifications />
      case routeName.adminPersonalInformation:
        return <PersonalInformation />
      case routeName.adminUsersList:
        return <UsersListBox />
      default:
        return <DealerComponentEmpty />
    }
  }

  return <>{renderComponent()}</>
}

export default Page
