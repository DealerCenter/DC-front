import DropdownInputField from '@/common/components/InputElements/DropdownInputField'
import React from 'react'
import styled from 'styled-components'

type Props = { label: string; placeholder: string }

const LabelAndDropdownPair = ({ label, placeholder }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <DropdownInputField placeholder={placeholder} />
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
