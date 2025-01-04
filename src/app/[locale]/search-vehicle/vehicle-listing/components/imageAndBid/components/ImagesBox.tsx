import Image from 'next/image'

import theme from '@/app/[locale]/theme'

import dummyCarImage from '@/assets/images/DummyCarImage.jpg'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

type Props = {
  imageSrcs: string[]
}

const ImagesBox = ({ imageSrcs }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <ImagesFrame>
      {!isMobile && (
        <SmallImagesFrame>
          <SmallImageBox>
            <Image
              src={imageSrcs[1] || dummyCarImage}
              alt='image'
              width={100}
              height={83}
              style={{ objectFit: 'cover' }}
            />
          </SmallImageBox>
          <SmallImageBox>
            <Image
              src={imageSrcs[2] || dummyCarImage}
              alt='image'
              width={100}
              height={83}
              style={{ objectFit: 'cover' }}
            />
          </SmallImageBox>
          <SmallImageBox>
            <Image
              src={imageSrcs[3] || dummyCarImage}
              alt='image'
              width={100}
              height={83}
              style={{ objectFit: 'cover' }}
            />
          </SmallImageBox>
          <SmallImageBox>
            <Image
              src={imageSrcs[4] || dummyCarImage}
              alt='image'
              width={100}
              height={83}
              style={{ objectFit: 'cover' }}
            />
          </SmallImageBox>
          <SmallImageBox>
            <Image
              src={imageSrcs[5] || dummyCarImage}
              alt='image'
              width={100}
              height={83}
              style={{ objectFit: 'cover' }}
            />
          </SmallImageBox>
        </SmallImagesFrame>
      )}
      <ImageBox>
        <Image
          src={imageSrcs[6] || dummyCarImage}
          alt='image'
          width={600}
          height={450}
          style={{ objectFit: 'cover' }}
        />
      </ImageBox>
    </ImagesFrame>
  )
}

export default ImagesBox

const ImagesFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  line-height: 0;
  height: 450px;

  width: 600px;

  @media ${({ theme }) => theme.media?.md} {
    width: 477px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    height: 260px;
  }
`

const SmallImagesFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const SmallImageBox = styled.div`
  width: 100px;
  height: 83px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  line-height: 0;
`
