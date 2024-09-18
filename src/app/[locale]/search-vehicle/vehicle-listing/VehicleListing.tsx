import React from 'react'
import styled from 'styled-components'

import ImageAndBid from './components/imageAndBid/ImageAndBid'
import DamageAuctionVehicleInfo from './components/damageAuctionVehicleInfo/DamageAuctionVehicleInfo'

type Props = {}

const VehicleListing = (props: Props) => {
  return (
    <Container>
      <ImageAndBid />
      <DamageAuctionVehicleInfo />
    </Container>
  )
}

export default VehicleListing

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  padding: 16px 0;
`
