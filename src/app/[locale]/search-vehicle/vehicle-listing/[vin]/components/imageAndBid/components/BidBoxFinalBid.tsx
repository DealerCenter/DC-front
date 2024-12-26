import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import AuctionStateBox from '@/common/components/auctionState/AuctionStateBox'
import LabelValuePair from './LabelValuePair'

type Props = {
  finalBid: number
  vinCode: string
  lotNumber: number
  dateOfSale: string
  condition: string
  auctionState: 'sold' | 'not sold' | 'pending'
}

const BidBoxFinalBid = ({
  finalBid,
  vinCode,
  lotNumber,
  dateOfSale,
  condition,
  auctionState,
}: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <FinalBidFrame>
        <FinalBidBox>
          <FinalBidLabel>Final Bid</FinalBidLabel>
          <FinalBidAmount>{`$ ${finalBid}`}</FinalBidAmount>
        </FinalBidBox>
        <div style={{ color: 'red' }}>
          NOT WORKING
          <AuctionStateBox auctionState={auctionState} />
        </div>
      </FinalBidFrame>
      <Line />
      <ListFrame>
        <LabelValuePair label={t('vin code')} value={vinCode} />
        <LabelValuePair label={t('lot number')} value={lotNumber.toString()} />
        <div style={{ color: 'red' }}>
          NOT WORKING
          <LabelValuePair label={t('date of sale')} value={dateOfSale} />
        </div>
        <LabelValuePair label={t('condition')} value={condition} />
      </ListFrame>
    </Container>
  )
}

export default BidBoxFinalBid

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: 24px 32px 24px 32px;
  background-color: ${({ theme }) => theme.colors?.white};

  height: 100%;
`

const Line = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
  height: 1px;
`

const FinalBidFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

const FinalBidBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const FinalBidLabel = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_42};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.small_13};
  }

  cursor: default;
`

const FinalBidAmount = styled.label`
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.md} {
    font-size: 32px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    font-size: 28px;
  }
  cursor: default;
`

const ListFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`
