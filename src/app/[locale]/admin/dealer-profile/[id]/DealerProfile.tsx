import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'
import { useMediaQuery } from 'react-responsive'

import { routeName } from '@/common/helpers/constants'
import theme from '../../../theme'

import EditButton from '../../components/common/EditButton'
import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'
import DealerDataBox from './components/DealerDataBox'
import LabelValueBox from './components/LabelValueBox'
import PdfAndImageBox from './components/PdfAndImageBox'

import userImage from '@/assets/images/userImage.png'
import OrderListBox from './components/OrderListBox'
import { getDealerWithId, getOrders } from '@/api/apiCalls'
import { DEALERS_DATA, ORDER_DATA, ORDERS_GET_RES } from '@/api/apiTypes'
import LoadingText from '@/common/components/readyComponents/LoadingText'
import Page from '../../../page'

const ITEMS_PER_PAGE = 8

type Props = { dealerId: string }

const DealerProfile = ({ dealerId }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [dealerData, setDealerData] = useState<DEALERS_DATA>()
  const [ordersResponse, setOrdersResponse] = useState<ORDERS_GET_RES>()
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  const handleGetDealer = async () => {
    setIsLoading(true)
    const response = await getDealerWithId(dealerId)
    if (response) {
      setDealerData(response)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetDealer()
    //eslint-disable-next-line
  }, [])

  const handleGetOrders = async () => {
    const response = await getOrders(
      {
        page: currentPage,
        pageSize: ITEMS_PER_PAGE,
        dealerId: Number(dealerId),
      },
      true
    )
    if (response) {
      setOrdersResponse(response)
    }
  }

  useEffect(() => {
    handleGetOrders()
    //eslint-disable-next-line
  }, [dealerId])

  if (!dealerData) {
    return (
      <Container>
        <TopButtonsFrame>
          <AppGoBackButton
            onClick={() => router.push(routeName.adminDealersList)}
            text={t('return to dealers list')}
            noTextOnMobile={true}
          />
        </TopButtonsFrame>
        <LoadingText />
      </Container>
    )
  }

  return (
    <Container>
      <TopButtonsFrame>
        <AppGoBackButton
          onClick={() => router.push(routeName.adminDealersList)}
          text={t('return to dealers list')}
          noTextOnMobile={true}
        />
        <EditButton onClick={() => {}} />
      </TopButtonsFrame>
      <Frame>
        {isMobile && <PdfAndImageBox image={dealerData?.idImageUrl} />}
        <DealerDataBox dealerData={dealerData} />
        <MiddleFrame>
          <LabelValueBox label={t('current debt')} value={'NA'} />
          <LabelValueBox label={t('cars on the way')} value={'NA'} />
          <LabelValueBox label={t('total imported cars')} value={'NA'} />
        </MiddleFrame>
        {!isMobile && <PdfAndImageBox image={dealerData?.idImageUrl} />}
      </Frame>
      {ordersResponse && (
        <OrderListBox
          headerText={t('current orders')}
          ordersResponse={ordersResponse}
        />
      )}
    </Container>
  )
}

export default DealerProfile

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  margin-top: unset;
  margin-bottom: unset;
  padding: unset;
  width: unset;

  @media ${({ theme }) => theme.media?.sm} {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 50px;
    gap: 18px;
    /* padding: 0 5%; */
    width: 100%;
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  flex-wrap: wrap;

  align-items: center;
  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
  }
`

const TopButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const MiddleFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
`
