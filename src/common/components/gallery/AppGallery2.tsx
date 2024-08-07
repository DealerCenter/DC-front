import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Image, { StaticImageData } from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { useTranslations } from 'next-intl'

import theme from '@/app/[locale]/theme'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import DummyImage2 from '@/assets/images/DummyCarImage2.jpg'
import DummyImage3 from '@/assets/images/DummyCarImage3.jpg'
import ImageNotFound from '@/assets/images/ImageNotFound404.jpg'

import { CloseButton, LeftButton, RightButton } from './components/Buttons'

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

const AppGallery2 = ({
  isOpen,
  handleClose,
  currentImageId,
  setCurrentImageId,
}: Props) => {
  const isTablet = useMediaQuery({ query: theme.media?.md })

  const t = useTranslations('')

  const [currentPage, setCurrentPage] = useState(1)
  // const [currentImage, setCurrentImage] = useState(imageNum)

  const itemsPerPage = isTablet ? 3 : 5

  const items = dummyImagesArray

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = items.slice(startIndex, endIndex)

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const handleMoveRight = () => {
    if (currentPage < totalPages) {
      setCurrentPage((cur) => cur + 1)
    }
  }
  const handleMoveLeft = () => {
    if (currentPage > 1) {
      setCurrentPage((cur) => cur - 1)
    }
  }

  const findItemById = (id: string) => {
    const itemFound = items.find((item) => item.id === id)
    if (itemFound) return itemFound.image
    else return ImageNotFound
  }

  const currentImage = findItemById(currentImageId)

  return (
    <>
      {isOpen && (
        <BackgroundOverlay>
          <Container>
            <ButtonBox>
              <CloseButton text={t('close')} onClick={handleClose} />
            </ButtonBox>
            <ImageFrame>
              <ImageBoxMain>
                <Image
                  src={currentImage}
                  alt='car image'
                  height={450}
                  objectFit='cover'
                />
              </ImageBoxMain>
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
                          console.log('clicked', item.id)
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
            </ImageFrame>
          </Container>
        </BackgroundOverlay>
      )}
    </>
  )
}

export default AppGallery2

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

const ImageBoxMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 18px;
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

const BackgroundOverlay = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.black};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;

  padding: 64px 128px;

  display: flex;
  justify-content: center;
  align-items: center;
`
