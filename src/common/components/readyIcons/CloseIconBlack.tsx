import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import closeXIcon from '@/assets/icons/closeXBlack.svg'

type Props = {
  onClick: (e: any) => void
  top: number
  right: number
}

const CloseIconBlack = ({ onClick, top, right }: Props) => {
  return (
    <Container onClick={onClick} top={top} right={right}>
      <Image src={closeXIcon} alt='close icon' />
    </Container>
  )
}

export default CloseIconBlack

const Container = styled.div<Props>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 25px;

  background-color: ${({ theme }) => theme.colors?.white};
  top: ${({ top }) => `${top}px`};
  right: ${({ right }) => `${right}px`};

  cursor: pointer;
`
