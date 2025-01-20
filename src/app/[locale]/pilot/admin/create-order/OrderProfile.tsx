'use client'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { routeName } from '@/common/helpers/constants'

import { getOrders } from '@/api/apiCalls'
import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'
import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import AppModalFullScreen from '@/common/components/modal/AppModalFullScreen'
import ImagesUploadComponentDummy from '../components/common/ImagesUploadComponentDummy'
import DetailsRow from './components/detailsRow/DetailsRow'
import LeftFrame from './components/leftFrame/LeftFrame'
import RightFrame from './components/rightFrame/RightFrame'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from './hooks/useCreateOrderContext'
import ImageUpload from './image-upload/ImageUpload'
import LoadingOverlay from '@/common/components/loader/LoadingOverlay'
import IdAndDateBox from '@/common/components/idAndDateBox/IdAndDateBox'
import ShippingStatusButton from '@/common/components/ShippingStatusButton/ShippingStatusButton'
import { ORDER_DATA } from '@/api/apiTypes'

const isAdmin = true

type Props = { id?: string }

const OrderProfile = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isUploadImagesOpen, setIsUploadImagesOpen] = useState(false)
  const [orderData, setOrderData] = useState<ORDER_DATA | null>(null)
  const t = useTranslations('')
  const router = useRouter()
  const {
    values,
    handleSubmit,
    isButtonDisabled,
    prefillFormikValues,
    setOrderId,
  } = useCreateOrderContext()

  const handleGetOrderData = async () => {
    setIsLoading(true)
    const response = await getOrders({ orderId: Number(id) }, isAdmin)
    if (response?.data) {
      prefillFormikValues(response?.data[0])
      setOrderData(response.data[0])
    }
    setIsLoading(false)
  }

  useEffect(() => {
    id && handleGetOrderData()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    id && setOrderId(id)
  }, [id, setOrderId])

  return (
    <Container>
      <LoadingOverlay isLoading={isLoading} />
      <TopButtonsFrame>
        <AppGoBackButton
          onClick={() => router.push(routeName.adminOrderHistory)}
          text={t('back to orders')}
          noTextOnMobile={true}
        />
        <FormSaveButton
          onClick={handleSubmit}
          text={t('save')}
          htmlType='submit'
          disabled={isButtonDisabled}
        />
      </TopButtonsFrame>
      <ImageFrame>
        {id && (
          <>
            <StateBoxFrame>
              <ShippingStatusButton
                shippingStatus={values[FIELD_NAMES.STATUS_AND_DATES].status}
              />
            </StateBoxFrame>
            {orderData && (
              <IdAndDateFrame>
                <IdAndDateBox
                  auctionId='NA'
                  orderId={orderData.id}
                  dateOfPurchase={orderData.createdAt}
                />
              </IdAndDateFrame>
            )}
          </>
        )}
        <ImagesUploadComponentDummy
          text={t('add photos of vehicle')}
          onClick={() => setIsUploadImagesOpen(true)}
          height={372}
        />
        <DetailsRow />
      </ImageFrame>

      <BottomFrame>
        <LeftFrame />
        <RightFrame />
      </BottomFrame>

      <AppModalFullScreen
        isOpen={isUploadImagesOpen}
        onRequestClose={() => setIsUploadImagesOpen(false)}
      >
        <ImageUpload onClose={() => setIsUploadImagesOpen(false)} />
      </AppModalFullScreen>
    </Container>
  )
}

export default OrderProfile

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  margin-top: unset;
  margin-bottom: unset;
  padding: unset;
  width: unset;

  max-width: 1200px;
  @media ${({ theme }) => theme.media?.md} {
    max-width: 960px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 50px;
    gap: 8px;
    padding: 0 5%;
    width: 100%;
  }
`

const ImageFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  padding-top: unset;

  @media ${({ theme }) => theme.media?.sm} {
    padding-top: 106px;
    gap: 8px;
  }
`

const TopButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
`

const StateBoxFrame = styled.div`
  position: absolute;
  top: -20px;
  left: 0px;

  @media ${({ theme }) => theme.media?.sm} {
    top: 0;
    left: 0;
  }

  z-index: 10;
`

const IdAndDateFrame = styled.div`
  position: absolute;
  top: -40px;
  right: 0;

  @media ${({ theme }) => theme.media?.sm} {
    top: 0;
    right: 0;
  }

  z-index: 10;
`

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
`
