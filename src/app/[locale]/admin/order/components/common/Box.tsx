import React from 'react'
import styled from 'styled-components'

type Props = { children: React.ReactNode }

const Box = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default Box

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    padding: ${({ theme }) => theme.spacing?.md};
  }
`
