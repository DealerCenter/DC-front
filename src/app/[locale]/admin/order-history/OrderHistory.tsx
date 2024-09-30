import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Pagination from '@/common/components/pagination/Pagination'
import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import ButtonsRow from './components/ButtonsRow'
import OrderList from './components/OrderList'

import { getOrders } from '@/api/apiCalls'
import { ORDER_DATA, ORDERS_GET_RES } from '@/api/apiTypes'
import { routeName, ShippingStatus } from '@/common/helpers/constants'
import { useRouter } from '@/navigation'
import AddYourFirstTask from './components/AddYourFirstTask'

const ITEMS_PER_PAGE = 8

const isAdmin = true

type Props = {}

const OrderHistory = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isEditing, setIsEditing] = useState(false)
  const [ordersList, setOrdersList] = useState<ORDER_DATA[]>()
  const [sortByCost, setSortByCost] = useState<'asc' | 'desc' | null>(null)
  const [sortByCreateDate, setSortByCreateDate] = useState<
    'asc' | 'desc' | null
  >(null)
  const [shippingStatus, setShippingStatus] = useState<ShippingStatus>(null)
  const router = useRouter()
  const t = useTranslations('')

  console.log('props:', props)

  const handleGetOrders = async () => {
    setIsLoading(true)
    const response = await getOrders(
      {
        page: currentPage,
        pageSize: ITEMS_PER_PAGE,
        sortByCreateDate: sortByCreateDate,
        sortByCost: sortByCost,
        status: shippingStatus,
      },
      isAdmin
    )
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
        <ButtonsRow
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setSortByCost={setSortByCost}
          setSortByCreateDate={setSortByCreateDate}
          isButtonsDisabled={!isPageLoaded}
          shippingStatus={shippingStatus}
          setShippingStatus={setShippingStatus}
        />
      </TopFrame>

      {ordersList && ordersList?.length > 0 ? (
        <OrderList onClick={() => {}} list={ordersList} isEditing={isEditing} />
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
          isDisabled={isLoading}
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
