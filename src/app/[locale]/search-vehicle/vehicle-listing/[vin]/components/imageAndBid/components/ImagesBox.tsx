import theme from '@/app/[locale]/theme'
import Image from 'next/image'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

type Props = { images: string[] }

const ImagesBox = ({ images }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const [selectedImage, setSelectedImage] = useState(images[0])

  console.log('images:', images)
  return (
    <ImagesFrame>
      {!isMobile && (
        <Carousel>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              isActive={image === selectedImage} // Highlight selected image
              onClick={() => setSelectedImage(image)} // Change main photo on click
            />
          ))}
        </Carousel>
      )}
      <ImageBox>
        <Image
          src={selectedImage}
          alt='Main photo'
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

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px;
  overflow-x: auto;
  max-width: 100%;

  /* Hide the scrollbar */
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */

  &::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }
`

const Thumbnail = styled.img<{ isActive: boolean }>`
  width: 80px;
  height: 60px;
  border-radius: 16px;
  object-fit: cover;
  cursor: pointer;
  border: ${({ isActive }) =>
    isActive
      ? `2px solid ${theme.colors?.link_blue}`
      : '2px solid transparent'};
  transition:
    transform 0.2s,
    border 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`
