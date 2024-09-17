import React from 'react'
import styled from 'styled-components'
import LabelAndDropdownPair from './LabelAndDropdownPair'
import { useTranslations } from 'next-intl'
import BasicButton from '@/common/components/appButton/BasicButton'
// import LabelAndDropdownPair from '../../../../section1/components/searchComponent/components/LabelAndDropdownPair'

type Props = {}

const Calculator = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <InputsContainer>
        <LabelsPair>
          <LabelAndDropdownPair
            label={t('auction')}
            placeholder={t('select')}
          />
          <LabelAndDropdownPair
            label={t('vehicle type')}
            placeholder={t('select')}
          />
        </LabelsPair>
        <LabelsPair>
          <LabelAndDropdownPair
            label={t('from where')}
            placeholder={t('which city/state is it coming from')}
          />
          <LabelAndDropdownPair
            label={t('to where')}
            placeholder={t('what city/port does it arrive at')}
          />
        </LabelsPair>
      </InputsContainer>
      <BasicButton onClick={() => {}}>
        <ButtonLabel>{t('calculate')}</ButtonLabel>
      </BasicButton>
    </Container>
  )
}

export default Calculator

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xl};

  justify-content: space-between;
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.xsm};
  }
`

const LabelsPair = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing?.xsm};
  }
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};
  cursor: pointer;
`
