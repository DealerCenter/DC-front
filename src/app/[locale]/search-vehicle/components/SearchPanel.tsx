import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import OptionBox from './OptionBox'
import CheckItemBox from './CheckItemBox'
import FromUptoBox from './FromUptoBox'
import BasicButton from '@/common/components/appButton/BasicButton'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'

import searchIcon from '@/assets/icons/searchSidePanel/searchIconWhite.svg'
import filterIconWithCancel from '@/assets/icons/filterIcon2WithCancel.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '../../theme'

const dummyBrands = ['Acura', 'Alfa Romeo', 'Audi', 'Aston Martin', 'Mercedes']

const BUTTON_WIDTH = 236
const BUTTON_WIDTH_MOBILE = 343

type Props = {}

const SearchPanel = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const [isFilterSelected, setIsFilterSelected] = useState(false)
  const t = useTranslations('')

  return (
    <Container>
      <OptionBox label={t('auction')}>
        <ChecklistBox>
          <CheckItemBox label='IAAI' />
          <CheckItemBox label='Copart' />
        </ChecklistBox>
      </OptionBox>
      <OptionBox label={'Buy now'}>
        <FromUptoBox type='text' />
      </OptionBox>
      <OptionBox label={t('brand')}>
        <ChecklistBox>
          {dummyBrands.map((brand, i) => (
            <CheckItemBox label={brand} key={`brandName23ijf8${i}`} />
          ))}
        </ChecklistBox>
      </OptionBox>
      <OptionBox label={t('year')}>
        <FromUptoBox type='text' />
      </OptionBox>
      <OptionBox label={t('transmission')}>
        <ChecklistBox>
          <CheckItemBox label={t('automatic')} />
          <CheckItemBox label={t('manual')} />
        </ChecklistBox>
      </OptionBox>
      <OptionBox label={t('mileage')}>
        <FromUptoBox type='text' />
      </OptionBox>
      <OptionBox label={t('damage')} startingState={false}>
        children goes here
      </OptionBox>
      <OptionBox label={t('auction location')} startingState={false}>
        children goes here
      </OptionBox>
      <ButtonsFrame>
        <BasicButton
          width={isMobile ? BUTTON_WIDTH_MOBILE : BUTTON_WIDTH}
          onClick={() => setIsFilterSelected((is) => !is)}
        >
          <ButtonIcon>
            <Image src={searchIcon} alt='edit icon' width={18} />
          </ButtonIcon>
          <ButtonLabel>{t('search')}</ButtonLabel>
        </BasicButton>
        {isFilterSelected && (
          <SecondaryButton
            text=''
            onClick={() => setIsFilterSelected(false)}
            icon={filterIconWithCancel}
            withoutLabel={true}
          />
        )}
      </ButtonsFrame>
    </Container>
  )
}

export default SearchPanel

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  width: 300px;
  padding: ${({ theme }) => theme.spacing?.xl};
  gap: ${({ theme }) => theme.spacing?.md};
  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors?.white};

  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
  }
`

const ChecklistBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing?.xsm};
`

const ButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.xsm};
  }
`

const ButtonIcon = styled.label`
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  cursor: pointer;
  user-select: none;
`
