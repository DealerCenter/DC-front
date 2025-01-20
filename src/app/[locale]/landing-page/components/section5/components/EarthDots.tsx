import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import earthDots from '@/assets/images/earthDotsOnBlack.svg'

type Props = {}

const EarthDots = (props: Props) => {
  return (
    <Container>
      <Image src={earthDots} alt='earth shape dots' />
    </Container>
  )
}

export default EarthDots

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  background-color: ${({ theme }) => theme.colors?.footer_black};

  width: 100%;
`
