import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import Box from '../../../../components/common/Box'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../../hooks/useCreateOrderContext'

import AppSelectAntDesignWithFetch from '@/common/components/appSelect/AppSelectAntDesignWithFetch'
import AppButton from '@/common/components/appButton/AppButton'

type Props = {}

const LocationBox = ({}: Props) => {
  const { values, setFieldValue, locations, destinations, handleCalculate } =
    useCreateOrderContext()
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
        <SLabel>{t('from where')}</SLabel>
        <AppSelectAntDesignWithFetch
          options={locations}
          // placeholder={t('which city/state is it coming from')}
          value={values[FIELD_NAMES.STATE_ID]}
          setValue={handleSetState}
          isLoading={false}
          onChange={() => {}}
        />
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
  flex-direction: column;
  gap: ${({ isEditing }) => (isEditing ? `8px` : `4px`)};
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
