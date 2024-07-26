import React from 'react'
import OrderListItem from './OrderListItem'
import styled from 'styled-components'

import DummyImage from '@/assets/images/DummyCarImage.jpg'

type Props = {
  onClick: () => void
  currentPage: number
  itemsPerPage: number
  list: {
    brand: string
    model: string
    year: string
    serialNumber: string
    buyerFullName: string
    buyerPhoneNumber: string
    debt: number
    isArrived: boolean
    arrivalState: string
  }[]
}

const OrderList = ({ list, onClick, currentPage, itemsPerPage }: Props) => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = list.slice(startIndex, endIndex)

  return (
    <ListFrame>
      {currentItems.map((car, i) => (
        <OrderListItem
          onClick={onClick}
          imageLink={DummyImage.src}
          item={car}
          key={`${car.serialNumber}82kj32${i}`}
          index={i}
          shippingStep={2}
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
