import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { LeftNav, RightNav } from './components/NavButtons'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

type Props = { isOpen: boolean; setIsOpen: (arg: boolean) => void }

const AppGallery = ({ isOpen, setIsOpen }: Props) => {
  const renderLeftNav = (
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean
  ) => <LeftNav onClick={onClick} disabled={disabled} />

  const renderRightNav = (
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean
  ) => <RightNav onClick={onClick} disabled={disabled} />

  const galleryRef = useRef<ImageGallery>(null)

  const handleToggleFullScreen = () => {
    if (galleryRef.current) {
      galleryRef.current.toggleFullScreen()
    }
  }

  useEffect(() => {
    handleToggleFullScreen()
  }, [isOpen])

  return (
    <Container>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        infinite={true}
        renderRightNav={renderRightNav}
        renderLeftNav={renderLeftNav}
        ref={galleryRef}
        onScreenChange={(isFullscreen) => {
          if (!isFullscreen) {
            setIsOpen(false)
          }
        }}
      />
    </Container>
  )
}

export default AppGallery

const Container = styled.div``
