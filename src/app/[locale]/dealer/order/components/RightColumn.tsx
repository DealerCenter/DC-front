import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
// import ShippingStateBox from '../../order-history/components/ShippingStateBox'
import { dummyShippingSteps2 } from '@/assets/DummyData'
import Image from 'next/image'

import BoxWithHeader from './BoxWithHeader'
import ContainerData from './rightColumnComponents/ContainerData'
import DataOfRecipient from './rightColumnComponents/DataOfRecipient'
import DealerData from './rightColumnComponents/DealerData'

type Props = {}

const RightColumn = (props: Props) => {
  return (
    <Container>
      <BoxWithHeader headerText='status'>
        {/* <ShippingStateBox shippingSteps={dummyShippingSteps2} currentStep={1} /> */}
        <div></div>
      </BoxWithHeader>
      <ContainerData />
      <DataOfRecipient />
      <DealerData />
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
