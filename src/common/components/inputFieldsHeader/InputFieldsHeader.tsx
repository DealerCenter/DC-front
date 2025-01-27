import React from 'react'
import styled, { css } from 'styled-components'
import pencilIcon from '@/assets/icons/editPencil.svg'
import arrowDown from '@/assets/icons/arrowDown.svg'
import Image from 'next/image'

type Props = {
  text: string
  onEdit: () => void
  onArrowDown: () => void
  isOpen?: boolean
}

const InputFieldsHeader = ({
  text,
  onEdit,
  onArrowDown,
  isOpen = false,
}: Props) => {
  return (
    <Container>
      <StyledH5>{text}</StyledH5>
      <IconsBox>
        <Icon onClick={onEdit}>
          <Image src={pencilIcon} alt='icon' />
        </Icon>
        <Icon onClick={onArrowDown} isOpen={isOpen}>
          <Image src={arrowDown} alt='icon' />
        </Icon>
      </IconsBox>
    </Container>
  )
}

export default InputFieldsHeader

const Container = styled.div`
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius?.lg};
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const StyledH5 = styled.h5`
  font-size: 23px;
  font-weight: 700;
  padding: 16px 32px;
  margin: 0;

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.medium};
  }
`

type IconProps = {
  isOpen?: boolean
}

const Icon = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;

  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}

  cursor: pointer;
`

const IconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 216px;
  gap: 16px;
`
