import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import dummyCarImage from '@/assets/images/DummyCarImage.jpg'
import BasicButton from '@/common/components/appButton/BasicButton'
import arrowRightWhite from '@/assets/icons/arrowRightWhite.svg'
import { useTranslations } from 'next-intl'
import BasicButtonWithIcon from '@/common/components/appButton/BasicButtonWithIcon'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/pilot/theme'

type Props = {
  carName: string
  currentBid: number
  lotNumber: number
  location: string
}

const BUTTON_HEIGHT_MOBILE = 36
const BUTTON_HEIGHT_NOT_MOBILE = 44

const LotPreview = ({ carName, currentBid, lotNumber, location }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <ImageBox>
        <Image
          src={dummyCarImage}
          alt='dummy car image'
          objectFit='cover'
          width={400}
        />
      </ImageBox>
      <DetailsAndButtonFrame>
        <Frame1>
          <CarBrandBox>
            <Label16Bold>{carName}</Label16Bold>
            <Label13Gray>Premium plus</Label13Gray>
          </CarBrandBox>
          <CurrentBidBox>
            <Label16Bold>{`$ ${currentBid}`}</Label16Bold>
            <LabelCurrentBid>{t('current bid')}</LabelCurrentBid>
          </CurrentBidBox>
        </Frame1>
        <PairsBox>
          <LabelValuePair>
            <LabelBox>
              <LabelForPair>{t('lot number')}</LabelForPair>
            </LabelBox>
            <ValueForPair>{lotNumber}</ValueForPair>
          </LabelValuePair>
          <LabelValuePair>
            <LabelBox>
              <LabelForPair>{t('location')}</LabelForPair>
            </LabelBox>
            <ValueForPair>{location}</ValueForPair>
          </LabelValuePair>
        </PairsBox>
        <BasicButtonWithIcon
          icon={arrowRightWhite}
          label={t('view lot')}
          onClick={() => {}}
          height={isMobile ? BUTTON_HEIGHT_MOBILE : BUTTON_HEIGHT_NOT_MOBILE}
        />
      </DetailsAndButtonFrame>
    </Container>
  )
}

export default LotPreview

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  /* height: 500px; */

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.sm};
    padding: 12px 0;
    flex-direction: row;
  }
`

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px 18px 0px 0px;

  overflow: hidden;

  width: 392.6px;
  height: 260px;

  @media ${({ theme }) => theme.media?.md} {
    width: 309.33px;
    height: 260px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    border-radius: ${({ theme }) => theme.radius?.lg};
    width: 120px;
    height: 149px;
  }
`

const DetailsAndButtonFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  /* height: 224px; */

  @media ${({ theme }) => theme.media?.sm} {
    justify-content: space-between;
    gap: unset;
  }
`

const Frame1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${({ theme }) => theme.media?.sm} {
    width: 179px;
  }
`

const CarBrandBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 160px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 97px;
  }
`

const CurrentBidBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  text-align: end;

  width: 140px;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    width: 97px;
    height: 50px;
  }
`

const PairsBox = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.xsm};
  }
`

const LabelValuePair = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.md};
  height: 36px;

  @media ${({ theme }) => theme.media?.sm} {
    height: unset;
  }
`

const LabelBox = styled.div`
  display: flex;
  align-items: center;
  width: 100px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 80px;
  }
`

const Label16Bold = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  max-height: 40px;

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.medium};
    flex-direction: column-reverse;
  }

  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: default;
`

const Label13Gray = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_56};
  cursor: default;
`

const LabelForPair = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  color: ${({ theme }) => theme.colors?.main_gray_68};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  @media ${({ theme }) => theme.media?.sm} {
    color: ${({ theme }) => theme.colors?.main_gray_56};
    font-size: 11px;
  }
  cursor: default;
`

const ValueForPair = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    color: ${({ theme }) => theme.colors?.main_gray_56};
    font-size: 11px;
  }

  cursor: default;
`

const LabelCurrentBid = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  color: ${({ theme }) => theme.colors?.main_gray_56};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 11px;
    font-weight: ${({ theme }) => theme.fontWeight?.bold};
  }
  cursor: default;
`
