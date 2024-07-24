import React from 'react'
import styled from 'styled-components'

type Props = { text: string; onClick: () => void }

const FormSaveButton = ({ text, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default FormSaveButton

type ButtonProps = {}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors?.button_black};
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  transition: all 300ms ease-out;
  font-weight: 700;
  width: 200px;
  height: 56px;

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
`
