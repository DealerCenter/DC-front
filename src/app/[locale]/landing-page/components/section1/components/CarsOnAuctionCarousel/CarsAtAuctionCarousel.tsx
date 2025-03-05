import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { useTranslations } from 'next-intl'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import theme from '@/app/[locale]/theme'
import CarDetailsBox from './components/CarDetailsBox'
import { NextArrow, PrevArrow } from './components/CustomArrows'
import { getMailinatorInbox } from '@/api/apiCalls'
import axios from 'axios'

type Props = { onSeeAllClick: () => void }

const isDesktopSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const isTabletSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const isMobileSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,

  arrows: false,
}

const CarsAtAuctionCarousel = ({ onSeeAllClick }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const [mailinatorInbox, setMailinatorInbox] = useState([])
  const t = useTranslations('')
  const [currencyRate, setCurrencyRate] = useState(NaN)

  useEffect(() => {
    const url =
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json'
    const fetchCurrencyRate = async () => {
      const res = await axios.get(url)
      setCurrencyRate(res.data.usd['gel'])
    }

    fetchCurrencyRate()
  }, [])

  const settings = isMobile
    ? isMobileSettings
    : isTablet
    ? isTabletSettings
    : isDesktopSettings

  const fetchCars = async () => {
    const res = await getMailinatorInbox()
    console.log('res', res)
    setMailinatorInbox(res)
  }
  useEffect(() => {
    fetchCars()
  }, [])
  // console.log('car', mailinatorInbox[0]?.['parts']?.[1]['body'])
  console.log({ mailinatorInbox })

  return (
    <Container>
      {mailinatorInbox?.length > 0 && (
        <>
          <TopFrame>
            <Header>{t('cars at auction')}</Header>
            {/* {!isMobile && (
          <SeeAllLabel onClick={onSeeAllClick}>{t('see all')}</SeeAllLabel>
        )} */}
          </TopFrame>
          <MediaCutDiv>
            <CarsCarouselFrame>
              {mailinatorInbox?.length > 0 && (
                // @ts-ignore
                <Slider ref={null} refs={null} {...settings}>
                  {mailinatorInbox.map((car, idx) => (
                    <CarDetailsBox
                      key={`mailinator${idx}`}
                      data={car}
                      currencyRate={currencyRate}
                    />
                  ))}
                </Slider>
              )}
            </CarsCarouselFrame>
          </MediaCutDiv>
        </>
      )}

      {/* {isMobile && (
        <SeeAllLabel onClick={onSeeAllClick}>{t('see all')}</SeeAllLabel>
      )} */}
    </Container>
  )
}

export default CarsAtAuctionCarousel

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 0;
  gap: 64px;

  @media ${({ theme }) => theme.media?.md} {
    padding: 64px 0;
    gap: 48px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    gap: 48px;
  }
`

const MediaCutDiv = styled.div`
  @media ${({ theme }) => theme.media?.sm} {
    width: 375px;
    overflow: hidden;
  }
`

const CarsCarouselFrame = styled.div`
  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 910px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 520px;
  }
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
  }
`

const Header = styled.label`
  font-size: 33px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    text-align: center;
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
