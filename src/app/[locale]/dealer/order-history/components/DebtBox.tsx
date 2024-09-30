import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

import checkmarkIcon from '@/assets/icons/checkmarkCircleWhite.svg'
import boxIcon from '@/assets/icons/boxBlack.svg'
import ArrivalStateBox from '../../../../../common/components/arrivalState/ArrivalStateBox'

type Props = {
  amount: number
  arrivalState: string
}

const DebtBox = ({ amount, arrivalState }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <Text>{t('debt')}</Text>
        <Money>$ {amount}</Money>
      </Frame>
      <ArrivalStateBox arrivalState={arrivalState} />
    </Container>
  )
}

export default DebtBox

const Container = styled.div`
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media ${({ theme }) => theme.media?.sm} {
    height: unset;
    flex-direction: row-reverse;
    align-items: center;
  }
`
const Frame = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 0px;
`

const Text = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`
const Money = styled.p`
  margin: 0;
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`
