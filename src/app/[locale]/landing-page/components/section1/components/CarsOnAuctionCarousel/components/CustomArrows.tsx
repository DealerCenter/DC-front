import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import leftArrow from '@/assets/icons/arrows/arrowLeftBlack.svg'
import rightArrow from '@/assets/icons/arrows/arrowRightBlack.svg'

type Props = {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

export const PrevArrow = ({ className, style, onClick }: Props) => {
  return (
    <PrevArrowButton onClick={onClick}>
      <Image src={leftArrow} alt='left arrow icon' height={24} />
    </PrevArrowButton>
  )
}

const PrevArrowButton = styled.div`
  width: 56px;
  height: 56px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_10};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 100px;
  left: -28px;
  top: 45%;
  z-index: 1;
`

export const NextArrow = ({ className, style, onClick }: Props) => {
  return (
    <NextArrowButton onClick={onClick}>
      <Image src={rightArrow} alt='right arrow icon' height={24} />
    </NextArrowButton>
  )
}

const NextArrowButton = styled.div`
  width: 56px;
  height: 56px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_10};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 100px;
  right: -15px;
  top: 45%;
  z-index: 1;

  @media ${({ theme }) => theme.media?.lg} {
    right: -20px;
  }
`
