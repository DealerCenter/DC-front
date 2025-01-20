import { useTranslations } from 'next-intl'
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {}

const PageHeader = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <BlueText>{t('about us')}</BlueText>
        <Header>{t('easy transportation')}</Header>
      </Frame>
      <Text>{t('possibility to bring car from any us state')}</Text>
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

  padding: 96px 32px;
  gap: 24px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    padding: 64px 0;
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Header = styled.h2`
  margin: 0;
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 33px;
  }
`
const Text = styled.p`
  margin: 0;
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_42};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.medium};
  }
`

const BlueText = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.link_blue};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.medium};
  }

  cursor: default;
`
