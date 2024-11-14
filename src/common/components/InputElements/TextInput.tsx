import React, { ChangeEventHandler, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import infoIcon from '@/assets/icons/info.svg'
import Image from 'next/image'
import ErrorMessage from '../errorMessage/ErrorMessage'

type Props = {
  type: string
  placeholder: string
  name: string
  value?: string | number | undefined | boolean
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
  isOutline?: boolean
  paddingLeft?: number
  iconPaddingLeft?: number
  hasShadow?: boolean
  isWidthFill?: boolean
  backgroundColor?: string
  isDisabled?: boolean
  onCheck?: () => void
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
  isOutline = true,
  paddingLeft,
  iconPaddingLeft,
  hasShadow,
  isWidthFill,
  backgroundColor,
  isDisabled = false,
  onCheck,
}: Props) => {
  return (
    <div>
      <Container>
        {icon ? (
          <IconBox iconPaddingLeft={iconPaddingLeft}>{icon}</IconBox>
        ) : null}
        <StyledInput
          width={width}
          height={height}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value ? String(value) : undefined}
          onChange={onChange}
          onBlur={onBlur}
          icon={icon}
          isHalfSize={isHalfSize}
          fontWeight={fontWeight}
          fontSize={fontSize}
          isOutline={isOutline}
          paddingLeft={paddingLeft}
          hasShadow={hasShadow}
          isWidthFill={isWidthFill}
          backgroundColor={backgroundColor}
          disabled={isDisabled}
          hasCheck={!!onCheck}
        />
        {/* {rightComponent ? rightComponent : null} */}
        {errorMessage && (
          <ErrorMessage text={errorMessage} top={48} left={12} />
        )}
        {onCheck && <CheckButton onClick={onCheck}>Check</CheckButton>}
      </Container>
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

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`

type InputProps = {
  icon: any
  isHalfSize: boolean
  width?: number
  height?: number
  fontWeight?: 'normal' | 'bold'
  fontSize?: number
  isOutline?: boolean
  paddingLeft?: number
  hasShadow?: boolean
  isWidthFill?: boolean
  backgroundColor?: string
  hasCheck?: boolean
}

const StyledInput = styled.input<InputProps>`
  position: relative;
  box-sizing: border-box;

  outline-offset: 1px;

  width: 350px;

  padding: 10px 10px 10px 16px;
  border-radius: ${({ theme }) => theme.radius?.lg};

  ${({ isOutline }) =>
    isOutline
      ? css`
          outline: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
          border: none;
        `
      : css`
          border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
          outline: none;
        `}

  ${({ fontSize }) =>
    fontSize
      ? css`
          font-size: ${fontSize}px;
        `
      : css`
          font-size: unset;
        `};

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 52px;
        `}

  ${({ icon, paddingLeft }) =>
    icon && !paddingLeft
      ? css`
          padding-left: 50px;
        `
      : paddingLeft &&
        css`
          padding-left: ${paddingLeft}px;
        `}

  ${({ hasCheck }) =>
    hasCheck
      ? css`
          padding-right: 72px;
        `
      : css`
          padding-right: 10px;
        `}

  ${({ hasShadow }) =>
    hasShadow
      ? css`
          box-shadow: 30px 30px 40px 0px rgba(0, 0, 0, 0.1);
        `
      : css``}


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

  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.white};
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

  ${({ isWidthFill }) =>
    isWidthFill &&
    css`
      width: 100%;
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors?.main_gray_56};
    font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 700 : 400)};
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
  color: ${({ theme }) => theme.colors?.main_gray_56};
  padding: 4px;
  font-weight: 400;
  margin: 0;
`

type IconBoxProps = { iconPaddingLeft?: number }

const IconBox = styled.div<IconBoxProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ iconPaddingLeft }) =>
    iconPaddingLeft
      ? css`
          left: ${iconPaddingLeft}px;
        `
      : css`
          left: 16px;
        `}

  z-index: 1000;
`

const CheckButton = styled.div`
  position: absolute;

  padding: 10px 8px;
  border-radius: 10px;

  right: 5px;
  font-size: 16px;
  font-weight: normal;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_16};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors?.main_gray_26};
  }

  user-select: none; /* For modern browsers */
  -webkit-user-select: none; /* For Safari */
  -moz-user-select: none; /* For Firefox */
  -ms-user-select: none; /* For older IE versions */
`
