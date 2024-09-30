import React, { useEffect } from 'react'
import OrderListItem from './OrderListItem'
import styled, { css } from 'styled-components'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import OrderListHeader from './OrderListHeader'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { ORDER_DATA, ORDERS_GET_RES } from '@/api/apiTypes'

type Props = {
  list: ORDER_DATA[]
  onClick: () => void
  isEditing: boolean
}

const OrderList = ({ list, onClick, isEditing }: Props) => {
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
