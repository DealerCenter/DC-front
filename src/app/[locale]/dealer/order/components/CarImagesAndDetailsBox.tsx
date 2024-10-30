import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ImagesComponent from './ImagesComponent'

import { useTranslations } from 'next-intl'
import DetailsRow from './DetailsRow'
import ButtonsRow from './ButtonsRow'
import { ORDER_DATA } from '@/api/apiTypes'

type Props = { orderData: ORDER_DATA }

const CarImagesAndDetailsBox = ({ orderData }: Props) => {
  return (
    <Container>
      <ImagesComponent />
      <ButtonsRow />
      <DetailsRow orderData={orderData} />
    </Container>
  )
}

export default CarImagesAndDetailsBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 8px;
  }
`
