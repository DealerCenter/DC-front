import { useState } from 'react'
import styled from 'styled-components'
import BidBox from './components/BidBox'
import BidBoxFinalBid from './components/BidBoxFinalBid'
import ImagesBox from './components/ImagesBox'

type Props = {}

const ImageAndBid = (props: Props) => {
  const [isFinal, setIsFinal] = useState(false)

  return (
    <Container>
      <ImagesBox />
      <CarModelAndBidFrame>
        <CarBrandAndModel>
          <BrandLabel>2020 Mercedes Benz </BrandLabel>
          <ModelLabel>E class, Diezel</ModelLabel>
          <button onClick={() => setIsFinal((is) => !is)}>
            switch bid box
          </button>
        </CarBrandAndModel>
        {isFinal ? (
          <BidBoxFinalBid
            finalBid={18250}
            vinCode='7SAYGDEF7NF349929'
            lotNumber={38738009}
            dateOfSale='06/02/2023'
            condition='Stationary'
            auctionState='pending'
          />
        ) : (
          <BidBox />
        )}
      </CarModelAndBidFrame>
    </Container>
  )
}

export default ImageAndBid

const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 450px;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    height: unset;
    flex-direction: column;
  }
`

const CarModelAndBidFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  width: 468px;

  @media ${({ theme }) => theme.media?.md} {
    width: 359px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
  }
`

const CarBrandAndModel = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: 24px 32px;
  background-color: ${({ theme }) => theme.colors?.white};
  height: 114px;

  @media ${({ theme }) => theme.media?.sm} {
    height: unset;
  }
`

const BrandLabel = styled.label`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.md} {
    font-size: 23px;
  }

  cursor: default;
`
const ModelLabel = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_42};

  @media ${({ theme }) => theme.media?.md} {
    font-size: 16px;
  }

  cursor: default;
`
