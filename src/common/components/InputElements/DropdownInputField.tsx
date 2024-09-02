import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

import arrowDown from '@/assets/icons/arrowDown.svg'

type Props = {
  placeholder: string
  width?: number
  height?: number
  backgroundColor?: string
  fontSize?: number
}

const DropdownInputField = ({
  placeholder,
  width,
  height,
  backgroundColor,
  fontSize,
}: Props) => {
  return (
    <Container width={width} height={height} backgroundColor={backgroundColor}>
      <Label fontSize={fontSize}>{placeholder}</Label>
      <Icon>
        <Image src={arrowDown} alt='arrow down icon' />
      </Icon>
    </Container>
  )
}

export default DropdownInputField

type ContainerProps = {
  width?: number
  height?: number
  backgroundColor?: string
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 275px;
          @media ${({ theme }) => theme.media?.md} {
            width: 215px;
          }
          @media ${({ theme }) => theme.media?.sm} {
            width: 343px;
          }
        `}

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 56px;
          @media ${({ theme }) => theme.media?.sm} {
            height: 48px;
          }
        `}

  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : css`
          background-color: unset;
        `}

  border: 2px solid ${({ theme }) => theme.colors?.main_gray_10};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding-left: ${({ theme }) => theme.spacing?.md};
  padding-right: ${({ theme }) => theme.spacing?.md};
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

type LabelProps = { fontSize?: number }

const Label = styled.div<LabelProps>`
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  ${({ fontSize }) =>
    fontSize
      ? css`
          font-size: ${fontSize}px;
        `
      : css`
          font-size: ${({ theme }) => theme.fontSizes?.medium};
        `}
`
