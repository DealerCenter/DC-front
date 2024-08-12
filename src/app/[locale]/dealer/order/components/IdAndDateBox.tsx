import React from 'react'
import styled from 'styled-components'

import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import Image from 'next/image'
import { useTranslations } from 'use-intl'

type Props = { auctionId: string; orderId: string; dateOfPurchase: string }

const IdAndDateBox = ({ auctionId, orderId, dateOfPurchase }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <Title>{t('auction id')}</Title>
        <Value>{auctionId}</Value>
      </Frame>
      <Image src={splitGrayLine} alt='line icon' />
      <Frame>
        <Title>{t('order id')}</Title>
        <Value>{orderId}</Value>
      </Frame>
      <Image src={splitGrayLine} alt='line icon' />
      <Frame>
        <Title>{t('date of purchase')}</Title>
        <Value>{dateOfPurchase}</Value>
      </Frame>
    </Container>
  )
}

export default IdAndDateBox

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  width: 594px;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 8px;
  border-radius: 16px;

  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
    padding: 8px;
  }

  box-shadow: 0 10px 45px 0 ${({ theme }) => theme.colors?.main_gray_16};
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  @media ${({ theme }) => theme.media?.sm} {
    flex: 1;
  }
`
const Title = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`
const Value = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
