'use client'
import React, { useEffect } from 'react'
import { useRouter, usePathname } from '@/navigation'
import { routeName } from '@/common/helpers/constants'

import DocumentCheck from './document-check/DocumentCheck'
// import HistoryCheck from './history-check/HistoryCheck'
import StatusCheck from './status-check/VehicleStatusCheck'
import TransportationCalculator from './transportation-calculator/TransportationCalculator'

type Props = {}

const Page = (props: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === routeName.ourServices) router.push(routeName.documentCheck)
  }, [pathname, router])

  const renderComponent = () => {
    switch (pathname) {
      case routeName.documentCheck:
        return <DocumentCheck />
      // case routeName.historyCheck:
      //   return <HistoryCheck />
      case routeName.statusCheck:
        return <StatusCheck />
      case routeName.transportationCalculator:
        return <TransportationCalculator />
      default:
        return <DocumentCheck />
    }
  }

  return <>{renderComponent()}</>
}

export default Page
