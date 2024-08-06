import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import BasicButton from '../appButton/BasicButton'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import DummyImage2 from '@/assets/images/DummyCarImage2.jpg'
import DummyImage3 from '@/assets/images/DummyCarImage3.jpg'
import closeIcon from '@/assets/icons/closeWithCircleEmpty.svg'
import arrowLeft from '@/assets/icons/arrows/arrowLeftBlack.svg'
import arrowRight from '@/assets/icons/arrows/arrowRightBlack.svg'
import theme from '@/app/[locale]/theme'
import { useMediaQuery } from 'react-responsive'

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

type Props = { isOpen: boolean; handleClose: () => void }

const AppGallery2 = ({ isOpen, handleClose }: Props) => {
  const isTablet = useMediaQuery({ query: theme.media?.md })

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = isTablet ? 4 : 6

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

  return (
    <>
      {isOpen && (
        <BackgroundOverlay>
          <Container>
            <ButtonBox>
              <BasicButton color='white' onClick={handleClose} height={56}>
                <ButtonLabel>daxurva</ButtonLabel>
                <Image src={closeIcon} alt='close icon' />
              </BasicButton>
            </ButtonBox>
            <ImageFrame>
              <ImageBox>
                <Image
                  src={DummyImage}
                  alt='car image'
                  height={300}
                  objectFit='cover'
                />
              </ImageBox>
              <CarouselFrame>
                <StyledLeftButton onClick={handleMoveLeft}>
                  <Image src={arrowLeft} alt='arrow left' height={25} />
                </StyledLeftButton>
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
                <StyledRightButton onClick={handleMoveRight}>
                  <Image src={arrowRight} alt='arrow right' height={25} />
                </StyledRightButton>
              </CarouselFrame>
            </ImageFrame>
          </Container>
        </BackgroundOverlay>
      )}
    </>
  )
}

export default AppGallery2

const StyledButton = styled.button`
  /* position: absolute; */
  /* z-index: 2001; */
  bottom: -80px;

  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors?.white};

  border: none;
  cursor: pointer;
`

const StyledLeftButton = styled(StyledButton)`
  left: 10px;
`

const StyledRightButton = styled(StyledButton)`
  right: 10px;
`

const ButtonLabel = styled.label`
  font-size: 16px;
`

const PrevNextButtonsBox = styled.div``

const CarouselBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  height: 160px;

  border: 1px solid blue;
`

const CarouselFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  /* border: 1px solid blue; */
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
  display: flex;
  gap: 24px;

  border: 1px solid red;
`

const ButtonBox = styled.div`
  height: 72px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  border: 1px solid yellow;
`

const Container = styled.div`
  width: 80%;
  height: 90%;

  border: 1px solid red;
`

const BackgroundOverlay = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;

  display: flex;
  justify-content: center;
  align-items: center;
`
