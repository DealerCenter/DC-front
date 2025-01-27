import React from 'react'
import styled from 'styled-components'
import PriceEstimate from './components/PriceEstimate'
import ShippingEstimate from './components/ShippingEstimate'
import TotalCosts from './components/TotalCosts'

type Props = {}

const PriceAndShippingEstimate = (props: Props) => {
  return (
    <Container>
      <FrameRow>
        <PriceEstimate />
        <ShippingEstimate />
      </FrameRow>
      <TotalCosts total={5275} />
    </Container>
  )
}

export default PriceAndShippingEstimate

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`

const FrameRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
  }
`
