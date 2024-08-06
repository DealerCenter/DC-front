'use client'
import React from 'react'
import FullHeader from './components/FullHeader'
import { useMediaQuery } from 'react-responsive'
import BurgerHeader from './components/BurgerHeader'
import theme from '@/app/[locale]/theme'
import styled from 'styled-components'

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
