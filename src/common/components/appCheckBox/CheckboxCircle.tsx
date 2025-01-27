import React from 'react'
import styled, { css } from 'styled-components'

type Props = { isChecked: boolean }

const CheckboxCircle = ({ isChecked }: Props) => {
  return <Circle isChecked={isChecked}>{isChecked && <Dot />}</Circle>
}

export default CheckboxCircle

type CircleProps = { isChecked: boolean }

const Circle = styled.div<CircleProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 20px;

  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: ${({ theme }) => theme.colors?.button_black_10};
          border: 1px solid ${({ theme }) => theme.colors?.button_black_10};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.colors?.button_black_16};
        `}
`

const Dot = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.button_black};
`
