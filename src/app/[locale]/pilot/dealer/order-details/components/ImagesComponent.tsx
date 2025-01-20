import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'

import arrowLeft from '@/assets/icons/arrows/arrowLeftBlack.svg'
import arrowRight from '@/assets/icons/arrows/arrowRightBlack.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/pilot/theme'
import AppGallery from '@/common/components/gallery/AppGallery'
import { CAR_IMAGE } from '@/api/apiTypes'

type Props = {
  carImages: CAR_IMAGE[]
}

const ImagesComponent = ({ carImages }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })

  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const [currentImageId, setCurrentImageId] = useState('')

  const itemsPerPage = isMobile ? 1 : isTablet ? 10 : 12

  const items = carImages

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const handleMoveRight = () => {
    if (currentPage < totalPages) {
      console.log('moved right')
      setCurrentPage((cur) => cur + 1)
    }
  }
  const handleMoveLeft = () => {
    if (currentPage > 1) {
      console.log('moved left')
      setCurrentPage((cur) => cur - 1)
    }
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const handleImageClick = (id: string) => {
    setCurrentImageId(id)
    setIsOpen(true)
  }

  return (
    <>
      {!isMobile && isOpen && (
        <AppGallery
          isOpen={isOpen}
          handleClose={() => setIsOpen(false)}
          currentImageId={currentImageId}
          setCurrentImageId={setCurrentImageId}
          carImages={carImages}
        />
      )}
      <ImageFrame>
        {currentItems.map((item, i) => (
          <ImageBox key={`image398jk${i}`}>
            <Image
              id={item.id.toString()}
              onClick={() => handleImageClick(item.id.toString())}
              src={item.url}
              alt='image'
              width={isMobile ? 343 : 180}
              height={isMobile ? 260 : 180}
              style={{ objectFit: 'cover' }}
            />
          </ImageBox>
        ))}
        <Button left={isMobile ? 10 : -30} onClick={handleMoveLeft}>
          <Image src={arrowLeft} alt='arrow left' height={isMobile ? 16 : 25} />
        </Button>
        <Button right={isMobile ? 10 : -30} onClick={handleMoveRight}>
          <Image
            src={arrowRight}
            alt='arrow right'
            height={isMobile ? 16 : 25}
          />
        </Button>
      </ImageFrame>
    </>
  )
}

export default ImagesComponent

const ImageBox = styled.div`
  width: 100%;
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 18px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    height: 260px;
  }
`

const ImageFrame = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing?.sm};
  width: 1140px;
  max-height: 372px;

  @media ${({ theme }) => theme.media?.md} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 960px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    display: unset;
    grid-template-columns: unset;
    gap: unset;
    width: unset;
    height: unset;
  }
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
  top: 159px;

  border: none;

  ${({ left, right }) => css`
    left: ${left}px;
    right: ${right}px;
  `};

  @media ${({ theme }) => theme.media?.sm} {
    width: 38px;
    height: 38px;
    top: 115px;
  }

  cursor: pointer;
`
