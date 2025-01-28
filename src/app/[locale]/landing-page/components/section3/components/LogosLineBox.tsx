import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import zimLogo from '@/assets/icons/logosLine/zimLogo.svg'
import maerskLogo from '@/assets/icons/logosLine/maerskLogo.svg'
import mscLogo from '@/assets/icons/logosLine/mscLogo.svg'
import evergreenLogo from '@/assets/icons/logosLine/evergreenLogo.svg'
import coscoLogo from '@/assets/icons/logosLine/coscoShippingLogo.svg'

import decorativeStarIcon from '@/assets/icons/decorativeStarIconBlack.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {}

const LogosLineBox = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      {isMobile && <Image src={decorativeStarIcon} alt='star icon' />}
      <Image src={zimLogo} alt='logo' />
      {!isMobile && <Image src={decorativeStarIcon} alt='star icon' />}
      <Image src={maerskLogo} alt='logo' />
      {!isMobile && <Image src={decorativeStarIcon} alt='star icon' />}
      <Image src={mscLogo} alt='logo' />
      {!isMobile && <Image src={decorativeStarIcon} alt='star icon' />}
      <Image src={evergreenLogo} alt='logo' />
    </Container>
  )
}

export default LogosLineBox

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 60px;

  width: 100%;
  height: 140px;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors?.white};
  border-width: 6px 0px 6px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 1);

  @media ${({ theme }) => theme.media?.sm} {
    overflow: auto;
  }
`
