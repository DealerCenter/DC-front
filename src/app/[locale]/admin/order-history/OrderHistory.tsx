import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Pagination from '@/common/components/pagination/Pagination'
import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import ButtonsRow from './components/ButtonsRow'
import OrderList from './components/OrderList'

import { changeOrderAdmin, getOrders } from '@/api/apiCalls'
import { CONTAINER_GET_RES, ORDER_DATA } from '@/api/apiTypes'
import Loader from '@/common/components/loader/Loader'
import { routeName, ShippingStatus } from '@/common/helpers/constants'
import { useRouter } from '@/navigation'
import { message } from 'antd'
import AddYourFirstTask from './components/AddYourFirstTask'
import LoadingOverlay from '@/common/components/loader/LoadingOverlay'

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
  >('desc')

  const [shippingStatusOnEdit, setShippingStatusOnEdit] = useState<
    string | null
  >(null)

  // for filter
  const [shippingStatus, setShippingStatus] = useState<ShippingStatus>(null)
  const [dealerId, setDealerId] = useState<number>()
  const [receiverId, setReceiverId] = useState<number>()

  const [checkedOrderIds, setCheckedOrderIds] = useState<number[] | []>([])
  const [containerToBind, setContainerToBind] =
    useState<CONTAINER_GET_RES | null>(null)

  const handleAddOrderIdToList = (id: number) => {
    setCheckedOrderIds((prev) => [...prev, id])
  }

  const handleRemoveOrderIdFromList = (id: number) => {
    setCheckedOrderIds((prev) => prev.filter((orderId) => orderId !== id))
  }

  const handleClearEdit = () => {
    setCheckedOrderIds([])
    setShippingStatusOnEdit(null)
    setContainerToBind(null)
  }

  const handleEditSubmit = async () => {
    if (checkedOrderIds.length > 0) {
      setIsLoading(true)
      try {
        for (const id of checkedOrderIds) {
          const response = await changeOrderAdmin(
            {
              status: shippingStatusOnEdit ? shippingStatusOnEdit : '',
              containerId: containerToBind?.id,
            },
            id
          )
          message.success(t('order edited successfully'))
        }
        setIsLoading(false)
        // clearing info after requests are done
        handleClearEdit()
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
        receiverId: receiverId,
        dealerId: dealerId,
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
  }, [
    sortByCost,
    sortByCreateDate,
    shippingStatus,
    currentPage,
    receiverId,
    dealerId,
  ])

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
        <ButtonsRow
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setSortByCost={setSortByCost}
          setSortByCreateDate={setSortByCreateDate}
          isButtonsDisabled={!isPageLoaded}
          shippingStatus={shippingStatus}
          setShippingStatus={setShippingStatus}
          dealerId={dealerId}
          setDealerId={setDealerId}
          receiverId={receiverId}
          setReceiverId={setReceiverId}
          clearEdit={handleClearEdit}
          shippingStatusOnEdit={shippingStatusOnEdit}
          setShippingStatusOnEdit={setShippingStatusOnEdit}
          handleEditSubmit={handleEditSubmit}
          containerToBind={containerToBind}
          setContainerToBind={setContainerToBind}
        />
      </TopFrame>

      {ordersList && ordersList?.length > 0 ? (
        <OrderList
          list={ordersList}
          isEditing={isEditing}
          addOrderId={handleAddOrderIdToList}
          removeOrderId={handleRemoveOrderIdFromList}
          isLoading={isLoading}
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
