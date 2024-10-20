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
  const t = useTranslations('')

  return (
    <Container>
      <TextInput
        type='text'
        placeholder={placeholder}
        name='search field'
        value='search'
        onChange={() => {}}
        onBlur={() => {}}
        icon={<Image src={searchIcon} alt='search icon' />}
        height={isMobile ? 40 : 50}
        width={isMobile ? 343 : 672}
        paddingLeft={isMobile ? 34 : 50}
        iconPaddingLeft={isMobile ? 10 : 16}
      />
      {!isMobile && <SearchButton>{t('check')}</SearchButton>}
    </Container>
  )
}

export default SearchComponent

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const SearchButton = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors?.main_gray_100};
  color: ${({ theme }) => theme.colors?.white};
  padding: ${({ theme }) => theme.spacing?.md};
  border-radius: ${({ theme }) => theme.radius?.lg};
`
