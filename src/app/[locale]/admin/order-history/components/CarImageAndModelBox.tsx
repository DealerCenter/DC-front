import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = {
  imageLink: string
  brand: string
  year: string
  vinCode: string
}

const CarImageAndModelBox = ({ imageLink, brand, year, vinCode }: Props) => {
  return (
    <ImageFrame>
      <ImageBox>
        <Image
          src={imageLink}
          alt='image'
          width={88}
          height={80}
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>
      <TextBox>
        <Text>{`${brand} ${year}`}</Text>
        <VinCodeText>{vinCode}</VinCodeText>
      </TextBox>
    </ImageFrame>
  )
}

export default CarImageAndModelBox

const ImageFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 80px;
  overflow: hidden;
  border-radius: 18px;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`

const VinCodeText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.black};
`
