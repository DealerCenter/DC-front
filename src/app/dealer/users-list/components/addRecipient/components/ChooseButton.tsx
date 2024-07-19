import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

type Props = {
  text: string
  isActive: boolean
  onClick: () => void
  withBorder?: boolean
}

const ChooseButton = ({
  text,
  isActive,
  onClick,
  withBorder = false,
}: Props) => {
  return (
    <Container isActive={isActive} onClick={onClick} withBorder={withBorder}>
      {text}
    </Container>
  )
}

export default ChooseButton

type ButtonProps = { isActive: boolean; withBorder: boolean }

const Container = styled.div<ButtonProps>`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  width: 143px;
  height: 48px;

  ${({ withBorder }) =>
    withBorder
      ? css`
          border: 1px solid rgba(32, 32, 32, 0.56);
        `
      : css`
          border: unset;
        `}

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: rgba(32, 32, 32, 1);
          color: white;
        `
      : css`
          background-color: white;
          color: rgba(32, 32, 32, 1);

          &:hover {
            background-color: rgba(32, 32, 32, 0.04);
          }
        `}
`
