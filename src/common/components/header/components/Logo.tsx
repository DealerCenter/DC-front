import React from 'react'
import styled from 'styled-components'

type Props = {}

const Logo = (props: Props) => {
  return <Container>DUX</Container>
}

export default Logo

const Container = styled.label`
  font-size: 40px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  padding: 12px 16px 12px 16px;

  @media ${({ theme }) => theme.media?.sm} {
    color: ${({ theme }) => theme.colors?.white};
    font-size: 23px;
    padding: 12px 8px 12px 8px;
  }

  cursor: default;
`
