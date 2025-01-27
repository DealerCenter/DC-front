import Image from 'next/image'
import React, { useTransition } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import CarDetailsBox from './DetailsRowComponents/CarDetailsBox'
import DebtBox from './DetailsRowComponents/DebtBox'
import CostsBox from './DetailsRowComponents/CostsBox'
import { ORDER_DATA } from '@/api/apiTypes'

type Props = { orderData: ORDER_DATA }

const DetailsRow = ({ orderData }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <CarDetailsBox orderData={orderData} />
      <OnMobileFlipFrame>
        <CostsBox orderData={orderData} />
        <DebtBox />
      </OnMobileFlipFrame>
    </Container>
  )
}

export default DetailsRow

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 8px;
  }
`

const OnMobileFlipFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  /* width: 100%; */
  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    gap: 8px;
  }
`

const Text23Bold = styled.label`
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
  white-space: nowrap;
`

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};
  border-radius: 20px;
`

const IconBoxPdf = styled.div`
  margin-left: 8px;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`
