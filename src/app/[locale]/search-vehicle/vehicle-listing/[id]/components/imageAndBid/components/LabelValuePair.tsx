import React from 'react'
import styled from 'styled-components'

type Props = { label: string; value: string }

const LabelValuePair = ({ label, value }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  )
}

export default LabelValuePair

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  height: 36px;
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};

  width: 140px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 110px;
  }

  cursor: default;
`

const Value = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`
