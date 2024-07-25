import React from 'react'
import styled, { css } from 'styled-components'

type ButtonTypes = 'filled' | 'outlined'

type ButtonHeight = 'medium' | 'large'

type Props = {
  text: string
  type: ButtonTypes
  onClick: () => void
  disabled?: boolean
  isSmall?: boolean
  height?: ButtonHeight
}

const AppButton = ({
  text,
  type,
  onClick,
  disabled,
  isSmall,
  height = 'large',
}: Props) => {
  return (
    <StyledButton
      disabled={disabled}
      customType={type}
      onClick={onClick}
      isSmall={isSmall}
      height={height}
    >
      {text}
    </StyledButton>
  )
}

export default AppButton

type ButtonProps = {
  customType?: string
  isSmall?: boolean
  height: string
}

const StyledButton = styled.button<ButtonProps>`
  ${({ disabled, customType, theme }) =>
    disabled && customType === 'filled'
      ? css`
          background-color: ${theme.colors?.main_gray_26};
        `
      : !disabled && customType === 'filled'
        ? css`
            background-color: ${theme.colors?.button_black};
            &:hover {
              background-color: ${theme.colors?.button_black_90};
            }
          `
        : customType === 'outlined' &&
          css`
            background-color: transparent;
            &:hover {
              background-color: '${theme.colors?.main_gray_10}';
              border: 1px solid ${theme.colors?.main_gray_100};
            }
          `};

  ${({ customType, theme }) =>
    customType === 'filled'
      ? css`
          border: none;
        `
      : customType === 'outlined' &&
        css`
          border: 1px solid ${theme.colors?.main_gray_56};
        `};

  ${({ disabled, customType, theme }) =>
    customType === 'filled'
      ? css`
          color: ${theme.colors?.white};
        `
      : !disabled && customType === 'outlined'
        ? css`
            color: ${theme.colors?.main_gray_100};
          `
        : css`
            color: ${theme.colors?.main_gray_56};
          `};

  ${({ isSmall }) =>
    isSmall
      ? css`
          width: 200px;
        `
      : css`
          width: 350px;
        `}

  ${({ height }) =>
    height === 'medium'
      ? css`
          height: 44px;
        `
      : height === 'large' &&
        css`
          height: 56px;
        `}      


  transition: all 300ms ease-out;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  line-height: 33.6px;
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius?.lg};

  &:active {
    background-color: ${({ customType, theme }) =>
      customType === 'filled'
        ? theme.colors?.main_gray_68
        : theme.colors?.main_gray_100};
  }

  &:focus {
    border: none;
    outline: 4px solid ${({ theme }) => theme.colors?.sky_blue};
  }

  cursor: pointer;
`
