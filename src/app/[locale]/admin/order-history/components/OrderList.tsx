import React, { useEffect } from 'react'
import OrderListItem from './OrderListItem'
import styled from 'styled-components'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import OrderListHeader from './OrderListHeader'
import { useAdminState } from '../../AdminStateContext'

type Props = {
  onClick: () => void
  currentPage: number
  itemsPerPage: number
  list: {
    brand: string
    model: string
    year: string
    vinCode: string
    buyerFullName: string
    buyerPhoneNumber: string
    debt: number
    isArrived: boolean
    arrivalState: string
  }[]
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
  const { activeOptionStatus } = useAdminState()

  const filteredList = activeOptionStatus
    ? list.filter((cur) => cur.arrivalState === activeOptionStatus)
    : list

  useEffect(() => {
    setCurrentPage(1)
  }, [activeOptionStatus, setCurrentPage])

  setTotalPages(Math.ceil(filteredList.length / itemsPerPage))

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredList.slice(startIndex, endIndex)

  return (
    <ListFrame>
      {isEditing && <OrderListHeader />}
      {currentItems.map((car, i) => (
        <OrderListItem
          onClick={onClick}
          imageLink={DummyImage.src}
          item={car}
          key={`${car.vinCode}82kj32${i}`}
          index={i}
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
`
