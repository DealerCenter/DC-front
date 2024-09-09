import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import locationIcon from '@/assets/icons/locationIconGray.svg'

type Props = {
  imageLink: string
  brand: string
  model: string
  mileage: string
  year: string
  location: string
}

const CarDetailsBox = ({
  imageLink,
  brand,
  model,
  mileage,
  year,
  location,
}: Props) => {
  return (
    <Container>
      <ImageBox>
        <Image
          src={imageLink}
          alt='image'
          width={201}
          height={180}
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>
      <DetailsBox>
        <CarBrandFrame>
          <CarBrandBox>
            <CarBrand>{brand}</CarBrand>
            <TextGray>{year}</TextGray>
          </CarBrandBox>
          <TextGray>{model}</TextGray>
          <TextGray>{mileage}</TextGray>
          <SmallDetailsBox>
            <TextGray>4cyl</TextGray>
            <Line />
            <TextGray>SE</TextGray>
            <Line />
            <ColorBox>
              <ColorDot />
              <TextGray>Green</TextGray>
            </ColorBox>
          </SmallDetailsBox>
        </CarBrandFrame>
        <LocationBox>
          <IconBox>
            <Image src={locationIcon} alt='location icon' />
          </IconBox>
          <TextGray>{location}</TextGray>
        </LocationBox>
      </DetailsBox>
    </Container>
  )
}

export default CarDetailsBox

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};
`

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  width: 201px;
  height: 180px;
  overflow: hidden;
  border-radius: 18px;

  line-height: 0;
`

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CarBrandFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const CarBrandBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const SmallDetailsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const ColorBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

const Line = styled.div`
  width: 1px;
  height: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};
`

const ColorDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors?.green};
`

const CarBrand = styled.h3`
  margin: 0;
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`

const TextGray = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.main_gray_56};
`

const LocationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
