import React from 'react'
import styled, { css } from 'styled-components'

type Props = { text: string; onClick: () => void; disabled?: boolean }

const FormSaveButton = ({ text, onClick, disabled = false }: Props) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} isDisabled={disabled}>
      {text}
    </StyledButton>
  )
}

export default FormSaveButton

type ButtonProps = { isDisabled?: boolean }

const StyledButton = styled.button<ButtonProps>`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  transition: all 300ms ease-out;
  font-weight: 700;
  width: 200px;
  height: 56px;
  border: 0;

  ${({ isDisabled }) =>
    isDisabled
      ? css`
          background-color: ${({ theme }) => theme.colors?.main_gray_26};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.button_black};
        `}

  @media ${({ theme }) => theme.media?.sm} {
    width: 142px;
    height: 44px;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors?.main_gray_68};
  }

  &:focus {
    border: none;
    outline: 4px solid ${({ theme }) => theme.colors?.sky_blue};
  }

  cursor: pointer;
`
