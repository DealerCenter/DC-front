'use client'
import React, { useState } from 'react'

import SearchForVehicleLayout from './SearchForVehicleLayout'
import SearchForVehicle from './SearchForVehicle'
import { SearchVehicleProvider } from './hooks/useSearchVehicle'

type Props = {}

const Page = (props: Props) => {
  const [isFooterShowing, setIsFooterShowing] = useState(true)

  return (
    <SearchForVehicleLayout isFooterShowing={isFooterShowing}>
      <SearchForVehicle setIsFooterShowing={setIsFooterShowing} />
    </SearchForVehicleLayout>
  )
}

export default Page
