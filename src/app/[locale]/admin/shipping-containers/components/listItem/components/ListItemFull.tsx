import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import AppModal from '@/common/components/modal/AppModal'
import DeleteWarning from '../../../../order-history/components/bindContainer/components/DeleteWarning'
import DropdownIcon from '@/common/components/readyIcons/DropdownIcon'
import ListItemFullDropdown from './ListItemFullDropdown'
import { ORDER_DATA } from '@/api/apiTypes'

type Props = {
  onClick: () => void
  brandName: string
  link: string
  departureDate: string
  arrivalDate: string
  id: number

  isDropdownOpen: boolean
  setIsDropdownOpen: (arg: boolean) => void
  orders: ORDER_DATA[]
}

const ListItemFull = ({
  onClick,
  brandName,
  link,
  departureDate,
  arrivalDate,
  id,
  isDropdownOpen,
  setIsDropdownOpen,
  orders,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      <Container onClick={onClick}>
        <LabelBox>
          {orders?.length > 0 ? (
            <DropdownIcon
              isOpen={isDropdownOpen}
              onClickWithEvent={handleDropdown}
            />
          ) : (
            <div style={{ width: 36 }} />
          )}

          <NameLabel>{brandName}</NameLabel>
        </LabelBox>
        <LinkLabel>{link}</LinkLabel>
        <Label>{departureDate}</Label>
        {/* <Label>{arrivalDate}</Label> */}
        <Label>{`${orders.length}/4`}</Label>
      </Container>
      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <DeleteWarning
          onCancel={() => setIsModalOpen(false)}
          onDelete={() => console.log('delete')}
        />
      </AppModal>
      {isDropdownOpen &&
        orders.length > 0 &&
        orders.map((i) => (
          <ListItemFullDropdown
            key={i.id}
            onClick={() => {}}
            orderData={i as unknown as ORDER_DATA}
          />
        ))}
    </>
  )
}

export default ListItemFull

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 72px;
  padding: 0 50px 0 12px;

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};

  /* cursor: pointer; */
`

const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 120px;
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  /* cursor: pointer; */
`

const NameLabel = styled(Label)`
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  justify-content: start;
  text-align: start;
`

const IdLabel = styled(Label)`
  align-items: start;
  justify-content: start;
`

const LinkLabel = styled(Label)`
  color: ${({ theme }) => theme.colors?.link_blue};
`
