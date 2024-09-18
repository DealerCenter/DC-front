import React from 'react'

import styled from 'styled-components'
import BidBox from './components/BidBox'
import ImagesBox from './components/ImagesBox'

type Props = {}

const ImageAndBid = (props: Props) => {
  return (
    <Container>
      <ImagesBox />
      <CarModelAndBidFrame>
        <CarBrandAndModel>
          <BrandLabel>2020 Mercedes Benz </BrandLabel>
          <ModelLabel>E class, Diezel</ModelLabel>
        </CarBrandAndModel>

        <BidBox></BidBox>
      </CarModelAndBidFrame>
    </Container>
  )
}

export default ImageAndBid

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};
`

const CarModelAndBidFrame = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`

const CarBrandAndModel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors?.white};
`

const BrandLabel = styled.label`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`
const ModelLabel = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_42};

  cursor: default;
`
