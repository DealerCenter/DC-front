'use client'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { routeName } from '@/common/helpers/constants'

import { getOrders } from '@/api/apiCalls'
import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'
import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import ArrivalStateBox from '@/common/components/arrivalState/ArrivalStateBox'
import DetailsRow from './components/detailsRow/DetailsRow'
import IdAndDateBox from './components/IdAndDateBox'
import LeftFrame from './components/leftFrame/LeftFrame'
import RightFrame from './components/rightFrame/RightFrame'
import { useCreateOrderContext } from './hooks/useCreateOrderContext'
import ImagesUploadComponentDummy from '../components/common/ImagesUploadComponentDummy'
import AppModalFullScreen from '@/common/components/modal/AppModalFullScreen'
import ImageUpload from './image-upload/ImageUpload'

const isAdmin = true

type Props = { id?: string }

const OrderProfile = ({ id }: Props) => {
  const [isUploadImagesOpen, setIsUploadImagesOpen] = useState(false)
  const t = useTranslations('')
  const router = useRouter()
  const { handleSubmit, isButtonDisabled, prefillFormikValues, setOrderId } =
    useCreateOrderContext()

  const handleGetOrderData = async () => {
    const response = await getOrders({ orderId: Number(id) }, isAdmin)
    response?.data && prefillFormikValues(response?.data[0])
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
        <IdAndDateFrame>
          <IdAndDateBox
            auctionId='932874929'
            orderId='2387498739'
            dateOfPurchase='20/04/2025'
          />
        </IdAndDateFrame>

        <StateBoxFrame>
          <ArrivalStateBox arrivalState='arrived' />
        </StateBoxFrame>

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
