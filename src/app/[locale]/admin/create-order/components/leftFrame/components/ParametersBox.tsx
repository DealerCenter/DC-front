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

type Props = {}

const ParametersBox = ({}: Props) => {
  const { values, handleBlur, handleChange, errors, touched } =
    useCreateOrderContext()
  const t = useTranslations('')

  return (
    <Box>
      <Header>{t('parameters')}</Header>
      <Line />
      <LabelsFrame>
        <TextInputFieldPair
          title='insurance'
          value=''
          selectItems={[{ value: 'not working' }, { value: 'no' }]}
        />
        <TextInputFieldPair
          title='manufacturer'
          name={FIELD_NAMES.MANUFACTURER}
          value={values[FIELD_NAMES.MANUFACTURER]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.MANUFACTURER] &&
            touched[FIELD_NAMES.MANUFACTURER]
              ? errors[FIELD_NAMES.MANUFACTURER]
              : ''
          }
        />
        <TextInputFieldPair
          title='model'
          name={FIELD_NAMES.MODEL}
          value={values[FIELD_NAMES.MODEL]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.MODEL] && touched[FIELD_NAMES.MODEL]
              ? errors[FIELD_NAMES.MODEL]
              : ''
          }
        />
        <TextInputFieldPair
          title='year'
          name={FIELD_NAMES.MANUFACTURE_YEAR}
          value={values[FIELD_NAMES.MANUFACTURE_YEAR]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.MANUFACTURE_YEAR] &&
            touched[FIELD_NAMES.MANUFACTURE_YEAR]
              ? errors[FIELD_NAMES.MANUFACTURE_YEAR]
              : ''
          }
        />
        <TextInputFieldPair
          title='category'
          name={FIELD_NAMES.CAR_CATEGORY}
          value={values[FIELD_NAMES.CAR_CATEGORY]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.CAR_CATEGORY] &&
            touched[FIELD_NAMES.CAR_CATEGORY]
              ? errors[FIELD_NAMES.CAR_CATEGORY]
              : ''
          }
        />
        <TextInputFieldPair
          title='mileage'
          name={FIELD_NAMES.MILEAGE}
          value={values[FIELD_NAMES.MILEAGE]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.MILEAGE] && touched[FIELD_NAMES.MILEAGE]
              ? errors[FIELD_NAMES.MILEAGE]
              : ''
          }
        />
      </LabelsFrame>
      <AddFieldButton onClick={() => {}} />
    </Box>
  )
}

export default ParametersBox

const IconLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
const IconBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

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

const LabelPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xl};
  min-height: 36px;
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};

  width: 180px;
`

const Value = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`
