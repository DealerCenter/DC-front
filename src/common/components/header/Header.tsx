'use client'
import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'

import FullHeader from './components/fullHeader/FullHeader'
import BurgerHeader from './components/burgerHeader/BurgerHeader'

type Props = {}

const Header = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  return <Container>{isMobile ? <BurgerHeader /> : <FullHeader />}</Container>
}

export default Header

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
`
