import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import closeIcon from '@/assets/icons/closeWithCircleEmpty.svg'
import arrowLeft from '@/assets/icons/arrows/arrowLeftBlack.svg'
import arrowRight from '@/assets/icons/arrows/arrowRightBlack.svg'

type Props = { onClick: () => void; text: string }

export const CloseButton = ({ onClick, text }: Props) => {
  return (
    <Container onClick={onClick}>
      <ButtonLabel>{text}</ButtonLabel>
      <Image src={closeIcon} alt='close icon' />
    </Container>
  )
}

type ButtonProps = { onClick: () => void }

export const LeftButton = ({ onClick }: ButtonProps) => {
  return (
    <StyledRightButton onClick={onClick}>
      <Image src={arrowLeft} alt='arrow Left' height={25} />
    </StyledRightButton>
  )
}

export const RightButton = ({ onClick }: ButtonProps) => {
  return (
    <StyledRightButton onClick={onClick}>
      <Image src={arrowRight} alt='arrow right' height={25} />
    </StyledRightButton>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  height: 56px;
  padding-left: 24px;
  padding-right: 16px;
  background-color: ${({ theme }) => theme.colors?.white};
  color: ${({ theme }) => theme.colors?.main_gray_100};
  border-radius: ${({ theme }) => theme.radius?.lg};
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

const ButtonLabel = styled.label`
  font-size: 16px;
`

const StyledButton = styled.button`
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
