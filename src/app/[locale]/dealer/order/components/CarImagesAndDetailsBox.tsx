import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ImagesComponent from './ImagesComponent'

import { useTranslations } from 'next-intl'
import DetailsRow from './DetailsRow'
import ButtonsRow from './ButtonsRow'

type Props = {}

const CarImagesAndDetailsBox = (props: Props) => {
  return (
    <Container>
      <ImagesComponent />
      {/* <ButtonsRow /> */}
      <DetailsRow />
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

  border: 1px solid red;
`
