import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

type Props = {
  children: React.JSX.Element
  header: string
  width?: number
  isWidthFill?: boolean
}

const BoxWithHeader = ({ children, header, width, isWidthFill }: Props) => {
  return (
    <Container width={width} isWidthFill={isWidthFill}>
      <Header>{header}</Header>
      <Line />
      {children}
    </Container>
  )
}

export default BoxWithHeader

type ContainerProps = { width?: number; isWidthFill?: boolean }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.xl};
  background-color: ${({ theme }) => theme.colors?.white};

  gap: ${({ theme }) => theme.spacing?.lg};

  width: ${({ width }) => `${width}px`};

  @media ${({ theme }) => theme.media?.md} {
    width: 472px;

    ${({ isWidthFill }) =>
      isWidthFill &&
      css`
        width: 100%;
      `}
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: ${({ theme }) => theme.spacing?.lg};
    width: 343px;

    ${({ isWidthFill }) =>
      isWidthFill &&
      css`
        width: 100%;
      `}
  }

  ${({ isWidthFill }) =>
    isWidthFill &&
    css`
      width: 100%;
    `}
`

const Header = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`

const Line = styled.div`
  height: 1px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
