import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import checkboxFilled from '@/assets/icons/checkboxFilled.svg'
import checkboxRed from '@/assets/icons/checkboxRed.svg'

type Props = { text: string; isChecked: boolean }

function ValidateTextBox({ text, isChecked }: Props) {
  return (
    <TextBox>
      <Image
        src={isChecked ? checkboxFilled : checkboxRed}
        alt='checkbox filled'
        width={16}
        height={16}
      />
      <Text isChecked={isChecked}>{text}</Text>
    </TextBox>
  )
}

export default ValidateTextBox

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5px;
  margin-top: 8px;
  margin-bottom: 0;
  height: 20px;
`

type TextProps = {
  isChecked?: boolean
}

const Text = styled.p<TextProps>`
  ${({ isChecked, theme }) =>
    isChecked
      ? css`
          color: ${theme.colors?.active_black};
        `
      : css`
          color: ${theme.colors?.red};
        `}

  font-size: 11px;
  padding: 4px;
  font-weight: 400;
  margin: 0;
`
