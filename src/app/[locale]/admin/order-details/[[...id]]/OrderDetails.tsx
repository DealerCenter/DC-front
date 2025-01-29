import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import { getOrders } from '@/api/apiCalls'
import { ORDER_DATA } from '@/api/apiTypes'
import { routeName } from '@/common/helpers/constants'
import theme from '../../../theme'

import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'
import ShippingStatusButton from '@/common/components/ShippingStatusButton/ShippingStatusButton'
import Loader from '@/common/components/loader/Loader'
import CarImagesAndDetailsBox from '../../../dealer/order-details/components/CarImagesAndDetailsBox'
import IdAndDateBox from '../../../dealer/order-details/components/IdAndDateBox'
import LeftColumn from '../../../dealer/order-details/components/LeftColumn'
import RightColumn from '../../../dealer/order-details/components/RightColumn'
import AppButton from '@/common/components/appButton/AppButton'

type Props = { id?: string }

const OrderDetails = ({ id }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()
  const [orderData, setOrderData] = useState<ORDER_DATA>()
  const [orderNotFound, setOrderNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const getOrderData = async () => {
    setIsLoading(true)
    const response = await getOrders({ orderId: Number(id) }, true)
    response && setOrderData(response?.data[0])
    response?.data.length === 0 && setOrderNotFound(true)
    setIsLoading(false)
  }

  useEffect(() => {
    getOrderData()
    //eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (!orderData) {
    return (
      <Container>
        <BackToOrderButton>
          <AppGoBackButton
            onClick={() => router.push(routeName.adminOrderHistory)}
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
                  <ShippingStatusButton shippingStatus={orderData.status} />
                </StateBoxFrame>
                <BackToOrderButton>
                  <AppGoBackButton
                    onClick={() => router.push(routeName.adminOrderHistory)}
                    text={t('back to orders')}
                  />

                  <AppButton
                    onClick={() =>
                      router.push(`${routeName.adminCreateOrder}/${id}`)
                    }
                    text={t('edit')}
                    type='filled'
                    width={150}
                    height='large'
                  />
                </BackToOrderButton>
              </>
            )}
            <CarImagesAndDetailsBox orderData={orderData} isAdmin />
          </TopFrame>
          <BottomFrame>
            <LeftColumn orderData={orderData} />
            <RightColumn orderData={orderData} getOrderData={getOrderData} />
          </BottomFrame>
        </>
      )}
    </Container>
  )
}

export default OrderDetails

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
  display: flex;
  justify-content: space-between;
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

const NotFoundMessage = styled.h3`
  display: flex;
  justify-content: center;
`
