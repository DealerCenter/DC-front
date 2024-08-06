import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { useTranslations } from 'next-intl'

import theme from '@/app/[locale]/theme'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import DummyImage2 from '@/assets/images/DummyCarImage2.jpg'
import DummyImage3 from '@/assets/images/DummyCarImage3.jpg'

import { CloseButton, LeftButton, RightButton } from './components/Buttons'

const dummyImagesArray = [
  DummyImage,
  DummyImage2,
  DummyImage3,
  DummyImage,
  DummyImage2,
  DummyImage3,
  DummyImage,
  DummyImage2,
  DummyImage3,
  DummyImage,
  DummyImage2,
  DummyImage3,
  DummyImage,
  DummyImage2,
  DummyImage3,
  DummyImage,
  DummyImage2,
  DummyImage3,
  DummyImage,
  DummyImage2,
  DummyImage3,
  DummyImage,
  DummyImage2,
  DummyImage3,
  DummyImage,
  DummyImage2,
  DummyImage3,
]

type Props = { isOpen: boolean; handleClose: () => void; imageNum: number }

const AppGallery2 = ({ isOpen, handleClose, imageNum }: Props) => {
  const isTablet = useMediaQuery({ query: theme.media?.md })

  const t = useTranslations('')

  const [currentPage, setCurrentPage] = useState(1)
  const [currentImage, setCurrentImage] = useState(imageNum)

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

  return (
    <>
      {isOpen && (
        <BackgroundOverlay>
          <Container>
            <ButtonBox>
              <CloseButton text={t('close')} onClick={handleClose} />
            </ButtonBox>
            <ImageFrame>
              <ImageBox>
                <Image
                  src={DummyImage}
                  alt='car image'
                  height={450}
                  objectFit='cover'
                />
              </ImageBox>
              <CarouselFrame>
                <LeftButton onClick={handleMoveLeft} />
                <CarouselBox>
                  {currentItems.map((item, i) => (
                    <ImageBox key={`image398jk${i}`}>
                      <Image
                        src={item}
                        alt='image'
                        width={180}
                        height={180}
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

const ImageBox = styled.div`
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
