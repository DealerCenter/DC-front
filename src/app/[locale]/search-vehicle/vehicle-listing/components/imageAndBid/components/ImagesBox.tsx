import React from 'react'
import Image from 'next/image'

import dummyCarImage from '@/assets/images/DummyCarImage.jpg'
import styled from 'styled-components'

type Props = {}

const ImagesBox = (props: Props) => {
  return (
    <ImagesFrame>
      <SmallImagesFrame>
        <SmallImageBox>
          <Image
            src={dummyCarImage}
            alt='image'
            width={100}
            height={83}
            style={{ objectFit: 'cover' }}
          />
        </SmallImageBox>
        <SmallImageBox>
          <Image
            src={dummyCarImage}
            alt='image'
            width={100}
            height={83}
            style={{ objectFit: 'cover' }}
          />
        </SmallImageBox>
        <SmallImageBox>
          <Image
            src={dummyCarImage}
            alt='image'
            width={100}
            height={83}
            style={{ objectFit: 'cover' }}
          />
        </SmallImageBox>
        <SmallImageBox>
          <Image
            src={dummyCarImage}
            alt='image'
            width={100}
            height={83}
            style={{ objectFit: 'cover' }}
          />
        </SmallImageBox>
        <SmallImageBox>
          <Image
            src={dummyCarImage}
            alt='image'
            width={100}
            height={83}
            style={{ objectFit: 'cover' }}
          />
        </SmallImageBox>
      </SmallImagesFrame>
      <ImageBox>
        <Image
          src={dummyCarImage}
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
  width: 600px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  line-height: 0;
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
