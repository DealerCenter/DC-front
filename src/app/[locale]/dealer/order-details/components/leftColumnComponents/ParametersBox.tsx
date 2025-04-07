import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import BoxWithHeader from '../BoxWithHeader'

import { ORDER_DATA } from '@/api/apiTypes'
import IsInsuredIcon from '@/common/components/readyIcons/IsInsuredIcon'

type Props = { orderData: ORDER_DATA }

const ParametersBox = ({ orderData }: Props) => {
  const t = useTranslations('')
  const {
    isInsured,
    manufacturer,
    model,
    manufactureYear,
    carCategory,
    mileage,
  } = orderData

  return (
    <BoxWithHeader headerText='parameters'>
      <LabelsFrame>
        <LabelPair>
          <Label>{t('insurance')}</Label>
          <IconLabelBox>
            <Value>{isInsured ? t('yes') : t('no')}</Value>
            <IconBox>
              <IsInsuredIcon isInsured={isInsured} />
            </IconBox>
          </IconLabelBox>
        </LabelPair>
        <LabelPair>
          <Label>{t('manufacturer')}</Label>
          <Value>{manufacturer}</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('model')}</Label>
          <Value>{model}</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('year')}</Label>
          <Value>{manufactureYear}</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('category')}</Label>
          <Value>{t(carCategory)}</Value>
        </LabelPair>
        <LabelPair>
          <Label>{t('mileage')}</Label>
          <Value>{mileage}</Value>
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
