import React from 'react'
import styled from 'styled-components'
import LotPreview from './components/LotPreview'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {}

const SimilarLots = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <HeaderBox>
        <Header>{t('similar lots')}</Header>
        {isMobile && <Line />}
      </HeaderBox>
      <ListFrame>
        <LotPreview
          carName={'Mercedes Benz sd sd dfsfsdfsffsfsdfdsfsfsdfsdfsf '}
          currentBid={5750}
          lotNumber={5060903}
          location={'NY - Long Island'}
        />
        <LotPreview
          carName={'Mercedes Benz'}
          currentBid={573350}
          lotNumber={5060903}
          location={'NY - Long Island'}
        />
        <LotPreview
          carName={'Mercedes Benz'}
          currentBid={5750}
          lotNumber={5060903}
          location={'NY - Long Island'}
        />
      </ListFrame>
    </Container>
  )
}

export default SimilarLots

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xl};

  padding: 80px 0px;

  @media ${({ theme }) => theme.media?.sm} {
    padding: ${({ theme }) => theme.spacing?.md};
    border-radius: ${({ theme }) => theme.radius?.xl};
    background-color: ${({ theme }) => theme.colors?.white};
  }
`

const ListFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.md};
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors?.white};
  }
`

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
  }
`

const Header = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
  cursor: default;
`

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
