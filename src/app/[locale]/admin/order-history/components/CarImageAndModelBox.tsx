import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = {
  imageLink: string
  brand: string
  year: string
}

const CarImageAndModelBox = ({ imageLink, brand, year }: Props) => {
  return (
    <ImageFrame>
      <ImageBox>
        <Image
          src={imageLink}
          alt='image'
          width={60}
          height={55}
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>
      <Text>
        {brand}
        {year}
      </Text>
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
  width: 60px;
  height: 55px;
  overflow: hidden;
  border-radius: 18px;
`

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.text_black};
`
