import React from 'react'
import styled, { css } from 'styled-components'

type ButtonTypes = 'filled' | 'outlined'

type ButtonHeight = 'medium' | 'large'

type Props = {
  text: string
  type: ButtonTypes
  disabled?: boolean
  onClick: () => void
  isSmall?: boolean
  height?: ButtonHeight
}

const AppButton = ({
  text,
  type,
  disabled,
  onClick,
  isSmall,
  height = 'large',
}: Props) => {
  return (
    <StyledButton
      disabled={disabled}
      customType={type}
      onClick={!disabled ? onClick : () => {}}
      isSmall={isSmall}
      height={height}
    >
      {text}
    </StyledButton>
  )
}

export default AppButton

type ButtonProps = { customType?: string; isSmall?: boolean; height: string }

const StyledButton = styled.button<ButtonProps>`
  ${({ disabled, customType }) =>
    disabled && customType === 'filled'
      ? css`
          background-color: rgba(32, 32, 32, 0.26);
        `
      : !disabled && customType === 'filled'
      ? css`
          background-color: rgba(32, 32, 32, 1);
          &:hover {
            background-color: rgba(18, 18, 20, 0.9);
          }
        `
      : customType === 'outlined' &&
        css`
          background-color: transparent;
          &:hover {
            background-color: rgba(32, 32, 32, 0.1);
            border: 1px solid rgba(32, 32, 32, 1);
          }
        `};

  ${({ customType }) =>
    customType === 'filled'
      ? css`
          border: none;
        `
      : customType === 'outlined' &&
        css`
          border: 1px solid rgba(32, 32, 32, 0.56);
        `};

  ${({ disabled, customType }) =>
    customType === 'filled'
      ? css`
          color: white;
        `
      : !disabled && customType === 'outlined'
      ? css`
          color: rgba(32, 32, 32, 1);
        `
      : css`
          color: rgba(32, 32, 32, 0.56);
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
  font-size: 16px;
  line-height: 33.6px;
  font-weight: 700;
  border-radius: 12px;

  &:active {
    background-color: ${({ customType }) =>
      customType === 'filled'
        ? 'rgba(32, 32, 32, 0.68)'
        : 'rgba(32, 32, 32, 0.1)'};
  }

  &:focus {
    border: none;
    outline: 4px solid rgba(216, 226, 244, 1);
  }
`
