import theme from '@/app/[locale]/pilot/theme'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'

type Props = { text: string }

const HeaderH4Bold = ({ text }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <H4Box>
      <StyledH4 isMobile={isMobile}>{text}</StyledH4>
    </H4Box>
  )
}

export default HeaderH4Bold

type StyledH4Props = { isMobile: boolean }

const StyledH4 = styled.h4<StyledH4Props>`
  color: ${({ theme }) => theme.colors?.main_gray_100};

  font-weight: 700;
  margin: 0;

  ${({ isMobile }) =>
    isMobile
      ? css`
          font-size: 23px;
        `
      : css`
          font-size: 28px;
        `}

  cursor: default;
  user-select: none;
`

const H4Box = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.media?.sm} {
    padding-left: 0;
    height: 60px;
  }
  height: 82px;
  padding-left: 32px;
`
