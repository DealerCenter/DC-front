import theme from '@/app/[locale]/theme'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import { css } from 'styled-components'

type Props = {
  imageLink: string
  brand: string
  model: string
  year: string
  vinCode: string
}

const CarImageAndModelBox = ({
  imageLink,
  brand,
  model,
  year,
  vinCode,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <ImageFrame>
      <ImageBox isMobile={isMobile}>
        <Image
          src={imageLink}
          alt='image'
          width={isMobile ? 120 : 88}
          height={isMobile ? 107 : 80}
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
          <Text>{'29/03/2024'}</Text>
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
