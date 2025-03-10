import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import arrowDown from '@/assets/icons/arrowDown.svg'
import Image from 'next/image'
import AppCheckmarkCircle from '@/common/components/appCheckBox/AppCheckmarkCircle'

type Option = {
  value: string
  label: string
}

type Props = {
  options: Option[]
  onChange: (value: string) => void
  placeholder?: string
}

const AppSelect = ({ options, onChange, placeholder }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)

  const handleOptionClick = (value: string) => {
    setSelectedValue(value)
    onChange(value)
    setIsOpen(false)
  }

  return (
    <SelectContainer>
      <SelectHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedValue
          ? options.find((option) => option.value === selectedValue)?.label
          : placeholder}
        <Icon isOpen={isOpen}>
          <Image src={arrowDown} alt='arrow down' />
        </Icon>
      </SelectHeader>
      {isOpen && (
        <SelectOptions>
          {options.map((option) => (
            <>
              <OptionItem
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                <AppCheckmarkCircle isOn={option.value === selectedValue} />
                <OptionLabel>{option.label}</OptionLabel>
              </OptionItem>
            </>
          ))}
        </SelectOptions>
      )}
    </SelectContainer>
  )
}

export default AppSelect

const SelectContainer = styled.div`
  position: relative;
  width: 343px;

  cursor: pointer;
`

const SelectHeader = styled.div`
  box-sizing: border-box;
  height: 44px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors?.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius?.lg};
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  padding-left: ${({ theme }) => theme.spacing?.lg};
`

const SelectOptions = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  border-radius: ${({ theme }) => theme.radius?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  overflow-y: auto;
  z-index: 1;
  padding: 6px;
`

const OptionItem = styled.div`
  box-sizing: border-box;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.md};

  padding: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }
  border-radius: 8px;
`
const OptionLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
`

type IconProps = { isOpen: boolean }

const Icon = styled.div<IconProps>`
  position: absolute;
  top: 10px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`
