import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import ImagesComponent from './ImagesComponent'

import DetailsRow from './DetailsRow'
import ButtonsRow from './ButtonsRow'
import { ORDER_DATA } from '@/api/apiTypes'
import { IMAGE_LOCATIONS } from '@/common/helpers/constants'

type Props = { orderData: ORDER_DATA }

const CarImagesAndDetailsBox = ({ orderData }: Props) => {
  const availableLocations = [
    ...new Set(orderData.carImages.map((item) => item.type)),
  ].map((location) => ({
    value: location,
  })) as { value: IMAGE_LOCATIONS }[]

  const [selectedImageLocation, setSelectedImageLocation] =
    useState<IMAGE_LOCATIONS>(availableLocations[0]?.value)

  const images = useMemo(() => {
    return orderData.carImages.filter(
      (image) => image.type === selectedImageLocation
    )
  }, [selectedImageLocation])

  console.log({ availableLocations })

  return (
    <Container>
      {images.length > 0 ? (
        <ImagesComponent carImages={images} />
      ) : (
        <div style={{ marginTop: 20 }} />
      )}
      <ButtonsRow
        selectedImageLocation={selectedImageLocation}
        setSelectedImageLocation={setSelectedImageLocation}
        availableLocations={availableLocations}
      />
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
