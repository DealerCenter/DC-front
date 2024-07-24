import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = { imageLink: string }

const CarDetailsBox = ({ imageLink }: Props) => {
  return (
    <ImageFrame>
      <ImageBox>
        <Image src={imageLink} alt='image' width={168} height={150} />
      </ImageBox>
      <DetailsBox>
        <CarBrandFrame>
          <CarBrandBox>
            <CarBrand>Mercedes Benz</CarBrand>
            <TextGray>2020</TextGray>
          </CarBrandBox>
          <TextGray>E class, Diezel</TextGray>
        </CarBrandFrame>
        <SerialNumberBox>
          <Text>WD4PG2EE1J3371314</Text>
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
  color: ${({ theme }) => theme.colors?.text};
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
  color: ${({ theme }) => theme.colors?.text};
`
const SerialNumberBox = styled.div`
  padding: 10px 0px;
`
