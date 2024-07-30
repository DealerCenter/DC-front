import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  text: string
  height?: number
  width?: number
  onClick: () => void
}

const BasicButton = ({ text, height, width, onClick }: Props) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      {text}
    </StyledButton>
  )
}

export default BasicButton

type ButtonProps = {
  width?: number
  height?: number
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
  
  
    @media ${({ theme }) => theme.media?.sm} {
  }

  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing?.xl};
  transition: all 300ms ease-out;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius?.lg};
  background-color: ${({ theme }) => theme.colors?.button_black};
  color: ${({ theme }) => theme.colors?.white};

  &:active {
    background-color: ${({ theme }) => theme.colors?.button_black_90};
  }

  &:focus {
    border: none;
    outline: 4px solid ${({ theme }) => theme.colors?.sky_blue};
  }

  cursor: pointer;
`
