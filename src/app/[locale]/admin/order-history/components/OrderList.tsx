import React, { useEffect } from 'react'
import OrderListItem from './OrderListItem'
import styled, { css } from 'styled-components'

import DummyImage from '@/assets/images/DummyCarImage.jpg'
import OrderListHeader from './OrderListHeader'
import { useAdminState } from '../../AdminStateContext'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

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
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const { activeOptionStatus, sortOption } = useAdminState()

  const filteredList = activeOptionStatus
    ? list.filter((cur) => cur.arrivalState === activeOptionStatus)
    : list

  const OrderedFilteredList = () => {
    switch (sortOption) {
      case 'price ascending':
        return sortOption
          ? filteredList.sort((a, b) => a.debt - b.debt)
          : filteredList
      case 'price descending':
        return sortOption
          ? filteredList.sort((a, b) => b.debt - a.debt)
          : filteredList
      default:
        return filteredList
    }
  }

  useEffect(() => {
    setCurrentPage(1)
  }, [activeOptionStatus, setCurrentPage])

  setTotalPages(Math.ceil(filteredList.length / itemsPerPage))

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = OrderedFilteredList().slice(startIndex, endIndex)

  return (
    <ListFrame>
      {!isMobile && <OrderListHeader />}
      {currentItems.map((car, i) => (
        <OrderListItem
          onClick={onClick}
          imageLink={DummyImage.src}
          item={car}
          key={`${car.vinCode}82kj32${i}`}
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
