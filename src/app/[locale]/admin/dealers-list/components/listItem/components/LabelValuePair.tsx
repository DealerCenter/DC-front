import theme from '@/app/[locale]/theme'
import TextInput from '@/common/components/InputElements/TextInput'
import React from 'react'
import styled from 'styled-components'

type Props = { label: string; value: string; valueWidth?: number }

const LabelValuePair = ({ label, value, valueWidth }: Props) => {
  return (
    <Container>
      <LabelBox>
        <Label>{label}</Label>
      </LabelBox>
      <TextInput
        type=''
        placeholder={''}
        name={value}
        value={value}
        onChange={() => {}}
        onBlur={() => {}}
        width={valueWidth ? valueWidth : 155}
        height={48}
        isOutline={false}
        fontSize={13}
        backgroundColor={'transparent'}
      />
    </Container>
  )
}

export default LabelValuePair

const Container = styled.div`
  display: flex;
  gap: 8px;
`

const LabelBox = styled.div`
  box-sizing: border-box;
  height: 48px;
  width: 180px;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  border-radius: 12px;
  padding: 10px 10px 10px 16px;
  display: flex;
  align-items: center;
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_56};
`
