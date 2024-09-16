import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import search from '@/assets/icons/searchForButton.svg'

import { useTranslations } from 'next-intl'

import closeX from '@/assets/icons/closeX.svg'

type Props = {
  isActive: boolean
  setIsActive: (arg1: boolean) => void
  text?: string
  placeholder?: string
}

const SearchButton = ({ isActive, setIsActive, text, placeholder }: Props) => {
  const [inputValue, setInputValue] = useState('')
  const t = useTranslations('')
  const inputRef = useRef<HTMLInputElement>(null)
  const closeIconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [isActive])

  const handleClose = (event: MouseEvent) => {
    if (
      closeIconRef.current &&
      closeIconRef.current.contains(event.target as Node)
    ) {
      setIsActive(false)
      setInputValue('')
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClose)
    return () => {
      document.removeEventListener('mousedown', handleClose)
    }
    //eslint-disable-next-line
  }, [])

  const handleSubmit = () => {
    console.log(inputValue)

    setInputValue('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Handle Enter key press here
      handleSubmit()
    }
  }

  return (
    <Container
      isActive={isActive}
      text={text}
      onClick={() => setIsActive(true)}
    >
      <IconBox onClick={handleSubmit}>
        <Image src={search} alt='search icon' />
      </IconBox>
      {!isActive && text && <Label>{text}</Label>}
      {isActive && (
        <>
          <StyledInput
            type='text'
            isActive={isActive}
            placeholder={placeholder ? placeholder : ''}
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <CloseIconBox ref={closeIconRef}>
            <Image src={closeX} alt='search icon' width={13} />
          </CloseIconBox>
        </>
      )}
    </Container>
  )
}

export default SearchButton

type IsActiveProp = { isActive: boolean; text?: string }

const Container = styled.div<IsActiveProp>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 44px;
  border-radius: 12px;

  gap: 6px;

  cursor: pointer;

  ${({ text }) =>
    text
      ? css`
          padding: 0 20px 0 14px;
        `
      : css`
          padding: 0 15px 0 15px;
        `}

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};

  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  user-select: none;
  cursor: pointer;
`

const StyledInput = styled.input<IsActiveProp>`
  box-sizing: border-box;

  ${({ isActive }) =>
    isActive
      ? css`
          width: 200px;
          border: unset;
        `
      : css`
          width: unset;
          border: unset;
        `}

  height: 42px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.black};

  padding-right: 25px;
  background-color: ${({ theme }) => theme.colors?.white};

  &:focus {
    outline: none;
  }
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CloseIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 3px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`
