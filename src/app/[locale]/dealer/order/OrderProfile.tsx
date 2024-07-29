import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import leftArrow from '@/assets/icons/arrows/arrowLeftThinBlack.svg'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import CarImagesAndDetailsBox from './components/CarImagesAndDetailsBox'
import ArrivalStateBox from '@/common/components/arrivalState/ArrivalStateBox'
import IdAndDateBox from './components/IdAndDateBox'

type Props = {}

const OrderProfile = (props: Props) => {
  const t = useTranslations('')
  const router = useRouter()

  return (
    <Container>
      <StateBoxFrame>
        <ArrivalStateBox arrivalState='arrived' />
      </StateBoxFrame>
      <IdAndDateFrame>
        <IdAndDateBox
          auctionId='932874929'
          orderId='2387498739'
          dateOfPurchase='20/04/2025'
        />
      </IdAndDateFrame>
      <BackToOrderButton onClick={() => router.push(routeName.orderHistory)}>
        <Image src={leftArrow} alt='left arrow icon' height={20} />
        <BackToOrderLabel>{t('back to orders')}</BackToOrderLabel>
      </BackToOrderButton>
      <CarImagesAndDetailsBox />
    </Container>
  )
}

export default OrderProfile

const Container = styled.div`
  position: relative;
`

const BackToOrderButton = styled.button`
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 40px;

  background-color: unset;
  border: none;
  border-radius: ${({ theme }) => theme.radius?.lg};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }

  cursor: pointer;

  margin-bottom: 64px;
`

const BackToOrderLabel = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.text_black};
`

const StateBoxFrame = styled.div`
  position: absolute;
  top: 110px;
  left: 0;

  z-index: 10;
`

const IdAndDateFrame = styled.div`
  position: absolute;
  top: 95px;
  right: 0;

  z-index: 10;
`
