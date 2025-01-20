import React from 'react'
import styled from 'styled-components'

import starIcon from '@/assets/icons/decorativeStarIcon.svg'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/pilot/theme'

type Props = {}

const DecorativeLabelsBox = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      <BlueLabel>LOGISTIC</BlueLabel>
      <Image src={starIcon} alt='star icon' width={isMobile ? 24 : 36} />
      <Label>SHIPPING</Label>
      <Image src={starIcon} alt='star icon' width={isMobile ? 24 : 36} />
      <GreenLabel>TRACKING</GreenLabel>
      <Image src={starIcon} alt='star icon' width={isMobile ? 24 : 36} />
      <Label>DELIVERY</Label>
    </Container>
  )
}

export default DecorativeLabelsBox

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors?.footer_black};
  padding: 42px 90px;

  width: 100%;

  overflow: hidden;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 42px 24px;
  }
`

const Label = styled.div`
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 23px;
  }
`

const GreenLabel = styled(Label)`
  color: ${({ theme }) => theme.colors?.green};
`

const BlueLabel = styled(Label)`
  color: ${({ theme }) => theme.colors?.link_blue};
`
