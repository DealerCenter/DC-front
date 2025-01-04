import { formatDateNum } from '@/common/helpers/simpleFunctions'
import styled from 'styled-components'
import BidBoxFinalBid from './components/BidBoxFinalBid'
import ImagesBox from './components/ImagesBox'
import { useState } from 'react'

type Props = { carDetails: AuctionResult }

const ImageAndBid = ({ carDetails }: Props) => {
  const [formattedDate, setFormattedDate] = useState('')

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
    car_photo,
  } = carDetails

  if (active_bidding[0]?.sale_date) {
    setFormattedDate(formatDateNum(Number(active_bidding[0].sale_date)))
  }

  return (
    <Container>
      <ImagesBox images={car_photo.photo} />
      <CarModelAndBidFrame>
        <CarBrandAndModel>
          <BrandLabel>{`${year} ${make}`}</BrandLabel>
          <ModelLabel>{`${model}, ${fuel}`}</ModelLabel>
        </CarBrandAndModel>

        <BidBoxFinalBid
          finalBid={9999}
          vinCode={vin}
          lotNumber={lot_number}
          dateOfSale={formattedDate}
          condition={highlights}
          auctionState='pending'
        />

        {/* <BidBox carDetails={carDetails} /> */}
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
