import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const DebtTooltipContainer = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Text16Bold>{t('debt')}</Text16Bold>
      <LabelsBox>
        <TextGray>{t('transportation')}</TextGray>
        <TextGray>$7,500</TextGray>
      </LabelsBox>
      <LabelsBox>
        <TextGray>{t('cost of vehicle')}</TextGray>
        <TextGray>$3,800</TextGray>
      </LabelsBox>
      <LabelsBox>
        <TextGray>თუ არის რაიმე კიდევ იმის ღირებულება</TextGray>
        <TextGray>$0</TextGray>
      </LabelsBox>
      <Line />
      <LabelsBox>
        <TextGray>{t('total debt')}</TextGray>
        <TextGray>$10,800</TextGray>
      </LabelsBox>
    </Container>
  )
}

export default DebtTooltipContainer

const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`

const LabelsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Text16Bold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.button_black};
`

const TextGray = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
