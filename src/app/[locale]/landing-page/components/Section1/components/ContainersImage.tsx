import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import containersImage2 from '@/assets/images/containersImage2.png'
import containersImage2Small from '@/assets/images/containersImage2Small.png'
import { useMediaQuery } from 'react-responsive'
import theme from '../../../../theme'

type Props = {}

const ContainersImage = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      <ImageFrame>
        <Image
          src={isMobile ? containersImage2Small : containersImage2}
          alt='containers image'
          layout='responsive'
        />
      </ImageFrame>
    </Container>
  )
}

export default ContainersImage

const Container = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;

  width: 100%;

  padding-top: 200px;

  @media ${({ theme }) => theme.media?.sm} {
    padding-top: 150px;
  }
`

const ImageFrame = styled.div`
  height: 300px;
  overflow: hidden;
`
