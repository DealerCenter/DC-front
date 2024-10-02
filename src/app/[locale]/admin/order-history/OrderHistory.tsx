import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Pagination from '@/common/components/pagination/Pagination'
import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import ButtonsRow from './components/ButtonsRow'
import OrderList from './components/OrderList'

import { changeOrderAdmin, getOrders } from '@/api/apiCalls'
import { ORDER_DATA } from '@/api/apiTypes'
import { routeName, ShippingStatus } from '@/common/helpers/constants'
import { useRouter } from '@/navigation'
import AddYourFirstTask from './components/AddYourFirstTask'
import LoadingText from '@/common/components/readyComponents/LoadingText'
import { message } from 'antd'

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

  const [shippingStatusOnEdit, setShippingStatusOnEdit] = useState<
    string | null
  >(null)

  // for filter when backend adds it
  const [dealerId, setDealerId] = useState<number | null>(null)
  const [receiverId, setReceiverId] = useState<number | null>(null)

  const [checkedOrderIds, setCheckedOrderIds] = useState<number[] | []>([])

  const handleAddOrderIdToList = (id: number) => {
    setCheckedOrderIds((prev) => [...prev, id])
  }

  const handleRemoveOrderIdFromList = (id: number) => {
    setCheckedOrderIds((prev) => prev.filter((orderId) => orderId !== id))
  }

  // Has to be done after backend is fixed
  // useEffect(() => {
  //   console.log('shipping status:', shippingStatus)
  //   console.log('dealer id:', dealerId)
  //   console.log('receiver id:', receiverId)
  // }, [dealerId, receiverId, shippingStatus])

  const handleEditSubmit = async () => {
    if (checkedOrderIds.length > 0) {
      try {
        for (const id of checkedOrderIds) {
          const response = await changeOrderAdmin(
            { status: shippingStatusOnEdit ? shippingStatusOnEdit : '' },
            id
          )
          console.log(response)
          message.success(t('order edited successfully'))
        }
        // clearing info after requests are done
        setCheckedOrderIds([])
        setShippingStatusOnEdit(null)
      } catch (error) {
        message.error(t('could not edit order'))
        console.error('Error editing orders:', error)
      }
    }
  }

  const router = useRouter()
  const t = useTranslations('')

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
    console.log('ids list', checkedOrderIds)
    //eslint-disable-next-line
  }, [checkedOrderIds])

  useEffect(() => {
    handleGetOrders()
    //eslint-disable-next-line
  }, [sortByCost, sortByCreateDate, shippingStatus, currentPage])

  if (!isPageLoaded) {
    return (
      <Container>
        <HeaderH4Bold text={t('order history')} />
        <LoaderBox>
          <LoadingText />
        </LoaderBox>
      </Container>
    )
  }

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
          setDealerId={setDealerId}
          setReceiverId={setReceiverId}
          clearOrderIdsList={() => setCheckedOrderIds([])}
          shippingStatusOnEdit={shippingStatusOnEdit}
          setShippingStatusOnEdit={setShippingStatusOnEdit}
          handleEditSubmit={handleEditSubmit}
        />
      </TopFrame>

      {ordersList && ordersList?.length > 0 ? (
        <OrderList
          list={ordersList}
          isEditing={isEditing}
          addOrderId={handleAddOrderIdToList}
          removeOrderId={handleRemoveOrderIdFromList}
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

const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`
