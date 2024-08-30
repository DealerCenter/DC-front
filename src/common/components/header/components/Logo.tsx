import React from 'react'
import styled from 'styled-components'

type Props = {}

const Logo = (props: Props) => {
  return <StyledLogo>DUX</StyledLogo>
}

export default Logo

const StyledLogo = styled.label`
  color: ${({ theme }) => theme.colors?.white};
  font-size: 40px;
  font-weight: bold;
  padding: 12px 16px 12px 16px;

  @media ${({ theme }) => theme.media?.sm} {
    color: ${({ theme }) => theme.colors?.white};
    font-size: 23px;
    font-weight: ${({ theme }) => theme.fontWeight?.bold};
    padding: 12px 8px 12px 8px;
  }

  cursor: default;
`
