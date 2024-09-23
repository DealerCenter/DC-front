import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import OrderList from './components/OrderList'
import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import Pagination from '@/common/components/pagination/Pagination'
import ButtonsRow from './components/ButtonsRow'

import { getOrders } from '@/api/apiCalls'
import { message } from 'antd'
import {
  OrdersQueryType,
  routeName,
  ShippingStatus,
} from '@/common/helpers/constants'
import { ORDERS_GET_RES } from '@/api/apiTypes'
import AddYourFirstTask from './components/AddYourFirstTask'
import { useRouter } from '@/navigation'

const itemsPerPage = 8

type Props = {}

const OrderHistory = (props: Props) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isEditing, setIsEditing] = useState(false)
  const [ordersList, setOrdersList] = useState<ORDERS_GET_RES[]>()
  const [sortByCost, setSortByCost] = useState<'asc' | 'desc' | null>(null)
  const [sortByCreateDate, setSortByCreateDate] = useState<
    'asc' | 'desc' | null
  >(null)
  const [shippingStatus, setShippingStatus] = useState<ShippingStatus>(null)
  // const [filterQueries, setFilterQueries] = useState<OrdersQueryType>()
  const router = useRouter()
  const t = useTranslations('')

  const handleGetOrders = async () => {
    const response = await getOrders({
      skip: 0,
      take: 0,
      sortByCreateDate: sortByCreateDate,
      sortByCost: sortByCost,
      status: shippingStatus,
    })
    if (response) {
      setIsPageLoaded(true)
      console.log('response:', response)
      setOrdersList(response)
    }
  }

  useEffect(() => {
    handleGetOrders()
    //eslint-disable-next-line
  }, [sortByCost, sortByCreateDate])

  return (
    <Container>
      <TopFrame>
        <HeaderH4Bold text={t('order history')} />
        <ButtonsRow
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setSortByCost={setSortByCost}
          setSortByCreateDate={setSortByCreateDate}
          isPageLoaded={isPageLoaded}
        />
      </TopFrame>

      {ordersList && ordersList?.length > 0 ? (
        <OrderList
          onClick={() => {}}
          list={ordersList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          isEditing={isEditing}
          setTotalPages={setTotalPages}
        />
      ) : (
        <AddYourFirstTask
          onClick={() => router.push(routeName.adminCreateOrder)}
        />
      )}
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
  }
`

const PaginationFrame = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.md};
`
