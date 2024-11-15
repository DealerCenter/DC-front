import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import { carCategories } from '@/common/helpers/constants'
import AddFieldButton from '../../../../components/common/AddFieldButton'
import Box from '../../../../components/common/Box'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../../hooks/useCreateOrderContext'
import TextInputFieldPair from './TextInputFieldPair'

type Props = {}

const ParametersBox = ({}: Props) => {
  const { values, handleBlur, handleChange, errors, touched, setFieldValue } =
    useCreateOrderContext()
  const t = useTranslations('')

  const handleChooseIsInsured = (arg: boolean) => {
    setFieldValue(FIELD_NAMES.IS_INSURED, arg)
  }

  const handleSetCarCategory = (value: string) => {
    setFieldValue(FIELD_NAMES.CAR_CATEGORY, value)
  }

  return (
    <Box>
      <Header>{t('parameters')}</Header>
      <Line />
      <LabelsFrame>
        <TextInputFieldPair
          title='insurance'
          value=''
          onYesOrNoChange={handleChooseIsInsured}
          booleanValue={
            values[FIELD_NAMES.IS_INSURED] && values[FIELD_NAMES.IS_INSURED]
          }
          errorMessage={
            errors[FIELD_NAMES.IS_INSURED] && touched[FIELD_NAMES.IS_INSURED]
              ? errors[FIELD_NAMES.IS_INSURED]
              : ''
          }
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
          selectOptionsBasic={carCategories}
          handleSetValueBasic={handleSetCarCategory}
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
