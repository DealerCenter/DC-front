'use client'
import React from 'react'

import SearchForVehicleLayout from './SearchForVehicleLayout'
import SearchForVehicle from './SearchForVehicle'

type Props = {}

const Page = (props: Props) => {
  return (
    <SearchForVehicleLayout>
      <SearchForVehicle />
    </SearchForVehicleLayout>
  )
}

export default Page
