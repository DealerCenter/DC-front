import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import BoxWithHeader from '../BoxWithHeader'

type Props = {}

const LocationBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <BoxWithHeader headerText='location'>
      <LabelsFrame>
        <LabelPair>
          <Label>{t('state')}</Label>
          <Value>California</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('address')}</Label>
          <Value>Beverly hills, 235</Value>
        </LabelPair>
      </LabelsFrame>
    </BoxWithHeader>
  )
}

export default LocationBox

const LabelsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
