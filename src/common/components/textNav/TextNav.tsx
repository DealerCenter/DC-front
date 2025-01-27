import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import doneIcon from '@/assets/icons/doneIcon.svg'

type Props = {
  children: string
  active: boolean
  done: boolean
  onClick: () => void
}

const TextNav = ({ children, active, onClick, done }: Props) => {
  return (
    <StyledDiv active={active} onClick={onClick} done={done}>
      <StyledP active={active} done={done}>
        {done ? <Image src={doneIcon} alt='done icon' width={10} /> : children}
      </StyledP>
    </StyledDiv>
  )
}

export default TextNav

type StyledDivProps = {
  active: boolean
  done: boolean
}
type StyledPProps = {
  active: boolean
  done: boolean
}

const StyledDiv = styled.div<StyledDivProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_42};
  width: 32px;
  height: 32px;

  ${({ done, active, theme }) =>
    done
      ? css`
          cursor: pointer;
          background-color: ${theme.colors?.main_gray_100};
        `
      : active
        ? css`
            cursor: default;
            border-color: ${theme.colors?.main_gray_100};
          `
        : css`
            cursor: default;
            border-color: ${theme.colors?.main_gray_42};
          `}
`

const StyledP = styled.p<StyledPProps>`
  font-size: 14px;
  font-weight: 700;

  ${({ done, active, theme }) =>
    done
      ? css`
          color: ${theme.colors?.white};
        `
      : active
        ? css`
            color: ${theme.colors?.button_black};
          `
        : css`
            color: ${theme.colors?.main_gray_42};
          `}
`
