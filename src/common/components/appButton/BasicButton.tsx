import React, { ReactHTMLElement } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  children: React.ReactNode
  height?: number
  width?: number
  onClick: () => void
  color?: 'black' | 'white'
  padding?: number
  isBorder?: boolean
}

const BasicButton = ({
  children,
  height,
  width,
  onClick,
  color = 'black',
  padding,
  isBorder = false,
}: Props) => {
  return (
    <StyledButton
      width={width}
      height={height}
      onClick={onClick}
      color={color}
      padding={padding}
      isBorder={isBorder}
    >
      {children}
    </StyledButton>
  )
}

export default BasicButton

type ButtonProps = {
  width?: number
  height?: number
  color?: 'black' | 'white'
  padding?: number
  isBorder?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `}

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 44px;
        `} 

  ${({ color }) =>
    color === 'white'
      ? css`
          background-color: ${({ theme }) => theme.colors?.white};
          color: ${({ theme }) => theme.colors?.black};
          &:hover {
            background-color: ${({ theme }) => theme.colors?.main_gray_04};
          }
          &:active {
            background-color: ${({ theme }) => theme.colors?.main_gray_16};
          }
        `
      : color === 'black' &&
        css`
          background-color: ${({ theme }) => theme.colors?.button_black};
          color: ${({ theme }) => theme.colors?.white};
          border: unset;

          &:active {
            background-color: ${({ theme }) => theme.colors?.button_black_90};
          }
        `}

  ${({ padding }) =>
    padding
      ? css`
          padding: 0 ${padding}px;
        `
      : css`
          padding: 0 ${({ theme }) => theme.spacing?.xl};
        `}

  ${({ isBorder }) =>
    isBorder
      ? css`
          border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};
        `
      : css`
          border: none;
        `}

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 300ms ease-out;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius?.lg};

  cursor: pointer;
`
