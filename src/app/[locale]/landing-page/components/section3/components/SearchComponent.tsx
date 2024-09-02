import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

import theme from '@/app/[locale]/theme'
import TextInput from '@/common/components/inputElements/TextInput'

import searchIcon from '@/assets/icons/searchIconGray.svg'

type Props = { placeholder: string }

const SearchComponent = ({ placeholder }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  return (
    <Container>
      <TextInput
        type='text'
        placeholder={placeholder}
        name='search field'
        value=''
        onChange={() => {}}
        onBlur={() => {}}
        icon={<Image src={searchIcon} alt='search icon' />}
        height={isTablet ? 70 : 50}
        width={isMobile ? 343 : isTablet ? 311 : 431}
        paddingLeft={isMobile ? 34 : 50}
        iconPaddingLeft={isMobile ? 10 : 16}
      />
      {!isMobile && (
        <SearchButton>
          <ButtonLabel>{t('check')}</ButtonLabel>
        </SearchButton>
      )}
    </Container>
  )
}

export default SearchComponent

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const SearchButton = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;

  height: 56px;

  background-color: ${({ theme }) => theme.colors?.main_gray_100};
  padding: ${({ theme }) => theme.spacing?.md};
  border-radius: ${({ theme }) => theme.radius?.lg};
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};

  cursor: pointer;
`
