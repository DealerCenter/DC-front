import React from 'react'
import styled, { css } from 'styled-components'

type Props = { text: string; active: boolean }

const BarButton = ({ text, active }: Props) => {
  return <StyledButton active={active}>{text}</StyledButton>
}

export default BarButton

type ButtonProps = { active: boolean }

const StyledButton = styled.button<ButtonProps>`
  ${({ active }) =>
    active
      ? css`
          background-color: rgba(32, 32, 32, 1);
          color: white;
        `
      : css`
          background-color: white;
          color: rgba(32, 32, 32, 1);
        `}

  height: 56px;
  width: 286px;
  font-size: 16px;
  line-height: 33.6px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
`
