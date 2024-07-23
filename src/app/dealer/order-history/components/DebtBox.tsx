import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

import checkmarkIcon from '@/assets/icons/checkmarkCircleWhite.svg'
import boxIcon from '@/assets/icons/boxBlack.svg'

type Props = {
  amount: number
  isArrived: boolean
}

const DebtBox = ({ amount, isArrived }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <Text>{t('debt')}</Text>
        <Money>$ {amount.toString()}</Money>
      </Frame>
      <ArrivalStateBox isArrived={isArrived}>
        <IconBox>
          <Image src={isArrived ? checkmarkIcon : boxIcon} alt='icon' />
        </IconBox>
        <Label>{isArrived ? t('arrived') : t('in warehouse')}</Label>
      </ArrivalStateBox>
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

  /* border: 1px solid red; */
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
  color: ${({ theme }) => theme.colors?.text};
`
const Money = styled.p`
  margin: 0;
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.text};
`
type ArrivedProps = { isArrived: boolean }

const ArrivalStateBox = styled.div<ArrivedProps>`
  box-sizing: border-box;
  height: 42px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  ${({ isArrived, theme }) =>
    isArrived
      ? css`
          background-color: ${theme.colors?.green};
        `
      : css`
          background-color: ${theme.colors?.yellow};
        `};
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors?.white};
  font-size: 13px;
  font-weight: 700;
  padding: 8px;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
