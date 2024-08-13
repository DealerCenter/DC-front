import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ImagesComponent from './ImagesComponent'

import DetailsRow from './detailsRow/DetailsRow'
import ImagesComponentEmpty from './ImagesComponentEmpty'

type Props = { isEditing: boolean }

const CarImagesAndDetailsBox = ({ isEditing }: Props) => {
  return (
    <Container>
      {isEditing ? <ImagesComponentEmpty /> : <ImagesComponent />}
      <DetailsRow isEditing={isEditing} />
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
