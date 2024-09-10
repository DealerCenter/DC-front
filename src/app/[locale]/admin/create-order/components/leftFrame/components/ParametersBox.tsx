import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import Box from '../../../../components/common/Box'
import TextInputFieldPair from './TextInputFieldPair'
import AddFieldButton from '../../../../components/common/AddFieldButton'

type Props = {}

const ParametersBox = ({}: Props) => {
  const t = useTranslations('')

  return (
    <Box>
      <Header>{t('parameters')}</Header>
      <Line />
      <LabelsFrame>
        <TextInputFieldPair
          title='insurance'
          value=''
          selectItems={[{ value: 'yes' }, { value: 'no' }]}
        />
        <TextInputFieldPair title='manufacturer' value='dummy text' />
        <TextInputFieldPair title='model' value='dummy text' />
        <TextInputFieldPair title='year' value='dummy text' />
        <TextInputFieldPair title='category' value='dummy text' />
        <TextInputFieldPair title='mileage' value='dummy text' />
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
