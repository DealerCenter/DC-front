import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

import arrowLeft from '@/assets/icons/arrows/arrowLeftBlack.svg'
import arrowRight from '@/assets/icons/arrows/arrowRightBlack.svg'

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>
  disabled: boolean
}

export const LeftNav = ({ onClick, disabled }: Props) => {
  return (
    <StyledLeftButton onClick={onClick} disabled={disabled}>
      <Image src={arrowLeft} alt='arrow right' height={25} />
    </StyledLeftButton>
  )
}

export const RightNav = ({ onClick, disabled }: Props) => {
  return (
    <StyledRightButton onClick={onClick} disabled={disabled}>
      <Image src={arrowRight} alt='arrow right' height={25} />
    </StyledRightButton>
  )
}

const StyledButton = styled.button`
  position: absolute;
  z-index: 100;
  bottom: -80px;

  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors?.white};

  border: none;
  cursor: pointer;
`

const StyledLeftButton = styled(StyledButton)`
  left: 10px;
`

const StyledRightButton = styled(StyledButton)`
  right: 10px;
`
