import React from 'react'
import styled from 'styled-components'

type Props = { label: string; value: string }

const LabelValuePair = ({ label, value }: Props) => {
  return (
    <PairFrame>
      <LabelFrame>
        <Label>{label}</Label>
      </LabelFrame>
      <ValueFrame>
        <Value>{value}</Value>
      </ValueFrame>
    </PairFrame>
  )
}

export default LabelValuePair

const PairFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.lg};
`
const LabelFrame = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 40px;
`

const ValueFrame = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_56};
`

const Value = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`
