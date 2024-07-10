import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import stepFrame from '@/app/assets/icons/stepNav.svg'
import doneIcon from '@/app/assets/icons/doneIcon.svg'

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
  border: 2px solid rgba(32, 32, 32, 0.42);
  /* padding: 12px 16px 12px 16px; */
  width: 32px;
  height: 32px;
  cursor: pointer;

  ${({ done, active }) =>
    done
      ? css`
          background-color: rgba(32, 32, 32, 1);
        `
      : active
        ? css`
            border-color: rgba(32, 32, 32, 1);
          `
        : css`
            border-color: rgba(32, 32, 32, 0.42);
          `}
`

const StyledP = styled.p<StyledPProps>`
  font-size: 14px;
  font-weight: 700;

  ${({ done, active }) =>
    done
      ? css`
          color: white;
        `
      : active
        ? css`
            color: rgba(18, 18, 20, 1);
          `
        : css`
            color: rgba(32, 32, 32, 0.42);
          `}
`
