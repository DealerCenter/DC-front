import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import DummyImage2 from '@/assets/images/DummyCarImage2.jpg'
import DummyImage3 from '@/assets/images/DummyCarImage3.jpg'
import arrowLeft from '@/assets/icons/arrows/arrowLeftBlack.svg'
import arrowRight from '@/assets/icons/arrows/arrowRightBlack.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import AppGallery from '@/common/components/gallery/AppGallery'

const dummyImagesArray = [
  { image: DummyImage, id: '1' },
  { image: DummyImage2, id: '2' },
  { image: DummyImage3, id: '3' },
  { image: DummyImage, id: '12' },
  { image: DummyImage2, id: '22' },
  { image: DummyImage3, id: '32' },
  { image: DummyImage, id: '13' },
  { image: DummyImage2, id: '23' },
  { image: DummyImage3, id: '33' },
  { image: DummyImage, id: '14' },
  { image: DummyImage2, id: '24' },
  { image: DummyImage3, id: '34' },
  { image: DummyImage, id: '15' },
  { image: DummyImage2, id: '25' },
  { image: DummyImage3, id: '35' },
  { image: DummyImage, id: '16' },
  { image: DummyImage2, id: '26' },
  { image: DummyImage3, id: '36' },
  { image: DummyImage, id: '17' },
  { image: DummyImage2, id: '27' },
  { image: DummyImage3, id: '37' },
  { image: DummyImage, id: '18' },
  { image: DummyImage2, id: '28' },
  { image: DummyImage3, id: '38' },
]

type Props = {}

const ImagesComponent = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })

  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const [currentImageId, setCurrentImageId] = useState('')

  const itemsPerPage = isMobile ? 1 : isTablet ? 10 : 12

  const items = dummyImagesArray

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
        />
      )}
      <ImageFrame>
        {currentItems.map((item, i) => (
          <ImageBox key={`image398jk${i}`}>
            <Image
              id={item.id}
              onClick={() => handleImageClick(item.id)}
              src={item.image}
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
  height: 372px;

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
