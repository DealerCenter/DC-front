import theme from '@/app/[locale]/theme'
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
          border: 1px solid ${theme.colors?.disabled_gray};
        `
      : css`
          border: unset;
        `}

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${theme.colors?.active_black};
          color: ${theme.colors?.white};
        `
      : css`
          background-color: ${theme.colors?.white}
          color: ${theme.colors?.active_black};

          &:hover {
            background-color: ${theme.colors?.mist_gray};
          }
        `}
`
