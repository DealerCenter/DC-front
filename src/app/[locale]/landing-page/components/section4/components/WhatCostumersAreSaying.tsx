import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'
import CustomerBoxesFrame from './CustomerBoxesFrame'

type Props = { onSeeAllClick: () => void }

const WhatCostumersAreSaying = ({ onSeeAllClick }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <TopFrame>
        <Header>{t('what customers are saying')}</Header>
        {!isMobile && (
          <SeeAllLabel onClick={onSeeAllClick}>{t('see all')}</SeeAllLabel>
        )}
      </TopFrame>
      <CustomerBoxesFrame />

      {isMobile && (
        <SeeAllLabel onClick={onSeeAllClick}>{t('see all')}</SeeAllLabel>
      )}
    </Container>
  )
}

export default WhatCostumersAreSaying

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding: 120px 0;
  gap: 60px;

  background-color: #f5fafe;

  @media ${({ theme }) => theme.media?.md} {
    padding: 100px 0;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: 64px 0;
  }
`

const Header = styled.h2`
  margin: 0;

  font-size: 33px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  text-align: center;
`

const TopFrame = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 100%;
    padding: 0 70px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
  }
`

const SeeAllLabel = styled.div`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_56};

  text-align: center;

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.medium};
    color: ${({ theme }) => theme.colors?.main_gray_100};
  }

  @media ${({ theme }) => theme.media?.notSm} {
    &:hover {
      color: ${({ theme }) => theme.colors?.main_gray_68};
    }
    &:active {
      color: ${({ theme }) => theme.colors?.main_gray_90};
    }
  }

  cursor: pointer;
`
