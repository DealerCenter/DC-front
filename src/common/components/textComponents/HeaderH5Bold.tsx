import theme from '@/app/[locale]/pilot/theme'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'

type Props = { text: string }

const HeaderH5Bold = ({ text }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return <StyledH5 isMobile={isMobile}>{text}</StyledH5>
}

export default HeaderH5Bold

type StyledH4Props = { isMobile: boolean }

const StyledH5 = styled.h4<StyledH4Props>`
  color: ${({ theme }) => theme.colors?.main_gray_100};

  font-weight: 700;
  margin: 0;

  ${({ isMobile }) =>
    isMobile
      ? css`
          font-size: 19px;
        `
      : css`
          font-size: 23px;
        `}
`
