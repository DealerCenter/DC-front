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
  width?: number
  height?: number
  fontWeight?: 'normal' | 'bold'
  fontSize?: number
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
  width,
  height,
  fontWeight = 'normal',
  fontSize = 16,
}: Props) => {
  return (
    <Container>
      {icon ? <IconBox>{icon}</IconBox> : null}
      <StyledInput
        width={width}
        height={height}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        icon={icon}
        isHalfSize={isHalfSize}
        fontWeight={fontWeight}
        fontSize={fontSize}
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
  width?: number
  height?: number
  fontWeight?: 'normal' | 'bold'
  fontSize?: number
}

const StyledInput = styled.input<InputProps>`
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.white};
  border: none;
  outline: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  outline-offset: 1px;
  width: 350px;

  padding: 10px 10px 10px 16px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  font-size: ${({ fontSize }) => `${fontSize}px`};

  ${({ isHalfSize, width }) =>
    isHalfSize
      ? css`
          width: 213px;
        `
      : width
        ? css`
            width: ${width}px;
          `
        : css`
            width: 350px;
          `}

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 52px;
        `}       

  ${({ icon }) =>
    icon &&
    css`
      padding-left: 50px;
    `}

    @media ${({ theme }) => theme.media?.sm} {
    ${({ isHalfSize, width }) =>
      isHalfSize
        ? css`
            width: 167.5px;
          `
        : width
          ? css`
              width: ${width}px;
            `
          : css`
              width: 350px;
            `}
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors?.main_gray_56};
    font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 700 : 400)};
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
  color: ${({ theme }) => theme.colors?.main_gray_56};
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
