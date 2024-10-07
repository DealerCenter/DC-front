import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'
import { routeName, ShippingStatus } from '@/common/helpers/constants'

import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppDropdown from '@/common/components/appDropdown/AppDropdown'
import OrderList from '../../../../common/components/orderList/OrderList'
import { orderedCars } from '@/assets/DummyData'

import filterIconBlack from '@/assets/icons/filterBlack.svg'
import sortIconBlack from '@/assets/icons/sortBlack.svg'
import Pagination from '@/common/components/pagination/Pagination'

import arrowDown from '@/assets/icons/sortArrows/arrowSortDown.svg'
import arrowUp from '@/assets/icons/sortArrows/arrowSortUp.svg'
import { ORDER_DATA } from '@/api/apiTypes'
import { getOrders } from '@/api/apiCalls'
import AppSort from '@/common/components/appSort/AppSort'
import OrderHistoryFilter from './components/OrderHistoryFilter'

const sortOptions = [
  { label: 'date descending', icon: arrowDown },
  { label: 'date ascending', icon: arrowUp },
  { label: 'price descending', icon: arrowDown },
  { label: 'price ascending', icon: arrowUp },
]

const ITEMS_PER_PAGE = 8

type Props = {}

const OrderHistory = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [ordersList, setOrdersList] = useState<ORDER_DATA[]>()
  const [sortByCost, setSortByCost] = useState<'asc' | 'desc' | null>(null)
  const [sortByCreateDate, setSortByCreateDate] = useState<
    'asc' | 'desc' | null
  >(null)
  const [shippingStatus, setShippingStatus] = useState<ShippingStatus>(null)

  const [receiverId, setReceiverId] = useState<number | null>(null)

  const t = useTranslations('')
  const router = useRouter()

  const handleGetOrders = async () => {
    setIsLoading(true)
    const response = await getOrders({
      page: currentPage,
      pageSize: ITEMS_PER_PAGE,
      sortByCreateDate: sortByCreateDate,
      sortByCost: sortByCost,
      status: shippingStatus,
    })
    if (response) {
      setIsPageLoaded(true)
      setOrdersList(response.data)
      setCurrentPage(response.page)
      setTotalPages(response.pageCount)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetOrders()
    //eslint-disable-next-line
  }, [sortByCost, sortByCreateDate, shippingStatus, currentPage])

  return (
    <Container>
      <TopFrame>
        <HeaderH4Bold text={t('order history')} />
        <ButtonFrame>
          <OrderHistoryFilter
            shippingStatus={shippingStatus}
            setShippingStatus={setShippingStatus}
            setReceiverId={setReceiverId}
            receiverId={receiverId}
          />
          <AppSort
            setSortByCost={setSortByCost}
            setSortByDate={setSortByCreateDate}
          />
        </ButtonFrame>
      </TopFrame>
      <OrderList
        onClick={() => router.push(routeName.dealerOrder)}
        orderData={ordersList}
      />
      <PaginationFrame>
        <Pagination
          currentPage={currentPage}
          numOfPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </PaginationFrame>
    </Container>
  )
}

export default OrderHistory

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors?.white};
  padding: ${({ theme }) => theme.spacing?.lg};
  gap: ${({ theme }) => theme.spacing?.lg};
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 16px;
    padding: 0 5%;
  }
`

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 0 32px;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0;
  }
`

const PaginationFrame = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.md};
`
