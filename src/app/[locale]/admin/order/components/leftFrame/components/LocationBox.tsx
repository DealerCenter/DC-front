import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import Box from '../../common/Box'
import TextInputFieldPair from './TextInputFieldPair'
import AddFileButton from '../../common/AddFileButton'

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
      {isEditing && <AddFileButton onClick={() => {}} />}
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
