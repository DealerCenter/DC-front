import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled, { css } from 'styled-components'

import arrowDown from '@/assets/icons/arrowDown.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ErrorMessage from '../errorMessage/ErrorMessage'
import { Locations } from '@/app/[locale]/admin/create-order/image-upload/components/InputFieldAndImageUploadPair'
import { IMAGE_LOCATIONS } from '@/common/helpers/constants'

type Option = {
  value: string
}

type Props = {
  onChange: (value: string) => void
  options?: Option[]
  optionsBasic?: string[]
  optionsLocations?: IMAGE_LOCATIONS[]
  placeholder?: string
  width?: number
  placeHolderIsBold?: boolean
  placeHolderIsGray?: boolean
  errorMessage?: string
  selectedLocations: Locations
  setSelectedLocations: Dispatch<SetStateAction<Locations>>
  setCurrentLocation?: (arg: IMAGE_LOCATIONS) => void
}

const AppSelectBasic = ({
  options,
  optionsBasic,
  optionsLocations,
  onChange,
  placeholder,
  width,
  placeHolderIsBold,
  placeHolderIsGray,
  errorMessage,
  selectedLocations,
  setSelectedLocations,
  setCurrentLocation,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const t = useTranslations('')

  const handleOptionClick = (value: string) => {
    setSelectedValue(value)
    onChange(value)
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    //eslint-disable-next-line
  }, [])

  const handleOptionHeader = () => {
    if (options) {
      return t(options.find((option) => option.value === selectedValue)?.value)
    }
    if (optionsBasic) {
      return optionsBasic.find((option) => option === selectedValue)
    }
    if (optionsLocations) {
      return t(optionsLocations.find((option) => option === selectedValue))
    }
  }

  // console.log({
  //   selectedLocations,
  //   // selectedValue,
  //   // trali: selectedLocations[selectedValue],
  // })

  useEffect(() => {
    return () => {
      setSelectedLocations((prev) => ({
        ...prev,
        selectedLocations: false,
      }))
    }
  }, [])

  return (
    <SelectContainer ref={dropdownRef}>
      <SelectHeader
        onClick={() => setIsOpen(!isOpen)}
        width={width}
        placeHolderIsBold={placeHolderIsBold}
        placeHolderIsGray={placeHolderIsGray}
      >
        {selectedValue ? `${handleOptionHeader()}` : placeholder}
        <Icon isOpen={isOpen}>
          <Image src={arrowDown} alt='arrow down' />
        </Icon>
      </SelectHeader>
      {isOpen && (
        <SelectOptions>
          {options &&
            options
              .filter(
                (option) =>
                  selectedLocations[option.value as keyof Locations] === false
              )
              .map((option) => (
                <React.Fragment key={`SelectOptionOption${option.value}`}>
                  <OptionItem onClick={() => handleOptionClick(option.value)}>
                    <OptionLabel>{t(option.value)}</OptionLabel>
                  </OptionItem>
                </React.Fragment>
              ))}
          {optionsBasic &&
            optionsBasic.map((option) => (
              <React.Fragment key={`OptionsBasicOption${option}`}>
                <OptionItem
                  key={option}
                  onClick={() => handleOptionClick(option)}
                >
                  <OptionLabel>{option}</OptionLabel>
                </OptionItem>
              </React.Fragment>
            ))}
          {optionsLocations &&
            optionsLocations
              .filter(
                (option) =>
                  selectedLocations[option as keyof Locations] === false
              )
              .map((option) => (
                <React.Fragment key={`OptionsLocationsOption${option}`}>
                  <OptionItem
                    key={option}
                    onClick={() => {
                      handleOptionClick(option)
                      setCurrentLocation && setCurrentLocation(option)
                    }}
                  >
                    <OptionLabel>{t(option)}</OptionLabel>
                  </OptionItem>
                </React.Fragment>
              ))}
        </SelectOptions>
      )}
      {errorMessage && <ErrorMessage text={errorMessage} top={48} left={12} />}
    </SelectContainer>
  )
}

export default AppSelectBasic

const SelectContainer = styled.div`
  position: relative;

  cursor: pointer;
`

type SelectHeaderProps = {
  width?: number
  placeHolderIsBold?: boolean
  placeHolderIsGray?: boolean
}

const SelectHeader = styled.div<SelectHeaderProps>`
  box-sizing: border-box;
  height: 48px;
  padding: 4px 40px 4px 14px;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors?.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius?.lg};
  font-size: ${({ theme }) => theme.fontSizes?.small_13};

  ${({ placeHolderIsBold }) =>
    placeHolderIsBold
      ? css`
          color: ${({ theme }) => theme.colors?.main_gray_56};
        `
      : css`
          color: ${({ theme }) => theme.colors?.main_gray_100};
        `}

  ${({ placeHolderIsGray }) =>
    placeHolderIsGray
      ? css`
          font-weight: ${({ theme }) => theme.fontWeight?.bold};
        `
      : css`
          font-weight: ${({ theme }) => theme.fontWeight?.normal};
        `}

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 220px;
        `}

  @media ${({ theme }) => theme.media?.sm} {
    ${({ width }) =>
      width
        ? css`
            width: ${width}px;
          `
        : css`
            width: 143px;
          `}
  }
`

const SelectOptions = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  border-radius: ${({ theme }) => theme.radius?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  overflow-y: auto;
  z-index: 2;
  padding: 6px;

  box-shadow: 0 8px 22px 0 ${({ theme }) => theme.colors?.main_gray_10};
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
