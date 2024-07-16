import React from 'react'
import styled from 'styled-components'
import pencilIcon from '@/assets/icons/editPencil.svg'
import arrowDown from '@/assets/icons/arrowDown.svg'
import Image from 'next/image'

type Props = { text: string; onEdit: () => void; onArrowDown: () => void }

const InputFieldsHeader = ({ text, onEdit, onArrowDown }: Props) => {
  return (
    <Container>
      <StyledH5>{text}</StyledH5>
      <IconsBox>
        <Icon onClick={onEdit}>
          <Image src={pencilIcon} alt='icon' />
        </Icon>
        <Icon onClick={onArrowDown}>
          <Image src={arrowDown} alt='icon' />
        </Icon>
      </IconsBox>
    </Container>
  )
}

export default InputFieldsHeader

const Container = styled.div`
  width: 802px;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  border-radius: 12px;
  background-color: rgba(32, 32, 32, 0.04);
`
const StyledH5 = styled.h5`
  font-size: 23px;
  font-weight: 700;
  padding: 16px 32px;
  margin: 0;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
`

const IconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 216px;
  gap: 16px;
`