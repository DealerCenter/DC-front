import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import ShippingStateBox from '@/common/components/shippingStateBox/ShippingStatusBox'
import { dummyShippingSteps2 } from '@/assets/DummyData'
import Image from 'next/image'

import BoxWithHeader from './BoxWithHeader'
import ContainerData from './rightColumnComponents/ContainerData'
import DataOfRecipient from './rightColumnComponents/DataOfRecipient'
import DealerData from './rightColumnComponents/DealerData'
import { ORDER_DATA } from '@/api/apiTypes'

type Props = { orderData: ORDER_DATA }

const RightColumn = ({ orderData }: Props) => {
  console.log('shipping status:', orderData.status)

  return (
    <Container>
      <BoxWithHeader headerText='status'>
        <ShippingStateBox isEditing={false} value={orderData.status} />
      </BoxWithHeader>
      <ContainerData containerData={orderData.container} />
      <DataOfRecipient receiverData={orderData.receiver} />
      {/* <DealerData /> */}
    </Container>
  )
}

export default RightColumn

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    gap: 8px;
  }
`
