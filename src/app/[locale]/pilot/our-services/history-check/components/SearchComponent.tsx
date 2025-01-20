import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

import theme from '@/app/[locale]/pilot/theme'
import TextInput from '@/common/components/InputElements/TextInput'

import searchIcon from '@/assets/icons/searchIconGray.svg'

const INPUT_WIDTH_MOBILE = 343
const INPUT_WIDTH_TABLET = 311
const INPUT_WIDTH_DESKTOP = 431

const INPUT_HEIGHT_TABLET = 70
const INPUT_HEIGHT = 50

const INPUT_PADDING_LEFT_MOBILE = 34
const INPUT_PADDING_LEFT = 50

const ICON_PADDING_LEFT_MOBILE = 10
const ICON_PADDING_LEFT = 16

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
        height={isTablet ? INPUT_HEIGHT_TABLET : INPUT_HEIGHT}
        width={
          isMobile
            ? INPUT_WIDTH_MOBILE
            : isTablet
            ? INPUT_WIDTH_TABLET
            : INPUT_WIDTH_DESKTOP
        }
        paddingLeft={isMobile ? INPUT_PADDING_LEFT_MOBILE : INPUT_PADDING_LEFT}
        iconPaddingLeft={
          isMobile ? ICON_PADDING_LEFT_MOBILE : ICON_PADDING_LEFT
        }
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
