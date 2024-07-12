'use client'
import React from 'react'
import FullHeader from './FullHeader'
import { useMediaQuery } from 'react-responsive'
import BurgerHeader from './BurgerHeader'

type Props = {}

const Header = (props: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  return <div>{isMobile ? <BurgerHeader /> : <FullHeader />}</div>
}

export default Header
