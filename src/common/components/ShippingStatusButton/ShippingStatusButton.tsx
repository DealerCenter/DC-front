import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import checkmarkIcon from '@/assets/icons/checkmarkCircleWhite.svg'
import boxIcon from '@/assets/icons/boxBlack.svg'
import clockIcon from '@/assets/icons/clock2Black.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { SHIPPING_STATUS } from '@/common/helpers/constants'

type Props = { shippingStatus: SHIPPING_STATUS }

const ShippingStatusButton = ({ shippingStatus }: Props) => {
  const t = useTranslations('statusButton')

  return (
    <Container noStatus={!shippingStatus}>
      <Label>{shippingStatus && t(shippingStatus)}</Label>
    </Container>
  )
}

export default ShippingStatusButton

type ContainerProps = { noStatus?: boolean }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  height: 42px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;

  ${({ noStatus }) =>
    noStatus
      ? css`
          background-color: unset;
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.green};
        `}
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors?.white};
  font-size: 13px;
  font-weight: 700;
  padding: 8px;
  color: ${({ theme }) => theme.colors?.white};
`
