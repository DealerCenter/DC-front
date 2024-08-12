import React, { ReactHTMLElement } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  children: React.ReactNode
  height?: number
  width?: number
  onClick: () => void

  color?: string
}

const BasicButton = ({ children, height, width, onClick, color }: Props) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick} color={color}>
      {children}
    </StyledButton>
  )
}

export default BasicButton

type ButtonProps = {
  width?: number
  height?: number
  color?: string
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
          color: ${({ theme }) => theme.colors?.main_gray_100};
        `
      : color === 'black'
        ? css`
            background-color: ${({ theme }) => theme.colors?.button_black};
            color: ${({ theme }) => theme.colors?.white};
            &:active {
              background-color: ${({ theme }) => theme.colors?.button_black_90};
            }
          `
        : css`
            background-color: ${({ theme }) => theme.colors?.button_black};
            color: ${({ theme }) => theme.colors?.white};
            &:active {
              background-color: ${({ theme }) => theme.colors?.button_black_90};
            }
          `}      
  


  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing?.xl};
  transition: all 300ms ease-out;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius?.lg};
  border: none;

  cursor: pointer;
`
