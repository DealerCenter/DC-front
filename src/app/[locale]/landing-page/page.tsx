'use client'
import React, { useEffect } from 'react'
import { useRouter, usePathname } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import LandingPage from './LandingPage'

type Props = {}

const Page = (props: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === routeName.dealer) router.push(routeName.dealerOrderHistory)
  }, [pathname, router])

  const renderComponent = () => {
    switch (pathname) {
      case routeName.landingPage:
        return <LandingPage />
      default:
        return <LandingPage />
    }
  }

  return <>{renderComponent()}</>
}

export default Page
