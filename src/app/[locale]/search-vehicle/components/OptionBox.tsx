import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'

import downIcon from '@/assets/icons/searchSidePanel/arrowDownBlack.svg'
import downIconGray from '@/assets/icons/searchSidePanel/arrowDownGray.svg'

type Props = {
  children: any
  label: string
  isActive?: boolean
}

const OptionBox = ({ children, label, isActive = true }: Props) => {
  return (
    <Container>
      <LabelAndIconBox>
        <Label isActive={isActive}>{label}</Label>
      </LabelAndIconBox>
      {isActive && children}
      <Line />
    </Container>
  )
}

export default OptionBox

type IsActiveProps = { isActive: boolean }

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing?.md};

  width: 100%;
`

const LabelAndIconBox = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Label = styled.label<IsActiveProps>`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  transition: transform 0.3s ease-in-out;
  ${({ isActive }) =>
    isActive
      ? css`
          color: ${({ theme }) => theme.colors?.main_gray_100};
        `
      : css`
          color: ${({ theme }) => theme.colors?.main_gray_56};
        `}

  cursor: pointer;
  user-select: none;
`

const Line = styled.div`
  height: 1px;
  width: 100%;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
