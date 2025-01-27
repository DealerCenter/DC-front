import theme from '@/app/[locale]/theme'
import { formatDate } from '@/common/helpers/simpleFunctions'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { css } from 'styled-components'

const CAR_IMAGE_WIDTH = 120
const CAR_IMAGE_WIDTH_MOBILE = 88
const CAR_IMAGE_HEIGHT = 107
const CAR_IMAGE_WIDTH_HEIGHT = 80

type Props = {
  imageLink: string
  brand: string
  model: string
  year: number
  vinCode: string
  date: string
}

const CarImageAndModelBox = ({
  imageLink,
  brand,
  model,
  year,
  vinCode,
  date,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const formattedDate = formatDate(date)

  return (
    <ImageFrame>
      <ImageBox isMobile={isMobile}>
        <Image
          src={imageLink}
          alt='image'
          width={isMobile ? CAR_IMAGE_WIDTH : CAR_IMAGE_WIDTH_MOBILE}
          height={isMobile ? CAR_IMAGE_HEIGHT : CAR_IMAGE_WIDTH_HEIGHT}
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>
      {isMobile ? (
        <TextFrame isMobile={isMobile}>
          <TextBox>
            <Text19>{brand}</Text19>
            <TextSmallGray>{`${year} ${model}`}</TextSmallGray>
          </TextBox>
          <Text>{vinCode}</Text>
        </TextFrame>
      ) : (
        <TextFrame isMobile={false}>
          <TextBox>
            <TextBold>{`${brand} ${year}`}</TextBold>
            <Text>{vinCode}</Text>
          </TextBox>
          <Text>{formattedDate}</Text>
        </TextFrame>
      )}
    </ImageFrame>
  )
}

export default CarImageAndModelBox

type isMobileProp = { isMobile: boolean }

const ImageFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const ImageBox = styled.div<isMobileProp>`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: 18px;

  ${({ isMobile }) =>
    isMobile
      ? css`
          width: 120px;
          height: 107px;
        `
      : css`
          width: 88px;
          height: 80px;
        `}
`

const TextFrame = styled.div<isMobileProp>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ isMobile }) =>
    isMobile
      ? css`
          width: 202px;
          height: 107px;
        `
      : css`
          width: 180px;
          height: 80px;
        `}
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const TextBold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.black};
`
const Text19 = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`

const TextSmallGray = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_56};
`
