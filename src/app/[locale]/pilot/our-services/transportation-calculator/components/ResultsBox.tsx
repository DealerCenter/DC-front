import React from 'react'
import styled from 'styled-components'
import LabelIconValueBox from './LabelIconValueBox'
import { useTranslations } from 'next-intl'

import documentIcon from '@/assets/icons/lockedDocumentIconBlack.svg'
import carIconBlack from '@/assets/icons/carIconBlack.svg'
import locationIconBlack from '@/assets/icons/locationIconBlack.svg'
import reloadIconBlack from '@/assets/icons/reloadIconBlack.svg'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/pilot/theme'
import Loader from '@/common/components/loader/Loader'

type Props = {
  calculatedResult: {
    totalPrice: number
    cargoType: string
    auctionLocation: string
    destination: string
  }
  isCalculating: boolean
}

const ResultsBox = ({ calculatedResult, isCalculating }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const splitName =
    calculatedResult?.auctionLocation.length > 0
      ? calculatedResult.auctionLocation.split('-')
      : ''

  console.log({ splitName })

  return (
    <Container>
      {isCalculating ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <>
          {isMobile && (
            <Icon>
              <Image src={reloadIconBlack} alt='icon' />
            </Icon>
          )}
          <LeftFrame>
            <LabelIconValueBox
              label={t('auction')}
              icon={documentIcon}
              value={
                splitName.length > 0 ? `${splitName[splitName.length - 1]}` : ''
              }
            />
            <LabelIconValueBox
              label={t('vehicle type')}
              icon={carIconBlack}
              value={calculatedResult.cargoType}
            />
            <LabelIconValueBox
              label={t('from where')}
              icon={locationIconBlack}
              value={splitName ? `${splitName[0]}, ${splitName[1]}` : ''}
            />
            <LabelIconValueBox
              label={t('to where')}
              icon={locationIconBlack}
              value={calculatedResult.destination}
            />
          </LeftFrame>
          <RightFrame>
            <LabelAndCostBox>
              <Label>{t('cost of transportation')}</Label>
              <Cost>${calculatedResult.totalPrice}</Cost>
            </LabelAndCostBox>
          </RightFrame>
        </>
      )}
    </Container>
  )
}

export default ResultsBox

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: unset;
  gap: unset;

  padding: 24px;
  border-radius: ${({ theme }) => theme.radius?.xl};

  background-color: ${({ theme }) => theme.colors?.white};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
  }
`

const LoaderContainer = styled.div`
  align-self: center;
`

const LeftFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  width: 100%;
`

const RightFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

const LabelAndCostBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
  align-items: flex-end;
  text-align: right;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.small_13};
    font-weight: ${({ theme }) => theme.fontWeight?.bold};
    color: ${({ theme }) => theme.colors?.main_gray_42};
  }

  cursor: default;
`

const Cost = styled.label`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 28px;
  }

  cursor: default;
`
