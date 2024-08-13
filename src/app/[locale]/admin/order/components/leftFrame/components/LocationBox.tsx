import React from 'react'
import Box from '../../common/Box'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import TextInputFieldPair from './TextInputFieldPair'

type Props = { isEditing: boolean }

const LocationBox = ({ isEditing }: Props) => {
  const t = useTranslations('')

  return (
    <Box>
      <Header>{t('location')}</Header>
      <Line />
      <LabelsFrame>
        <TextInputFieldPair
          title='state'
          value='California'
          isEditing={isEditing}
        />
        <TextInputFieldPair
          title='address'
          value='Beverly hills, 235'
          isEditing={isEditing}
        />
      </LabelsFrame>
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
