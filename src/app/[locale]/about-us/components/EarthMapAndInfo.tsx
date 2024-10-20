import React from 'react'
import styled from 'styled-components'
import InfoBox from './InfoBox'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import earthDots from '@/assets/images/earthDotsOnWhite.png'
import earthDotsSmall from '@/assets/images/earthMapOnWhiteSmall.png'
import { useMediaQuery } from 'react-responsive'
import theme from '../../theme'

type Props = {}

const EarthMapAndInfo = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <ImageContainer>
        {isMobile ? (
          <Image src={earthDotsSmall} alt='earth shape dots small' />
        ) : (
          <Image src={earthDots} alt='earth shape dots' />
        )}
      </ImageContainer>
      <InfoBoxesFrame>
        <InfoBox
          header='Support'
          text={t('our team is ready to help')}
          blueText='support@gmail.com'
        />
        <InfoBox
          header='Sales'
          text={t('have questions? Contact us')}
          blueText='sales@gmail.com'
        />
        <InfoBox
          header='Phone'
          text={t('monday-friday 9-5')}
          blueText='+1 (555) 000-0000'
        />
      </InfoBoxesFrame>
    </Container>
  )
}

export default EarthMapAndInfo

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  line-height: 0;

  padding: 64px 0;

  /* @media ${({ theme }) => theme.media?.md} {
    width: 960px;
    overflow-x: hidden;
  } */
  width: 100%;
  overflow-x: hidden;

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    overflow-x: hidden;
    padding: 32px 0;
  }
`

const InfoBoxesFrame = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 100%;
    padding: 0 64px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 40px;
    justify-content: unset;
    width: unset;
    padding: 64px 0;
  }
`
