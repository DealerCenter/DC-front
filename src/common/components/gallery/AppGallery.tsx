import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Image, { StaticImageData } from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { useTranslations } from 'next-intl'

import theme from '@/app/[locale]/theme'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import DummyImage2 from '@/assets/images/DummyCarImage2.jpg'
import DummyImage3 from '@/assets/images/DummyCarImage3.jpg'
import ImageNotFound from '@/assets/images/ImageNotFound404.jpg'

import { CloseButton } from './components/Buttons'

import { motion, AnimatePresence } from 'framer-motion'
import ImageCarousel from './components/ImageCarousel'
import AppOverlay from '../overlay/AppOverlay'

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

type Props = {
  isOpen: boolean
  handleClose: () => void
  currentImageId: string
  setCurrentImageId: (id: string) => void
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

const AppGallery = ({
  isOpen,
  handleClose,
  currentImageId,
  setCurrentImageId,
}: Props) => {
  const isTablet = useMediaQuery({ query: theme.media?.md })

  const t = useTranslations('')

  const [currentThumbnailPage, setCurrentThumbnailPage] = useState(1)

  const items = dummyImagesArray
  const itemsPerPage = isTablet ? 3 : 5
  const startIndex = (currentThumbnailPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)
  const totalPages = Math.ceil(items.length / itemsPerPage)

  const currentIndex = items.findIndex((item) => item.id === currentImageId)

  useEffect(() => {
    const newThumbnailPage = Math.floor(currentIndex / itemsPerPage) + 1
    setCurrentThumbnailPage(newThumbnailPage)
  }, [currentIndex, itemsPerPage])

  const findItemById = (id: string) => {
    const itemFound = items.find((item) => item.id === id)
    if (itemFound) return itemFound.image
    else return ImageNotFound
  }

  const currentImage = findItemById(currentImageId)

  const handlePageMoveLeft = (index: number) => {
    if ((index + 1) % itemsPerPage === 1 && currentThumbnailPage > 0) {
      setCurrentThumbnailPage((cur) => cur - 1)
    }
  }

  const handlePageMoveRight = (index: number) => {
    if ((index + 1) % itemsPerPage === 0 && currentThumbnailPage < totalPages) {
      setCurrentThumbnailPage((cur) => cur + 1)
    }
  }

  const handleMoveRight = () => {
    if (currentIndex < items.length - 1) {
      const nextIndex = (currentIndex + 1) % items.length
      setCurrentImageId(items[nextIndex].id)
      paginate(1)

      handlePageMoveRight(currentIndex)
    }
  }

  const handleMoveLeft = () => {
    if (currentIndex > 0) {
      const prevIndex = (currentIndex - 1) % items.length
      setCurrentImageId(items[prevIndex].id)
      paginate(-1)
      handlePageMoveLeft(currentIndex)
    }
  }

  const [[index, direction], setIndex] = useState<[number, number]>([0, 0])

  const paginate = (newDirection: number) => {
    setIndex([index + newDirection, newDirection])
  }

  return (
    <>
      {isOpen && (
        <AppOverlay>
          <Container>
            <ButtonBox>
              <CloseButton text={t('close')} onClick={handleClose} />
            </ButtonBox>
            <ImageFrame>
              <ImageBoxMain></ImageBoxMain>
              <AnimatePresence initial={false} custom={direction}>
                <CarouselImage
                  key={index}
                  src={currentImage.src}
                  custom={direction}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  height={isTablet ? '45%' : '55%'}
                  exit='exit'
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.1 },
                  }}
                />
              </AnimatePresence>
              <ImageCarousel
                currentItems={currentItems}
                handleMoveLeft={handleMoveLeft}
                handleMoveRight={handleMoveRight}
                currentImageId={currentImageId}
                setCurrentImageId={setCurrentImageId}
              />
            </ImageFrame>
          </Container>
        </AppOverlay>
      )}
    </>
  )
}

export default AppGallery

const CarouselImage = styled(motion.img)`
  position: absolute;

  object-fit: cover;
  border-radius: 18px;
`

const ImageBoxMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 18px;
`

const ImageFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  justify-content: space-between;

  height: 100%;
`

const ButtonBox = styled.div`
  height: 72px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
