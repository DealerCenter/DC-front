import React, { ChangeEventHandler } from 'react'
import styled, { css } from 'styled-components'
import infoIcon from '@/assets/icons/info.svg'
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
  isHalfSize?: boolean | undefined
  errorMessage?: string
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
  isHalfSize = false,
  errorMessage,
}: Props) => {
  return (
    <Container>
      {icon ? <IconBox>{icon}</IconBox> : null}
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        icon={icon}
        isHalfSize={isHalfSize}
      />
      {optionalInfo && (
        <TextBox>
          <Image src={infoIcon} alt='info icon' width={16} height={16} />
          <OptionalText>{optionalInfo}</OptionalText>
        </TextBox>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  )
}

export default TextInput

const Container = styled.div`
  position: relative;
`

type InputProps = {
  icon: any
  isHalfSize: boolean
}

const StyledInput = styled.input<InputProps>`
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.white};
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors?.mist_gray};
  outline-offset: 1px;
  width: 350px;
  height: 52px;
  padding: 10px 10px 10px 16px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  font-size: ${({ theme }) => theme.fontSizes?.medium};

  ${({ isHalfSize }) =>
    isHalfSize
      ? css`
          width: 167.5px;
        `
      : css`
          width: 350px;
        `}

  ${({ icon }) =>
    icon &&
    css`
      padding-left: 50px;
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors?.disabled_gray};
  }

  &:focus {
    border: none;
    outline: 4px solid ${({ theme }) => theme.colors?.sky_blue};
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

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors?.red};
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes?.extraSmall};
  top: 48px;
  left: 12px;
`

const OptionalText = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors?.disabled_gray};
  padding: 4px;
  font-weight: 400;
  margin: 0;
`

const IconBox = styled.div`
  position: absolute;
  left: 16px;
  top: 17px;
  z-index: 1000;
`
