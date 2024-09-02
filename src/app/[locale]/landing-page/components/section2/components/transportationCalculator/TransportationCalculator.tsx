import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'
import PageHeader from '../../../common/PageHeader'
import Calculator from './components/Calculator'

import shipImage from '@/assets/images/shipImage.jpeg'

type Props = {}

const TransportationCalculator = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')

  return (
    <>
      {isMobile && (
        <ImageFrame>
          <Image src={shipImage} alt='ship image' layout='responsive' />
        </ImageFrame>
      )}
      <Container>
        <PageHeader
          headerText={t('transportation calculator')}
          text={t('specify details and calculate exact shipping cost')}
        />
        <Frame>
          {!isMobile && (
            <ImageFrame>
              <Image
                src={shipImage}
                alt='ship image'
                width={386}
                height={292}
              />
            </ImageFrame>
          )}
          <Calculator />
        </Frame>
      </Container>
    </>
  )
}

export default TransportationCalculator

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  gap: 100px;

  @media ${({ theme }) => theme.media?.md} {
    padding: 64px 0;
    gap: 64px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: 64px 0;
    gap: 48px;

    margin-top: 150px;
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
`

const ImageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    border-radius: unset;
    height: 150px;

    position: absolute;
    left: 0;
    top: 2955px;
    z-index: -1;
    width: 100%;
  }
`
