import React from 'react'
import styled, { css } from 'styled-components'

import checkmarkIcon from '@/assets/icons/checkmarkCircleWhite.svg'
import boxIcon from '@/assets/icons/boxBlack.svg'
import clockIcon from '@/assets/icons/clock2Black.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type Props = { arrivalState: 'arrived' | 'onTheWay' | 'inWarehouse' }

const ArrivalStateBox = ({ arrivalState }: Props) => {
  const t = useTranslations('')

  const icon =
    arrivalState === 'arrived'
      ? checkmarkIcon
      : arrivalState === 'onTheWay'
        ? clockIcon
        : arrivalState === 'inWarehouse' && boxIcon

  const label =
    arrivalState === 'arrived'
      ? 'arrived'
      : arrivalState === 'onTheWay'
        ? 'on the way'
        : arrivalState === 'inWarehouse' && 'in warehouse'

  if (!icon) return

  return (
    <Container isArrived={arrivalState === 'arrived'}>
      <IconBox>
        <Image src={icon} alt='icon' />
      </IconBox>
      <Label isArrived={arrivalState === 'arrived'}>{t(label)}</Label>
    </Container>
  )
}

export default ArrivalStateBox

type ArrivedProps = { isArrived: boolean }

const Container = styled.div<ArrivedProps>`
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

const Label = styled.label<ArrivedProps>`
  color: ${({ theme }) => theme.colors?.white};
  font-size: 13px;
  font-weight: 700;
  padding: 8px;

  ${({ isArrived, theme }) =>
    isArrived
      ? css`
          color: ${theme.colors?.white};
        `
      : css`
          color: ${theme.colors?.main_gray_100};
        `};
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
