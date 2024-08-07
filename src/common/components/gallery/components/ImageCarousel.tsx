import theme from '@/app/[locale]/theme'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { StyledInterface } from 'styled-components'
import { LeftButton, RightButton } from './Buttons'
import { css } from 'styled-components'

type Props = {
  currentItems: { image: StaticImageData; id: string }[]
  handleMoveLeft: () => void
  handleMoveRight: () => void
  currentImageId: string
  setCurrentImageId: (id: string) => void
}

const ImageCarousel = ({
  currentItems,
  handleMoveLeft,
  handleMoveRight,
  currentImageId,
  setCurrentImageId,
}: Props) => {
  return (
    <CarouselFrame>
      <LeftButton onClick={handleMoveLeft} />
      <CarouselBox>
        {currentItems.map((item, i) => (
          <ImageBox
            key={`image398jk${i}`}
            isActive={item.id === currentImageId}
          >
            <Image
              id={item.id}
              onClick={() => {
                setCurrentImageId(item.id)
              }}
              src={item.image}
              alt='image'
              width={160}
              height={160}
              style={{ objectFit: 'cover' }}
            />
          </ImageBox>
        ))}
      </CarouselBox>
      <RightButton onClick={handleMoveRight} />
    </CarouselFrame>
  )
}

export default ImageCarousel

const CarouselBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  height: 160px;
`

const CarouselFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

type ImageBoxProps = { isActive: boolean }

const ImageBox = styled.div<ImageBoxProps>`
  height: 160px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 18px;

  ${({ isActive }) =>
    isActive
      ? css`
          border: 3px solid ${({ theme }) => theme.colors?.link_blue};
        `
      : css`
          border: 3px solid ${({ theme }) => theme.colors?.black};
        `}
`