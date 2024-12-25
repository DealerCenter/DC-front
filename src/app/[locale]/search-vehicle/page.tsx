'use client'
import React, { useState } from 'react'

import SearchForVehicleLayout from './SearchForVehicleLayout'
import SearchForVehicle from './SearchForVehicle'
import { SearchVehicleProvider } from './hooks/useSearchVehicle'

type Props = { params: { id: string[] } }

const Page = ({ params }: Props) => {
  const [isFooterShowing, setIsFooterShowing] = useState(true)

  console.log('params id:', params.id)

  return (
    <SearchVehicleProvider>
      <SearchForVehicleLayout isFooterShowing={isFooterShowing}>
        <SearchForVehicle setIsFooterShowing={setIsFooterShowing} />
      </SearchForVehicleLayout>
    </SearchVehicleProvider>
  )
}

export default Page
