import React from 'react'
import OrderListItem from './OrderListItem'
import styled from 'styled-components'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import { ORDER_DATA } from '@/api/apiTypes'

type Props = {
  onClick: () => void
  orderData?: ORDER_DATA[]
}

const OrderList = ({ onClick, orderData }: Props) => {
  return (
    <ListFrame>
      {orderData &&
        orderData.map((order, i) => (
          <OrderListItem
            onClick={onClick}
            imageLink={DummyImage.src}
            orderData={order}
            key={`${order.vin}82kj32${i}`}
            index={i}
            shippingStatus={'InContainer'}
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
`
