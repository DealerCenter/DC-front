import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'

import downIcon from '@/assets/icons/searchSidePanel/arrowDownBlack.svg'
import downIconGray from '@/assets/icons/searchSidePanel/arrowDownGray.svg'

type Props = { children: ReactNode; label: string; startingState?: boolean }

const OptionBox = ({ children, label, startingState = true }: Props) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(startingState)

  return (
    <Container>
      <LabelAndIconBox>
        <Label
          isOpen={isOpenDropdown}
          onClick={() => setIsOpenDropdown((is) => !is)}
        >
          {label}
        </Label>
        <Icon onClick={() => setIsOpenDropdown((is) => !is)}>
          <Image
            src={isOpenDropdown ? downIcon : downIconGray}
            alt='down arrow icon'
          />
        </Icon>
      </LabelAndIconBox>
      {isOpenDropdown && children}
      <Line />
    </Container>
  )
}

export default OptionBox

type IsOpenProps = { isOpen: boolean }

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

const Label = styled.label<IsOpenProps>`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen
      ? css`
          color: ${({ theme }) => theme.colors?.main_gray_100};
        `
      : css`
          color: ${({ theme }) => theme.colors?.main_gray_56};
        `}

  cursor: pointer;
  user-select: none;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;
`

const Line = styled.div`
  height: 1px;
  width: 100%;

  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
