import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import Box from '../../../../components/common/Box'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../../hooks/useCreateOrderContext'

import AppSelectAntDesignWithFetch from '@/common/components/appSelect/AppSelectAntDesignWithFetch'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import { useState } from 'react'

type Props = {}

const LocationBox = ({}: Props) => {
  const { values, setFieldValue, locations, destinations, handleCalculate } =
    useCreateOrderContext()
  const [isAuctionCar, setIsAuctionCar] = useState(true)
  const t = useTranslations('')

  const handleSetState = (value: string) => {
    setFieldValue(FIELD_NAMES.STATE_ID, value)
  }

  const handleSetDestination = (value: string) => {
    setFieldValue(FIELD_NAMES.EXACT_ADDRESS, value)
  }

  return (
    <Box>
      <Header>{t('location')}</Header>
      <Line />

      <LabelsPair>
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          <SLabel>{t('from where')}</SLabel>
          <LabelsFrame onClick={() => setIsAuctionCar((prev) => !prev)}>
            <CheckBox isChecked={isAuctionCar} />
            COPART / IAAI
          </LabelsFrame>
        </span>

        {isAuctionCar ? (
          <AppSelectAntDesignWithFetch
            options={locations}
            // placeholder={t('which city/state is it coming from')}
            value={values[FIELD_NAMES.STATE_ID]}
            setValue={handleSetState}
            isLoading={false}
            onChange={() => {}}
          />
        ) : (
          <TextInput
            name='from_where'
            type='text'
            value={values[FIELD_NAMES.STATE_ID]}
            onChange={(e) => handleSetState(e.target.value)}
            // placeholder={t('which city/state is it coming from')}
            placeholder=''
            onBlur={() => {}}
            isWidthFill
            height={44}
          />
        )}
      </LabelsPair>

      <LabelsPair>
        <SLabel>{t('to where')}</SLabel>
        <AppSelectAntDesignWithFetch
          options={destinations}
          // placeholder={t('what city/port does it arrive at')}
          value={values[FIELD_NAMES.EXACT_ADDRESS]}
          setValue={handleSetDestination}
          isLoading={false}
          // onChange={(value) => setSelectedDestination(value.toString())}
          onChange={() => {}}
        />
      </LabelsPair>

      <AppButton
        text={t('calculate transport price')}
        onClick={handleCalculate}
        type='outlined'
        // @ts-ignore
        width={'100%'}
        height='medium'
      />
    </Box>
  )
}

export default LocationBox

const Header = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

type LabelsFrameProps = { isEditing?: boolean }

const LabelsFrame = styled.div<LabelsFrameProps>`
  display: flex;
  align-items: center;
  gap: ${({ isEditing }) => (isEditing ? `12px` : `8px`)};
`

const LabelsPair = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  flex: 1;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing?.xsm};
  }
`

const SLabel = styled.label`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`
