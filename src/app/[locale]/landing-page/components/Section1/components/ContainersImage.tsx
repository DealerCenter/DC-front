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
      <Image
        src={isMobile ? containersImage2Small : containersImage2}
        alt='containers image'
        layout='responsive'
      />
    </Container>
  )
}

export default ContainersImage

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 670px;
  width: 100%;
  z-index: -1;

  height: 300px;
  overflow: hidden;

  @media ${({ theme }) => theme.media?.sm} {
    top: 920px;
  }
`
