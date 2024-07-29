import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import arrowLeft from '@/assets/icons/arrows/arrowLeftBlack.svg'
import arrowRight from '@/assets/icons/arrows/arrowRightBlack.svg'

type Props = {}

const itemsPerPage = 12

const ImagesComponent = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1)

  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const handleMoveRight = () => {
    if (currentPage < totalPages) setCurrentPage((cur) => cur + 1)
  }
  const handleMoveLeft = () => {
    if (currentPage > 1) setCurrentPage((cur) => cur - 1)
  }

  return (
    <ImageFrame>
      {currentItems.map((item) => (
        <ImageBox key={item}>
          <Image
            src={DummyImage}
            alt='image'
            width={180}
            height={180}
            style={{ objectFit: 'cover' }}
          />
        </ImageBox>
      ))}
      <Button left={-30} onClick={handleMoveLeft}>
        <Image src={arrowLeft} alt='arrow left' height={25} />
      </Button>
      <Button right={-30} onClick={handleMoveRight}>
        <Image src={arrowRight} alt='arrow right' height={25} />
      </Button>
    </ImageFrame>
  )
}

export default ImagesComponent

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 18px;
`

const ImageFrame = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing?.sm};

  width: 1140px;

  border: 1px solid blue;
`

type ButtonProps = { left?: number; right?: number }

const Button = styled.button<ButtonProps>`
  position: absolute;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors?.white_68};
  /* background-color: red; */
  top: 159px;

  border: none;

  ${({ left, right }) => css`
    left: ${left}px;
    right: ${right}px;
  `};

  cursor: pointer;
`
