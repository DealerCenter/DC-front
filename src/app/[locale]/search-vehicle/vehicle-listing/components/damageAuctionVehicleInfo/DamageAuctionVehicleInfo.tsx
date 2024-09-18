import React from 'react'
import styled from 'styled-components'

type Props = {}

const DamageAuctionVehicleInfo = (props: Props) => {
  return <Container>DamageAuctionVehicleInfo</Container>
}

export default DamageAuctionVehicleInfo

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};
`
