import React from 'react'
import styled, { css } from 'styled-components'

type Props = { children: any; width?: number }

const Box = ({ children, width }: Props) => {
  return <Container width={width}>{children}</Container>
}

export default Box

type ContainerProps = { width?: number }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    padding: ${({ theme }) => theme.spacing?.md};
  }

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: unset;
        `}
`
