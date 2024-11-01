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

  // const icon =
  //   arrivalState === 'arrived'
  //     ? checkmarkIcon
  //     : arrivalState === 'onTheWay'
  //       ? clockIcon
  //       : arrivalState === 'inWarehouse' && boxIcon

  // switch (shippingStatus) {
  //   case SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE:
  //     setIcon()
  //     break
  //   case SHIPPING_STATUS.IN_AUCTION:
  //     setIcon()
  //     break
  //   case SHIPPING_STATUS.IN_CONTAINER:
  //     setIcon(boxIcon)
  //     break
  //   case SHIPPING_STATUS.SENT:
  //     setIcon(boxIcon)
  //     break
  //   case SHIPPING_STATUS.UNDERGOES_CUSTOMS:
  //     setIcon(clockIcon)
  //     break
  // }

  // const label =
  //   arrivalState === 'arrived'
  //     ? 'arrived'
  //     : arrivalState === 'onTheWay'
  //       ? 'on the way'
  //       : arrivalState === 'inWarehouse' && 'in warehouse'

  // if (!icon) return

  return (
    <Container isArrived={true}>
      {/* <IconBox>
        <Image src={icon} alt='icon' />
      </IconBox> */}
      <Label isArrived={true}>{t(shippingStatus)}</Label>
    </Container>
  )
}

export default ShippingStatusButton

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
