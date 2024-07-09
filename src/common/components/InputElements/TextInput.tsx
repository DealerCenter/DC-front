import React, { ChangeEventHandler } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  type: string
  placeholder: string
  name: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur: ChangeEventHandler<HTMLInputElement>
  withIcon?: boolean
}

const TextInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  withIcon = false,
}: Props) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      withIcon={withIcon}
    />
  )
}

export default TextInput

type InputProps = {
  withIcon: boolean
}

const StyledInput = styled.input<InputProps>`
  position: relative;
  box-sizing: border-box;
  background-color: white;
  border: none;
  outline: 1px solid rgba(32, 32, 32, 0.04);
  outline-offset: 1px;
  width: 350px;
  height: 52px;
  padding: 10px 10px 10px 16px;
  border-radius: 12px;
  font-size: 16px;
  ${({ withIcon }) =>
    withIcon &&
    css`
      padding-left: 50px;
    `}

  &::placeholder {
    color: rgba(18, 18, 20, 0.56);
  }

  &:focus {
    border: none;
    outline: 4px solid rgba(216, 226, 244, 1);
  }
`
