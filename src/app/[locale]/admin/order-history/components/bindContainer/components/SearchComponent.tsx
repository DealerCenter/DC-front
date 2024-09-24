import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import closeX from '@/assets/icons/closeX.svg'
import searchIcon from '@/assets/icons/SearchIconBlack.svg'

type Props = {}

const SearchComponent = (props: Props) => {
  const [inputValue, setInputValue] = useState('')
  const t = useTranslations('')

  const handleSearch = () => {
    if (inputValue === '') return
    console.log(inputValue)
    setInputValue('')
  }

  const handleClear = () => {
    setInputValue('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Handle Enter key press here
      handleSearch()
    }
  }

  return (
    <Container onClick={() => {}}>
      <IconBox onClick={handleSearch}>
        <Image width={18} height={18} src={searchIcon} alt='search icon' />
      </IconBox>

      <StyledInput
        type='text'
        placeholder={t('vin code')}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <CloseIconBox onClick={handleClear}>
        <Image src={closeX} alt='search icon' width={13} />
      </CloseIconBox>
    </Container>
  )
}

export default SearchComponent

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const StyledInput = styled.input`
  box-sizing: border-box;

  width: 323px;
  height: 56px;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};

  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.black};
  padding-left: 45px;
  padding-right: 50px;
  background-color: ${({ theme }) => theme.colors?.white};

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

  cursor: pointer;
`

const CloseIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 10px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  background-color: ${({ theme }) => theme.colors?.main_gray_04};

  cursor: pointer;
`
