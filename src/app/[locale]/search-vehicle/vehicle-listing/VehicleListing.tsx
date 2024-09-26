import styled from 'styled-components'

import DamageAuctionVehicleInfo from './components/damageAuctionVehicleInfo/DamageAuctionVehicleInfo'
import ImageAndBid from './components/imageAndBid/ImageAndBid'
import PriceAndShippingEstimate from './components/PriceAndShippingEstimate/PriceAndShippingEstimate'
import PreviousLots from './components/previousLots/PreviousLots'

type Props = {}

const VehicleListing = (props: Props) => {
  return (
    <Container>
      <ImageAndBid />
      <DamageAuctionVehicleInfo />
      <PriceAndShippingEstimate />
      <PreviousLots />
    </Container>
  )
}

export default VehicleListing

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  padding: 16px 0;
`
