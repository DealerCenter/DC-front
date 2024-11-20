import React from 'react'
import styled from 'styled-components'

type Props = { text: string }

const ToolTipTextBox = ({ text }: Props) => {
  return <Label>{text}</Label>
}

export default ToolTipTextBox

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  font-size: ${({ theme }) => theme.fontSizes?.small};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  /* color: ${({ theme }) => theme.colors?.main_gray_100}; */

  color: rgba(52, 64, 84, 1);

  background-color: red;

  cursor: default;
`
