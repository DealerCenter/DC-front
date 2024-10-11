import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import OrderList from './components/OrderList'
import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import Pagination from '@/common/components/pagination/Pagination'
import ButtonsRow from './components/ButtonsRow'

import { orderedCars } from '@/assets/DummyData'

const itemsPerPage = 8

type Props = {}

const OrderHistory = (props: Props) => {
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isEditing, setIsEditing] = useState(false)
  const t = useTranslations('')

  return (
    <Container>
      <TopFrame>
        <HeaderH4Bold text={t('order history')} />
        <ButtonsRow isEditing={isEditing} setIsEditing={setIsEditing} />
      </TopFrame>
      <OrderList
        onClick={() => {}}
        list={orderedCars}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        isEditing={isEditing}
        setTotalPages={setTotalPages}
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
  }
`

const PaginationFrame = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.md};
`
