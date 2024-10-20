import React from 'react'
import BasicButton from './BasicButton'
import styled from 'styled-components'
import Image from 'next/image'

type Props = {
  icon: string
  label: string
  onClick: () => void
  height: number
}

const BasicButtonWithIcon = ({ icon, label, onClick, height }: Props) => {
  return (
    <BasicButton onClick={onClick} padding={20} height={height}>
      <ButtonFrame>
        <ButtonIcon>
          <Image src={icon} alt='close icon' />
        </ButtonIcon>
        <ButtonLabel>{label}</ButtonLabel>
      </ButtonFrame>
    </BasicButton>
  )
}

export default BasicButtonWithIcon

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};
  cursor: pointer;
`
