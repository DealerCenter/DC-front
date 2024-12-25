'use client'
import React from 'react'
import VehicleListing from './VehicleListing'
import VehicleListingLayout from './VehicleListingLayout'

type Props = {}

const Page = (props: Props) => {
  return (
    <VehicleListingLayout>
      <VehicleListing />
    </VehicleListingLayout>
  )
}

export default Page
