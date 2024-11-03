import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import AddFieldButton from '../../../../components/common/AddFieldButton'
import Box from '../../../../components/common/Box'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../../hooks/useCreateOrderContext'
import TextInputFieldPair from './TextInputFieldPair'
import { useEffect, useState } from 'react'
import { getStates } from '@/api/apiCalls'

type Props = {}

const LocationBox = ({}: Props) => {
  const { values, handleBlur, handleChange, errors, touched, setFieldValue } =
    useCreateOrderContext()
  const t = useTranslations('')
  const [countryStates, setCountryStates] = useState([])

  useEffect(() => {
    const fetchStates = async () => {
      const res = await getStates(true)
      const formatted = res?.map((state) => ({
        id: state.id,
        label: state.name,
      }))
      // @ts-ignore
      setCountryStates(formatted)
    }
    fetchStates()
  }, [])

  const handleSetStateId = (id: number) => {
    setFieldValue(FIELD_NAMES.STATE_ID, id)
  }

  return (
    <Box>
      <Header>{t('location')}</Header>
      <Line />
      <LabelsFrame>
        <TextInputFieldPair
          title='state'
          name={FIELD_NAMES.STATE_ID}
          value={values[FIELD_NAMES.STATE_ID]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.STATE_ID] && touched[FIELD_NAMES.STATE_ID]
              ? errors[FIELD_NAMES.STATE_ID]
              : ''
          }
          optionsListWidthID={countryStates}
          handleSetValueWithId={handleSetStateId}
        />
        <TextInputFieldPair
          title='address'
          placeholder={t('specify an address')}
          name={FIELD_NAMES.EXACT_ADDRESS}
          value={values[FIELD_NAMES.EXACT_ADDRESS]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.EXACT_ADDRESS] &&
            touched[FIELD_NAMES.EXACT_ADDRESS]
              ? errors[FIELD_NAMES.EXACT_ADDRESS]
              : ''
          }
        />
      </LabelsFrame>
      <AddFieldButton onClick={() => {}} />
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
