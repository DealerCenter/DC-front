import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import OrderList from '@/common/components/orderList/OrderList'
import Pagination from '@/common/components/pagination/Pagination'
import HeaderH5Bold from '@/common/components/textComponents/HeaderH5Bold'

import { ORDER_DATA, ORDERS_GET_RES } from '@/api/apiTypes'
import LoadingText from '@/common/components/readyComponents/LoadingText'

const itemsPerPageCurrent = 4

const itemsPerPageArchive = 2

type Props = { headerText: string; ordersResponse: ORDERS_GET_RES }

const OrderListBox = ({ headerText, ordersResponse }: Props) => {
  const [currentPageCurrent, setCurrentPageCurrent] = useState(1)
  const [currentPageArchive, setCurrentPageArchive] = useState(1)

  const [ordersData, setOrdersData] = useState<ORDER_DATA[]>()

  useEffect(() => {
    ordersResponse && setOrdersData(ordersResponse.data)
  }, [ordersResponse])

  const t = useTranslations('')

  if (!ordersData) {
    return <LoadingText />
  }

  return (
    <Container>
      <HeaderFrame>
        <HeaderH5Bold text={headerText} />
      </HeaderFrame>
      <OrderList ordersList={ordersResponse.data} />
      <PaginationFrame>
        <Pagination
          currentPage={ordersResponse.page}
          numOfPages={ordersResponse.pageCount}
          setCurrentPage={() => {}}
        />
      </PaginationFrame>
      {/* <HeaderFrame>
        <HeaderH5Bold text={`${t('archive')} ${'not working'}`} />
      </HeaderFrame>
      <OrderList
        onClick={() => {}}
        list={orderedCars}
        currentPage={currentPageArchive}
        itemsPerPage={itemsPerPageArchive}
      />
      <PaginationFrame>
        <Pagination
          currentPage={currentPageArchive}
          numOfPages={totalPagesArchive}
          setCurrentPage={setCurrentPageArchive}
        />
      </PaginationFrame> */}
    </Container>
  )
}

export default OrderListBox

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};

  padding: ${({ theme }) => theme.spacing?.xl};
`

const PaginationFrame = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.md};
`

const HeaderFrame = styled.div`
  padding-left: ${({ theme }) => theme.spacing?.md};
  padding-bottom: ${({ theme }) => theme.spacing?.md};
`
