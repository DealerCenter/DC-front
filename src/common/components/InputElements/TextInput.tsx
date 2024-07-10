import React, { ChangeEventHandler } from 'react'
import styled, { css } from 'styled-components'
import infoIcon from '@/app/assets/icons/info.svg'
import Image from 'next/image'

type Props = {
  type: string
  placeholder: string
  name: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur: ChangeEventHandler<HTMLInputElement>
  icon?: any
  optionalInfo?: string | null
}

const TextInput = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  icon,
  optionalInfo = null,
}: Props) => {
  return (
    <div>
      {icon ? icon : null}
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        icon={icon}
      />
      {optionalInfo && (
        <TextBox>
          <Image src={infoIcon} alt='info icon' width={16} height={16} />
          <OptionalText>{optionalInfo}</OptionalText>
        </TextBox>
      )}
    </div>
  )
}

export default TextInput

type InputProps = {
  icon: any
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
  ${({ icon }) =>
    icon &&
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

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5px;
  margin-top: 8px;
  margin-bottom: 0;
  height: 20px;
`

const OptionalText = styled.p`
  font-size: 11px;
  color: rgba(32, 32, 32, 0.56);
  padding: 4px;
  font-weight: 400;
  margin: 0;
`
