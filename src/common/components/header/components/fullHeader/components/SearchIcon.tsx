import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import search from '@/assets/icons/search.svg'
import { useTranslations } from 'next-intl'

import closeX from '@/assets/icons/closeXWhite.svg'

type Props = {
  isActive: boolean
  setIsActive: (arg1: boolean) => void
}

const SearchIcon = ({ isActive, setIsActive }: Props) => {
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
      console.log('got it')
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
    <Container isActive={isActive} onClick={() => setIsActive(true)}>
      <IconBox onClick={handleSubmit}>
        <Image width={20} height={20} src={search} alt='search icon' />
      </IconBox>
      {isActive && (
        <>
          <StyledInput
            type='text'
            isActive={isActive}
            placeholder={t('vin code')}
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

export default SearchIcon

type IsActiveProp = { isActive: boolean }

const Container = styled.div<IsActiveProp>`
  box-sizing: border-box;

  ${({ isActive }) =>
    isActive
      ? css`
          width: unset;
          border: unset;
        `
      : css`
          width: 56px;
          border: 2px solid ${({ theme }) => theme.colors?.white_24};
        `}

  height: 44px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer;
`
const StyledInput = styled.input<IsActiveProp>`
  box-sizing: border-box;

  ${({ isActive }) =>
    isActive
      ? css`
          width: 200px;
          border: 2px solid ${({ theme }) => theme.colors?.white_24};
        `
      : css`
          width: unset;
          border: unset;
        `}

  height: 44px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  padding-left: 45px;
  padding-right: 40px;
  background-color: ${({ theme }) => theme.colors?.button_black};

  &:focus {
    outline: none;
  }
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 17px;
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
  background-color: ${({ theme }) => theme.colors?.white_10};
`
