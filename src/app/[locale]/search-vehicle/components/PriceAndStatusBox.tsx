import AuctionStateBox from '@/common/components/auctionState/AuctionStateBox'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = {
  amount: number
  auctionState: 'sold' | 'not sold' | 'pending'
}

const PriceAndStatusBox = ({ amount, auctionState }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <Text>{t('price')}</Text>
        <Money>$ {amount?.toString()}</Money>
      </Frame>
      <AuctionStateBox auctionState={auctionState} />
    </Container>
  )
}

export default PriceAndStatusBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media ${({ theme }) => theme.media?.sm} {
    height: unset;
  }
`
const Frame = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding: 10px 0px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 80px;
  }
`

const Text = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.main_gray_56};
`

const Money = styled.p`
  margin: 0;
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 19px;
  }
`
