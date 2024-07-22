import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import toggleBaseOff from '@/assets/icons/toggle/ToggleBaseOff.svg'
import toggleBaseOn from '@/assets/icons/toggle/ToggleBaseOn.svg'
import toggleCircle from '@/assets/icons/toggle/ToggleCircle.svg'

type Props = { text: string; isOn?: boolean; onToggle: () => void }

const OptionField = ({ text, isOn, onToggle }: Props) => {
  return (
    <Container>
      <Label>{text}</Label>
      <Image src={toggleBaseOff} alt='toggle icon' onClick={onToggle} />
    </Container>
  )
}

export default OptionField

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 16px 64px 16px 32px;
`

const Label = styled.div`
  font-size: 18px;
  font-weight: 700;
`

const Icon = styled.div``
