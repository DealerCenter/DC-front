import React from 'react'
import styled, { css } from 'styled-components'
import { CSS } from 'styled-components/dist/types'

type Props = { children: string; active: boolean; onClick: () => void }

const TextNav = ({ children, active, onClick }: Props) => {
  return (
    <StyledDiv active={active} onClick={onClick}>
      <StyledP active={active}>{children}</StyledP>
    </StyledDiv>
  )
}

export default TextNav

type StyledDivProps = {
  active: boolean
}
type StyledPProps = {
  active: boolean
}

const StyledDiv = styled.div<StyledDivProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid rgba(32, 32, 32, 0.42);
  /* padding: 12px 16px 12px 16px; */
  width: 32px;
  height: 32px;

  cursor: pointer;

  ${({ active }) =>
    active
      ? css`
          border-color: rgba(18, 18, 20, 1);
        `
      : css`
          border-color: rgba(32, 32, 32, 0.42);
        `}
`

const StyledP = styled.p<StyledPProps>`
  font-size: 14px;

  ${({ active }) =>
    active
      ? css`
          color: rgba(18, 18, 20, 1);
        `
      : css`
          color: rgba(32, 32, 32, 0.42);
        `}
`
