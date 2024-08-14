import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

import { routeName } from '@/common/helpers/constants'

import CarImagesAndDetailsBox from './components/CarImagesAndDetailsBox'
import ArrivalStateBox from '@/common/components/arrivalState/ArrivalStateBox'
import IdAndDateBox from './components/IdAndDateBox'

import leftArrow from '@/assets/icons/arrows/arrowLeftThinBlack.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '../../theme'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'
import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'

type Props = {}

const OrderProfile = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  return (
    <Container>
      <TopFrame>
        <IdAndDateFrame>
          <IdAndDateBox
            auctionId='932874929'
            orderId='2387498739'
            dateOfPurchase='20/04/2025'
          />
        </IdAndDateFrame>
        {!isMobile && (
          <>
            <StateBoxFrame>
              <ArrivalStateBox arrivalState='arrived' />
            </StateBoxFrame>
            <BackToOrderButton>
              <AppGoBackButton
                onClick={() => router.push(routeName.dealerOrderHistory)}
                text={t('back to orders')}
              />
            </BackToOrderButton>
          </>
        )}
        <CarImagesAndDetailsBox />
      </TopFrame>
      <BottomFrame>
        <LeftColumn />
        <RightColumn />
      </BottomFrame>
    </Container>
  )
}

export default OrderProfile

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    gap: 8px;
    padding: 0 5%;
    width: 100%;
  }
`

const BackToOrderButton = styled.button`
  margin-bottom: 64px;
`

const StateBoxFrame = styled.div`
  position: absolute;
  top: 110px;
  left: 0;

  z-index: 10;
`

const IdAndDateFrame = styled.div`
  @media ${({ theme }) => theme.media?.sm} {
    position: unset;
    top: unset;
    right: unset;
  }
  position: absolute;
  top: 95px;
  right: 0;

  z-index: 10;
`
const TopFrame = styled.div``

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 8px;
  }
`
