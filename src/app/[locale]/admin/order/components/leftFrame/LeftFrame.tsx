import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { useTranslations } from 'next-intl'

import theme from '@/app/[locale]/theme'
import Box from '../common/Box'
import ParametersBox from './components/ParametersBox'
import LocationBox from './components/LocationBox'

type Props = { isEditing: boolean }

const LeftFrame = ({ isEditing }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <LocationBox isEditing={isEditing} />
      <ParametersBox isEditing={isEditing} />
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
  width: unset;

  @media ${({ theme }) => theme.media?.md} {
    flex: 5;
    width: unset;
  }

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    gap: 8px;
    width: 343px;
  }
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
