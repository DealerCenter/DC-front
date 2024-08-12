import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import BoxWithHeader from '../BoxWithHeader'

import checkedGreen from '@/assets/icons/checkedGreen.svg'

type Props = {}

const ParametersBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <BoxWithHeader headerText='parameters'>
      <LabelsFrame>
        <LabelPair>
          <Label>{t('insurance')}</Label>
          <IconLabelBox>
            <Value>{t('yes')}</Value>
            <IconBox>
              <Image src={checkedGreen} alt='checked icon' />
            </IconBox>
          </IconLabelBox>
        </LabelPair>
        <LabelPair>
          <Label>{t('manufacturer')}</Label>
          <Value>dummy text</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('model')}</Label>
          <Value>dummy text</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('year')}</Label>
          <Value>dummy text</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('category')}</Label>
          <Value>dummy text</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('mileage')}</Label>
          <Value>dummy text</Value>
        </LabelPair>
      </LabelsFrame>
    </BoxWithHeader>
  )
}

export default ParametersBox

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
