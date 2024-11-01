import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getOrders } from '@/api/apiCalls'
import { ORDER_DATA } from '@/api/apiTypes'
import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import { ShippingStatus } from '@/common/helpers/constants'
import OrderList from '../../../../common/components/orderList/OrderList'

import arrowDown from '@/assets/icons/sortArrows/arrowSortDown.svg'
import arrowUp from '@/assets/icons/sortArrows/arrowSortUp.svg'
import AppSort from '@/common/components/appSort/AppSort'
import Pagination from '@/common/components/pagination/Pagination'
import OrderHistoryFilter from './components/OrderHistoryFilter'
import Loader from '@/common/components/loader/Loader'

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
  const [ordersList, setOrdersList] = useState<ORDER_DATA[]>()
  const [sortByCost, setSortByCost] = useState<'asc' | 'desc' | null>(null)
  const [sortByCreateDate, setSortByCreateDate] = useState<
    'asc' | 'desc' | null
  >(null)
  const [shippingStatus, setShippingStatus] = useState<ShippingStatus>(null)

  const [receiverId, setReceiverId] = useState<number>()

  const t = useTranslations('')

  const handleGetOrders = async () => {
    setIsLoading(true)
    const response = await getOrders({
      page: currentPage,
      pageSize: ITEMS_PER_PAGE,
      sortByCreateDate: sortByCreateDate,
      sortByCost: sortByCost,
      status: shippingStatus,
      receiverId: receiverId,
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
  }, [sortByCost, sortByCreateDate, shippingStatus, currentPage, receiverId])

  if (!isPageLoaded) {
    return (
      <Container>
        <HeaderH4Bold text={t('order history')} />
        <Loader height={300} />
      </Container>
    )
  }

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
      {ordersList?.length !== 0 ? (
        <OrderList ordersList={ordersList} isLoading={isLoading} />
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <NoOrders>{t('orders not found')}</NoOrders>
          )}
        </>
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

const NoOrders = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  width: 100%;
  opacity: 0.7;
  margin-left: 32px;
`
