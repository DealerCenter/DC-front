import React from 'react'
import styled from 'styled-components'

type Props = { label: string }

const TextInputField = ({ label }: Props) => {
  return (
    <InputBox>
      <InputLabel>{label}</InputLabel>
      <InputField type='text' placeholder='Something something'></InputField>
    </InputBox>
  )
}

export default TextInputField

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  padding: 0;
`
const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`

const InputField = styled.input`
  box-sizing: border-box;
  max-width: 464px;
  height: 51px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors?.mist_gray};
  padding: 10px 10px 10px 18px;
`
