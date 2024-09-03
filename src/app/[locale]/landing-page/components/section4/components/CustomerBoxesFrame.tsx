import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import theme from '@/app/[locale]/theme'
import CustomerBox from './CustomerBox'

import customerImage1 from '@/assets/images/dummyCustomer1.jpeg'
import customerImage2 from '@/assets/images/dummyCustomer2.jpeg'

const dummyText =
  'Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.'

const isMobileSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,

  arrows: false,
}

type Props = {}

const CustomerBoxesFrame = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      {isMobile ? (
        <MediaCutDiv>
          <CarsCarouselFrame>
            <Slider {...isMobileSettings}>
              <CustomerBox
                customerImage={customerImage1.src}
                customerName={'Lauren M.'}
                rating={4}
                text={dummyText}
              />
              <CustomerBox
                customerImage={customerImage2.src}
                customerName={'David B.'}
                rating={5}
                text={dummyText}
              />
            </Slider>
          </CarsCarouselFrame>
        </MediaCutDiv>
      ) : (
        <>
          <CustomerBox
            customerImage={customerImage1.src}
            customerName={'Lauren M.'}
            rating={4}
            text={dummyText}
          />
          <CustomerBox
            customerImage={customerImage2.src}
            customerName={'David B.'}
            rating={5}
            text={dummyText}
          />
        </>
      )}
    </Container>
  )
}

export default CustomerBoxesFrame

const Container = styled.div`
  display: flex;
  flex-direction: row;

  gap: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    display: unset;
    flex-direction: unset;
    gap: unset;
  }
`

const MediaCutDiv = styled.div`
  @media ${({ theme }) => theme.media?.sm} {
    width: 375px;
    overflow: hidden;
  }
`

const CarsCarouselFrame = styled.div`
  @media ${({ theme }) => theme.media?.sm} {
    width: 520px;
  }
`
