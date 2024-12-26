'use client'
import VehicleListing from './VehicleListing'
import VehicleListingLayout from './VehicleListingLayout'

type Props = { params: { vin: string } }

const Page = ({ params }: Props) => {
  return (
    <VehicleListingLayout>
      <VehicleListing vin={params.vin} />
    </VehicleListingLayout>
  )
}

export default Page
