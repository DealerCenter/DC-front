import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import locationIcon from '@/assets/icons/locationIconGray.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '../../theme'

const IMAGE_WIDTH = 201
const IMAGE_HEIGHT = 180
const IMAGE_WIDTH_MOBILE = 120
const IMAGE_HEIGHT_MOBILE = 125

type Props = {
  imageLink: string
  brand: string
  model: string
  mileage: string
  year: string
  location: string
  engineType: string
  color: string
}

const CarDetailsBox = ({
  imageLink,
  brand,
  model,
  mileage,
  year,
  location,
  engineType,
  color,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      <ImageBox>
        <Image
          src={imageLink}
          alt='image'
          width={isMobile ? IMAGE_WIDTH_MOBILE : IMAGE_WIDTH}
          height={isMobile ? IMAGE_HEIGHT_MOBILE : IMAGE_HEIGHT}
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>
      <DetailsBox>
        <CarBrandFrame>
          <CarBrandBox>
            <CarBrand>{brand}</CarBrand>
            <YearLabel>{year}</YearLabel>
          </CarBrandBox>
          <SmallDetailsFrame>
            <TextGray>{model}</TextGray>
            <TextGray>{mileage}</TextGray>
            <SmallDetailsBox>
              <EngineTypeBox>
                <TextGray>{engineType}</TextGray>
              </EngineTypeBox>
              {color && (
                <>
                  <Line />
                  <ColorBox>
                    <TextGray>{color}</TextGray>
                  </ColorBox>
                </>
              )}
            </SmallDetailsBox>
          </SmallDetailsFrame>
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

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.sm};
  }
`

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  line-height: 0;

  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  border-radius: 18px;

  @media ${({ theme }) => theme.media?.sm} {
    width: ${IMAGE_WIDTH_MOBILE};
    height: ${IMAGE_HEIGHT_MOBILE};
    border-radius: ${({ theme }) => theme.radius?.lg};
  }
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

const SmallDetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};

  @media ${({ theme }) => theme.media?.sm} {
    gap: 4px;
  }
`

const CarBrandBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`

const EngineTypeBox = styled.div`
  max-width: 130px;
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

const CarBrand = styled.h3`
  margin: 0;
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.medium};
  }
`

const YearLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_56};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.small_13};
  }

  cursor: default;
`

const TextGray = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.main_gray_56};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 11px;
  }
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
