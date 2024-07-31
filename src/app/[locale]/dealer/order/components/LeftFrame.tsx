import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

const DummyData = [{ label: 'dazgveva' }]

type Props = {}

const LeftFrame = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <Box>
        <Header>{t('location')}</Header>
        <Line />
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
      </Box>
      <Box>
        <Header>{t('parameters')}</Header>
        <Line />
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
      </Box>
      {!isMobile && (
        <Box>
          <Header>{t('more details')}</Header>
          <Line />
          <TextArea placeholder={t('description')} />
        </Box>
      )}
    </Container>
  )
}

export default LeftFrame

const Container = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.md} {
    flex: 5;
  }

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    gap: 8px;
    /* min-width: 343px; */
  }

  border: 1px solid blue;
`

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.xl};
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
const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors?.white};
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  padding: 10px 10px 10px 16px;
  border-radius: 12px;

  height: 96px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  }
  &:active {
    border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  }

  resize: none;
`
