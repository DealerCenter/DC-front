import theme from '@/app/[locale]/theme'
import { formatDate } from '@/common/helpers/simpleFunctions'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'

const CAR_IMAGE_WIDTH = 72
const CAR_IMAGE_HEIGHT = 64

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
  return (
    <ImageFrame>
      <ImageBox width={CAR_IMAGE_WIDTH} height={CAR_IMAGE_HEIGHT}>
        <Image
          src={imageLink}
          alt='image'
          width={CAR_IMAGE_WIDTH}
          height={CAR_IMAGE_HEIGHT}
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>
      <TextBox>
        <TextBold>{`${brand} ${year}`}</TextBold>
        <Text>{vinCode}</Text>
      </TextBox>
    </ImageFrame>
  )
}

export default CarImageAndModelBox

type ImageBoxProp = { width: number; height: number }

const ImageFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const ImageBox = styled.div<ImageBoxProp>`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: 18px;

  ${({ height, width }) => css`
    height: ${height}px;
    width: ${width}px;
  `}
`

const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
