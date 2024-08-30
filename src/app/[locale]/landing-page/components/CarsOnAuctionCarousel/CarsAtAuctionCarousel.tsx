import React from 'react'
import styled from 'styled-components'

import CarDetailsBox from './components/CarDetailsBox'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {}

const CarsAtAuctionCarousel = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <TopFrame>
        <Header>{t('cars at auction')}</Header>
        {!isMobile && <SeeAllLabel>{t('see all')}</SeeAllLabel>}
      </TopFrame>
      <CarsCarouselFrame>
        <CarDetailsBox />
        <CarDetailsBox />
        <CarDetailsBox />
      </CarsCarouselFrame>
      {isMobile && <SeeAllLabel>{t('see all')}</SeeAllLabel>}
    </Container>
  )
}

export default CarsAtAuctionCarousel

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media ${({ theme }) => theme.media?.sm} {
    align-items: center;
    gap: 48px;
  }
`

const CarsCarouselFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const Header = styled.label`
  font-size: 33px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    text-align: center;
  }
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SeeAllLabel = styled.div`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_56};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.medium};
    color: ${({ theme }) => theme.colors?.main_gray_100};
  }
  @media ${({ theme }) => theme.media?.notSm} {
    &:hover {
      color: ${({ theme }) => theme.colors?.main_gray_90};
    }
  }
`
