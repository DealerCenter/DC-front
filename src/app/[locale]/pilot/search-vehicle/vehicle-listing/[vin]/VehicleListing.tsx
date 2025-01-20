import styled from 'styled-components'

import DamageAuctionVehicleInfo from './components/damageAuctionVehicleInfo/DamageAuctionVehicleInfo'
import ImageAndBid from './components/imageAndBid/ImageAndBid'
import PriceAndShippingEstimate from './components/priceAndShippingEstimate/PriceAndShippingEstimate'
import PreviousLots from './components/previousLots/PreviousLots'
import SimilarLots from './components/similarLots/SimilarLots'
import { getCarDetailsByVin } from '@/common/helpers/utils'
import { useEffect, useState } from 'react'

type Props = { vin: string }

const VehicleListing = ({ vin }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [carDetails, setCarDetails] = useState<AuctionResult>()

  const fetchVehicleData = async () => {
    try {
      const response = await getCarDetailsByVin(vin)
      console.log('response:', response)
      setCarDetails(response.result[0])
    } catch (error) {
      // message.error(error?.response?.data?.message)
      console.error('Error fetching vehicle data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchVehicleData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {carDetails && (
        <Container>
          <ImageAndBid carDetails={carDetails} />
          <DamageAuctionVehicleInfo carDetails={carDetails} />
          <PriceAndShippingEstimate />
          <PreviousLots />
          <SimilarLots />
        </Container>
      )}
    </>
  )
}

export default VehicleListing

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  padding: 16px 0;
`
