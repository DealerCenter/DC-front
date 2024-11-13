import { ORDER_DATA } from '@/api/apiTypes'
import { VisualElement } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const IMAGE_WIDTH = 168
const IMAGE_HEIGHT = 150

type Props = {
  imageLink: string
  orderData: ORDER_DATA
}

const CarDetailsBox = ({ orderData, imageLink }: Props) => {
  const { manufactureYear, manufacturer, model, vin } = orderData

  return (
    <ImageFrame>
      <ImageBox>
        <Image
          src={imageLink}
          alt='image'
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          style={{ objectFit: 'fill' }}
        />
      </ImageBox>
      <DetailsBox>
        <CarBrandFrame>
          <CarBrandBox>
            <CarBrand>{manufacturer}</CarBrand>
            <TextGray>{manufactureYear}</TextGray>
          </CarBrandBox>
          <TextGray>{model}</TextGray>
        </CarBrandFrame>
        <VinCodeBox>
          <Text>{vin}</Text>
        </VinCodeBox>
      </DetailsBox>
    </ImageFrame>
  )
}

export default CarDetailsBox

const ImageFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    justify-content: space-between;
  }
`

const ImageBox = styled.div`
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  overflow: hidden;
  border-radius: 18px;
`

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 160px;
`

const CarBrandFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CarBrandBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const CarBrand = styled.h3`
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`
const TextGray = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.main_gray_56};
`

const Text = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.black};
`
const VinCodeBox = styled.div`
  padding: 10px 0px;
`
