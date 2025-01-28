// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

type Props = { label: string; placeholder: string; input: React.ReactNode }

const LabelAndDropdownPair = ({ label, placeholder, input }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      {input}
    </Container>
  )
}

export default LabelAndDropdownPair

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const Label = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`
