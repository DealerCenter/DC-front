import React from 'react'
import styled from 'styled-components'

import theme from '@/app/[locale]/theme'
import clockIcon from '@/assets/icons/clock2Black.svg'
import Image from 'next/image'
import { SHIPPING_STATUS } from '@/common/helpers/constants'

type Props = {
  shippingStatus: SHIPPING_STATUS
}

const ShippingStatusButton = ({ shippingStatus }: Props) => {
  const statusText = () => {
    switch (shippingStatus) {
      case SHIPPING_STATUS.IN_AUCTION:
        return 'Auction'
      case SHIPPING_STATUS.IN_CONTAINER:
        return 'Container'
      case SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE:
        return 'Warehouse'
      case SHIPPING_STATUS.SENT:
        return 'Sent'
      case SHIPPING_STATUS.UNDERGOES_CUSTOMS:
        return 'Customs'
      default:
        return ''
    }
  }

  if (!shippingStatus) return

  return (
    <Container
      isSent={
        shippingStatus === SHIPPING_STATUS.SENT ||
        shippingStatus === SHIPPING_STATUS.UNDERGOES_CUSTOMS
      }
    >
      <IconBox>
        <Image src={clockIcon} alt='icon' />
      </IconBox>
      <Label>{statusText()}</Label>
    </Container>
  )
}

export default ShippingStatusButton

const Container = styled.div`
  box-sizing: border-box;
  height: 42px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${({ isSent, theme }: { isSent: boolean; theme: any }) =>
    isSent ? theme.colors?.green : theme.colors?.yellow};
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors?.black};
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
