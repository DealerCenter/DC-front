import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = {
  imageLink: string
  brand: string
  model: string
  year: string
  serialNumber: string
}

const CarDetailsBox = ({
  imageLink,
  brand,
  model,
  year,
  serialNumber,
}: Props) => {
  return (
    <ImageFrame>
      <ImageBox>
        <Image src={imageLink} alt='image' width={168} height={150} />
      </ImageBox>
      <DetailsBox>
        <CarBrandFrame>
          <CarBrandBox>
            <CarBrand>{brand}</CarBrand>
            <TextGray>{year}</TextGray>
          </CarBrandBox>
          <TextGray>{model}</TextGray>
        </CarBrandFrame>
        <SerialNumberBox>
          <Text>{serialNumber}</Text>
        </SerialNumberBox>
      </DetailsBox>
    </ImageFrame>
  )
}

export default CarDetailsBox

const ImageFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    justify-content: space-between;
  }
`

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  width: 168px;
  height: 150px;
  overflow: hidden;
  border-radius: 18px;
`

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
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
  color: ${({ theme }) => theme.colors?.text_black};
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
  color: ${({ theme }) => theme.colors?.text_black};
`
const SerialNumberBox = styled.div`
  padding: 10px 0px;
`
