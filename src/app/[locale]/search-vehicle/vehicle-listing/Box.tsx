import React from 'react'
import styled from 'styled-components'

type Props = { children: React.JSX.Element }

const Box = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default Box

const Container = styled.div`
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.xl};
  background-color: ${({ theme }) => theme.colors?.white};
`

const Header = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`
