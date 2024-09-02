import theme from '@/app/[locale]/theme'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

type Props = {}

const PageHeader = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <Header>{t('document check')}</Header>
      <Text>
        {t('specify type of document and get detailed information')}{' '}
        {!isMobile &&
          t('find out if problematic and how good an investment it can be')}
      </Text>
    </Container>
  )
}

export default PageHeader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
  }
`

const Header = styled.h2`
  margin: 0;
  font-size: 33px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`
const Text = styled.p`
  margin: 0;
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_42};
`
