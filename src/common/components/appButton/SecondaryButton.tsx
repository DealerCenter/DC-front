import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = { text: string; onClick: () => void; icon: string }

const SecondaryButton = ({ text, onClick, icon }: Props) => {
  return (
    <Container onClick={onClick}>
      <IconBox>
        <Image src={icon} alt='icon' />
      </IconBox>
      <Label>{text}</Label>
    </Container>
  )
}

export default SecondaryButton

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};
  border-radius: 12px;
  padding: 0 20px 0 14px;
  gap: 6px;

  cursor: pointer;
`
const Label = styled.label`
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: 16px;
  font-weight: 700;
`
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
