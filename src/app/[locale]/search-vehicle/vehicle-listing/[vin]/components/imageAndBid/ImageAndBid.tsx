import { useState } from 'react'
import styled from 'styled-components'
import BidBox from './components/BidBox'
import BidBoxFinalBid from './components/BidBoxFinalBid'
import ImagesBox from './components/ImagesBox'
import { formatDate } from '@/common/helpers/simpleFunctions'

type Props = { carDetails: AuctionResult }

const ImageAndBid = ({ carDetails }: Props) => {
  const [isFinal, setIsFinal] = useState(false)

  const {
    year,
    make,
    model,
    fuel,
    vin,
    lot_number,
    highlights,
    active_bidding,
    sales_history,
  } = carDetails

  const date = new Date('1335812800000')
  console.log('date:', date.toString())

  return (
    <Container>
      <ImagesBox />
      <CarModelAndBidFrame>
        <CarBrandAndModel>
          <BrandLabel>{`${year} ${make}`}</BrandLabel>
          <ModelLabel>{`${model}, ${fuel}`}</ModelLabel>
          <button onClick={() => setIsFinal((is) => !is)}>
            switch bid box
          </button>
        </CarBrandAndModel>
        {isFinal ? (
          <BidBoxFinalBid
            finalBid={9999}
            vinCode={vin}
            lotNumber={lot_number}
            dateOfSale={active_bidding[0].sale_date}
            condition={highlights}
            auctionState='pending'
          />
        ) : (
          <BidBox carDetails={carDetails} />
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
