import Image from 'next/image'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import checkWhite from '@/assets/icons/checkBoxIcons/checkWhite.svg'
import checkGray from '@/assets/icons/checkBoxIcons/checkGray.svg'
import checkDarkGray from '@/assets/icons/checkBoxIcons/checkDarkGray.svg'
import deleteWhite from '@/assets/icons/checkBoxIcons/deleteWhite.svg'
import deleteGray from '@/assets/icons/checkBoxIcons/deleteGray.svg'
import deleteDarkGray from '@/assets/icons/checkBoxIcons/deleteDarkGray.svg'

type Props = {
  isChecked: boolean
  disabled?: boolean
  type?: 'check' | 'delete'
  shape?: 'circle' | 'square'
}

const CheckBox = ({
  isChecked,
  disabled = false,
  type = 'check',
  shape = 'square',
}: Props) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Box
      shape={shape}
      isChecked={!disabled && isChecked}
      disabled={disabled}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {isChecked && type === 'check' && (
        <Image
          src={isActive ? checkGray : checkWhite}
          alt='check icon'
          width={12}
        />
      )}
      {isChecked && type === 'delete' && (
        <Image
          src={isActive ? deleteGray : deleteWhite}
          alt='check icon'
          width={12}
        />
      )}
    </Box>
  )
}

export default CheckBox

type BoxProps = {
  isChecked: boolean
  disabled: boolean
  shape?: 'circle' | 'square'
}

const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_16};
  ${({ shape }) =>
    shape === 'square'
      ? css`
          border-radius: 6px;
        `
      : shape === 'circle' &&
        css`
          border-radius: 20px;
        `}

  ${({ isChecked, disabled }) =>
    disabled && isChecked
      ? css`
          background-color: ${({ theme }) => theme.colors?.main_gray_16};
          border: unset;
        `
      : !disabled && isChecked
        ? css`
            background-color: ${({ theme }) => theme.colors?.main_gray_100};
            &:hover {
              background-color: ${({ theme }) => theme.colors?.main_gray_90};
            }
            &:active {
              background-color: ${({ theme }) => theme.colors?.main_gray_68};
            }
          `
        : !disabled && !isChecked
          ? css`
              background-color: unset;
              &:hover {
                background-color: ${({ theme }) => theme.colors?.main_gray_04};
              }
              &:active {
                background-color: ${({ theme }) => theme.colors?.main_gray_10};
              }
            `
          : disabled &&
            !isChecked &&
            css`
              background-color: unset;
              border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};
            `}

  cursor: pointer;
`
