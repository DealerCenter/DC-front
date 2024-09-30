import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'
import { useMediaQuery } from 'react-responsive'

import { routeName } from '@/common/helpers/constants'
import theme from '../../theme'

import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'
import EditButton from '../components/common/EditButton'
import DealerDataBox from './components/DealerDataBox'
import LabelValueBox from './components/LabelValueBox'
import PdfAndImageBox from './components/PdfAndImageBox'

import userImage from '@/assets/images/userImage.png'
import OrderListBox from './components/OrderListBox'
import { getDealerWithId, getOrders } from '@/api/apiCalls'
import { DEALERS_DATA, ORDER_DATA, ORDERS_GET_RES } from '@/api/apiTypes'
import LoadingText from '@/common/components/readyComponents/LoadingText'
import Page from '../../page'

const ITEMS_PER_PAGE = 8

type Props = {}

const dummyUserId = 62

const UserProfile = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [dealerData, setDealerData] = useState<DEALERS_DATA>()
  const [ordersResponse, setOrdersResponse] = useState<ORDERS_GET_RES>()
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  const handleGetDealer = async () => {
    setIsLoading(true)
    const response = await getDealerWithId(dummyUserId)
    if (response) {
      setDealerData(response)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetDealer()
  }, [])

  const handleGetOrders = async () => {
    const response = await getOrders(
      {
        page: currentPage,
        pageSize: ITEMS_PER_PAGE,
        dealerId: undefined,
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
  }, [])

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
        {isMobile && <PdfAndImageBox image={userImage.src} />}
        <DealerDataBox dealerData={dealerData} />
        <MiddleFrame>
          <LabelValueBox label={t('current debt')} value={'$ 5,750'} />
          <LabelValueBox label={t('cars on the way')} value={'12'} />
          <LabelValueBox label={t('total imported cars')} value={'24'} />
        </MiddleFrame>
        {!isMobile && <PdfAndImageBox image={userImage.src} />}
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

export default UserProfile

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
