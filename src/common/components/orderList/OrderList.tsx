import React from 'react'
import OrderListItem from './OrderListItem'
import styled from 'styled-components'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import { ORDER_DATA } from '@/api/apiTypes'
import { routeName, SHIPPING_STATUS } from '@/common/helpers/constants'
import { useRouter } from '@/navigation'

type Props = {
  ordersList?: ORDER_DATA[]
}

const OrderList = ({ ordersList }: Props) => {
  const router = useRouter()

  return (
    <ListFrame>
      {ordersList &&
        ordersList.map((order, i) => (
          <OrderListItem
            onClick={() => router.push(`${routeName.dealerOrder}/${order.id}`)}
            imageLink={DummyImage.src}
            orderData={order}
            key={`${order.vin}82kj32${i}`}
            index={i}
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
