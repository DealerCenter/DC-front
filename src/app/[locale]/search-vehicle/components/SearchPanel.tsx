import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'

import BasicButton from '@/common/components/appButton/BasicButton'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import OptionBox from './OptionBox'

import filterIconWithCancel from '@/assets/icons/filterIcon2WithCancel.svg'
import searchIcon from '@/assets/icons/searchSidePanel/searchIconWhite.svg'
import LoaderForButton from '@/common/components/loader/LoaderForButton'
import { useMediaQuery } from 'react-responsive'
import theme from '../../theme'
import ChooseAuctionBox from './ChooseAuctionBox'
import { useSearchParams } from 'next/navigation'
import { FIELD_NAMES, useSearchVehicle } from '../hooks/useSearchVehicle'
import AppDropdown from '@/common/components/appDropdown/AppDropdown'
import DropdownMakeSearch from './DropdownMakeSearch'
import DropdownModelSearch from './DropdownModelSearch'

const dummyBrands = ['Acura', 'Alfa Romeo', 'Audi', 'Aston Martin', 'Mercedes']

const BUTTON_WIDTH = 236
const BUTTON_WIDTH_MOBILE = 343

type Props = {}

const SearchPanel = ({}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const [isFilterSelected, setIsFilterSelected] = useState(false)
  const t = useTranslations('')

  const { makeId } = useSearchVehicle()

  const handleSearchClick = () => {
    setIsFilterSelected((is) => !is)
  }

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    handleSubmit,
    isLoading,
    setFieldValue,
  } = useSearchVehicle()

  return (
    <Container>
      <OptionBox label={t('auction')}>
        <ChecklistBox>
          <ChooseAuctionBox />
        </ChecklistBox>
      </OptionBox>
      {/* <OptionBox label={'Buy now'}>
        <FromUptoBox type='text' />
      </OptionBox> */}
      <OptionBox label={t('brand')}>
        <DropdownMakeSearch />
      </OptionBox>
      <OptionBox label={t('model')} isActive={!!makeId}>
        <DropdownModelSearch />
      </OptionBox>
      <OptionBox label={t('year')}>
        <FromUpToBox>
          <StyledInput
            name={FIELD_NAMES.YEAR_FROM}
            value={values[FIELD_NAMES.YEAR_FROM]}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            placeholder={t('from')}
          />
          <StyledInput
            name={FIELD_NAMES.YEAR_TO}
            value={values[FIELD_NAMES.YEAR_TO]}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            placeholder={t('up to')}
          />
        </FromUpToBox>
      </OptionBox>
      <OptionBox label={t('mileage')}>
        <FromUpToBox>
          <StyledInput
            name={FIELD_NAMES.ODOMETER_FROM}
            value={values[FIELD_NAMES.ODOMETER_FROM]}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            placeholder={t('from')}
          />
          <StyledInput
            name={FIELD_NAMES.ODOMETER_TO}
            value={values[FIELD_NAMES.ODOMETER_TO]}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            placeholder={t('up to')}
          />
        </FromUpToBox>
      </OptionBox>

      <ButtonsFrame>
        <BasicButton
          width={isMobile ? BUTTON_WIDTH_MOBILE : BUTTON_WIDTH}
          onClick={handleSubmit}
        >
          {isLoading ? (
            <LoaderForButton />
          ) : (
            <>
              <ButtonIcon>
                <Image src={searchIcon} alt='edit icon' width={18} />
              </ButtonIcon>
              <ButtonLabel>{t('search')}</ButtonLabel>
            </>
          )}
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

const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.white};

  width: 114px;
  height: 40px;

  border-radius: ${({ theme }) => theme.radius?.lg};

  padding: 4px 4px 4px 10px;
  gap: 6px;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
`

const FromUpToBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
`
