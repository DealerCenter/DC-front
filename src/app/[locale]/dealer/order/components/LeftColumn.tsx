import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'

import LocationBox from './leftColumnComponents/LocationBox'
import ParametersBox from './leftColumnComponents/ParametersBox'
import BoxWithHeader from './BoxWithHeader'

type Props = {}

const LeftColumn = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <LocationBox />
      <ParametersBox />
      {!isMobile && (
        <BoxWithHeader headerText='more details'>
          <TextArea placeholder={t('description')} />
        </BoxWithHeader>
      )}
    </Container>
  )
}

export default LeftColumn

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
  }
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
