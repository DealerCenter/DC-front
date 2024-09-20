import React, { useEffect } from 'react'
import OrderListItem from './OrderListItem'
import styled, { css } from 'styled-components'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import OrderListHeader from './OrderListHeader'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { ORDERS_GET_RES } from '@/api/apiTypes'

type Props = {
  onClick: () => void
  currentPage: number
  itemsPerPage: number
  list: ORDERS_GET_RES[]
  isEditing: boolean
  setTotalPages: (arg1: number) => void
  setCurrentPage: (arg1: number) => void
}

const OrderList = ({
  list,
  onClick,
  currentPage,
  itemsPerPage,
  isEditing,
  setTotalPages,
  setCurrentPage,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <ListFrame>
      {!isMobile && <OrderListHeader />}
      {list.map((car, i) => (
        <OrderListItem
          onClick={onClick}
          imageLink={DummyImage.src}
          item={car}
          key={`${car.id}82kj32${i}`}
          isEditing={isEditing}
        />
      ))}
    </ListFrame>
  )
}

export default OrderList

const ListFrame = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: unset;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 16px;
  }
`
