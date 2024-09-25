import React from 'react'
import styled from 'styled-components'

type Props = { children: React.JSX.Element; header: string }

const BoxWithHeader = ({ children, header }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Line />
      {children}
    </Container>
  )
}

export default BoxWithHeader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.xl};
  background-color: ${({ theme }) => theme.colors?.white};

  gap: ${({ theme }) => theme.spacing?.lg};

  @media ${({ theme }) => theme.media?.sm} {
    padding: ${({ theme }) => theme.spacing?.lg};
  }
`

const Header = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
