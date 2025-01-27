import theme from '@/app/[locale]/theme'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'

import carOnBlack from '@/assets/images/blackCarOnBlack.jpeg'
import { useTranslations } from 'next-intl'
import SearchComponent from './components/SearchComponent'

type Props = {}

const CheckVehicleHistory = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <HeaderBox>
          <Header>{t('vehicle history check')}</Header>
          <Text>
            {t(
              'enter vin code and check history of vehicle, price, damage, etc'
            )}
          </Text>
        </HeaderBox>
        <SearchBox>
          <SearchComponent
            placeholder={
              isMobile ? t('enter vin code') : t('enter vehicle vin code')
            }
          />
        </SearchBox>
      </Frame>
      {!isMobile && (
        <ImageFrame>
          <Image src={carOnBlack} alt='ship image' height={400} />
        </ImageFrame>
      )}
    </Container>
  )
}

export default CheckVehicleHistory

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 120px 0;
  gap: 42px;

  width: 100%;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 72px;

  width: 580px;

  @media ${({ theme }) => theme.media?.md} {
    width: 460px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    text-align: center;
  }
`

const ImageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius?.xl};
  width: 580px;

  @media ${({ theme }) => theme.media?.md} {
    width: 460px;
  }
`

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 20px;

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

  color: ${({ theme }) => theme.colors?.black};
`

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
`
