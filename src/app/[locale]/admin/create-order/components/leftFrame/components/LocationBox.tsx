import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import Box from '../../../../components/common/Box'
import TextInputFieldPair from './TextInputFieldPair'
import AddFieldButton from '../../../../components/common/AddFieldButton'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../../hooks/useCreateOrderContext'

const dummyDropdownList = [
  {
    name: 'LA',
    id: 1,
  },
  {
    name: 'NY',
    id: 2,
  },
]

type Props = {}

const LocationBox = ({}: Props) => {
  const { values, handleBlur, handleChange, errors, touched, setFieldValue } =
    useCreateOrderContext()
  const t = useTranslations('')

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
          placeholder='California'
          name={FIELD_NAMES.STATE_ID}
          value={values[FIELD_NAMES.STATE_ID]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.STATE_ID] && touched[FIELD_NAMES.STATE_ID]
              ? errors[FIELD_NAMES.STATE_ID]
              : ''
          }
          optionsListWidthID={dummyDropdownList}
          handleSetValueWithId={handleSetStateId}
        />
        <TextInputFieldPair
          title='address'
          placeholder='Beverly hills, 235'
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
