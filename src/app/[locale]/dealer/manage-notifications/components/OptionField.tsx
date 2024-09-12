import React, { useState } from 'react'
import styled from 'styled-components'
import ReactSwitch from 'react-switch'

type Props = {
  text: string
  isChecked: boolean
  onChange: (e: any) => void
  key: string
  setTouched: () => void
}

const OptionField = ({ text, isChecked, onChange, key, setTouched }: Props) => {
  const [isOn, setIsOn] = useState(isChecked)
  const handleChange = (e: any) => {
    setIsOn((is) => !is)
    onChange(e)
    setTouched()
  }

  // settingsState.map((setting) => {
  //   if ((setting.CategoryId = settingId)) {
  //     setIsOn(setting.enabled)
  //   }
  // })

  return (
    <Container key={key}>
      <Label>{text}</Label>
      <ReactSwitch
        onChange={handleChange}
        checked={isOn}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor='#202020'
        offColor='#E8E8E8'
        height={24}
        width={44}
        handleDiameter={20}
        activeBoxShadow='0 0 1px 3px  #D8E2F4'
      />
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

  @media ${({ theme }) => theme.media?.sm} {
    padding: ${({ theme }) => theme.spacing?.md};
  }
`

const Label = styled.div`
  font-size: 18px;
  font-weight: 700;

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.medium};
  }
`

const Icon = styled.div``
