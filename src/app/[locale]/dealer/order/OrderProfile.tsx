import Image from 'next/image'
import React, { useEffect, useState } from 'react'
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
import { getOrders } from '@/api/apiCalls'
import { ORDER_DATA } from '@/api/apiTypes'
import { message } from 'antd'

type Props = { id?: string }

const OrderProfile = ({ id }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()
  const [orderData, setOrderData] = useState<ORDER_DATA>()
  const [orderNotFound, setOrderNotFound] = useState(false)

  const getOrderData = async () => {
    const response = await getOrders({ orderId: Number(id) })
    response && setOrderData(response?.data[0])
    console.log('res:', response)
    response?.data.length === 0 && setOrderNotFound(true)
  }

  useEffect(() => {
    getOrderData()
  }, [])

  if (!orderData) {
    return (
      <Container>
        <BackToOrderButton>
          <AppGoBackButton
            onClick={() => router.push(routeName.dealerOrderHistory)}
            text={t('back to orders')}
          />
        </BackToOrderButton>
        {orderNotFound && (
          <NotFoundMessage>{t('order not found')}</NotFoundMessage>
        )}
      </Container>
    )
  }

  return (
    <Container>
      {orderData && (
        <>
          <TopFrame>
            <IdAndDateFrame>
              <IdAndDateBox orderData={orderData} />
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
            <CarImagesAndDetailsBox orderData={orderData} />
          </TopFrame>
          <BottomFrame>
            <LeftColumn orderData={orderData} />
            <RightColumn orderData={orderData} />
          </BottomFrame>
        </>
      )}
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

const BackToOrderButton = styled.div`
  margin-bottom: 64px;
`

const StateBoxFrame = styled.div`
  position: absolute;
  top: 110px;
  left: 0;

  z-index: 10;

  border: 2px solid red;
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

const NotFoundMessage = styled.h3`
  display: flex;
  justify-content: center;
`
