'use client'
import React from 'react'
import FullHeader from './FullHeader'
import { useMediaQuery } from 'react-responsive'
import BurgerHeader from './BurgerHeader'
import theme from '@/app/theme'

type Props = {}

const Header = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  return <div>{isMobile ? <BurgerHeader /> : <FullHeader />}</div>
}

export default Header
