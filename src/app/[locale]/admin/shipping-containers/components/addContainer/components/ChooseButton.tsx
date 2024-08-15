import theme from '@/app/[locale]/theme'
import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

type Props = {
  text: string
  isActive: boolean
  onClick: () => void
  withBorder?: boolean
  fontSize?: string
  width?: number
  height?: number
}

const ChooseButton = ({
  text,
  isActive,
  onClick,
  withBorder = false,
  fontSize = '13px',
  width,
  height,
}: Props) => {
  return (
    <Container
      isActive={isActive}
      onClick={onClick}
      withBorder={withBorder}
      fontSize={fontSize}
      width={width}
      height={height}
    >
      {text}
    </Container>
  )
}

export default ChooseButton

type ButtonProps = {
  isActive: boolean
  withBorder: boolean
  fontSize: string
  width?: number
  height?: number
}

const Container = styled.div<ButtonProps>`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: ${theme.radius?.lg};
  border: none;

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 143px;
        `}

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 48px;
        `}

  ${({ fontSize }) => css`
    font-size: ${fontSize};
  `}

  ${({ withBorder }) =>
    withBorder
      ? css`
          border: 1px solid ${theme.colors?.main_gray_56};
        `
      : css`
          border: unset;
        `}
          
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${theme.colors?.main_gray_100};
          color: ${theme.colors?.white};
        `
      : css`
          background-color: ${theme.colors?.white}
          color: ${theme.colors?.main_gray_100};

          &:hover {
            background-color: ${theme.colors?.main_gray_04};
          }
        `}

  cursor: pointer;
`
