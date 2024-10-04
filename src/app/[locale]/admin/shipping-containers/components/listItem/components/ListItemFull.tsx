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

const orderData = {
  additionalDetails: null,
  carCategory: 'Jeep',
  carCost: 9000,
  carDetails: null,
  carImages: [],
  container: {},
  createdAt: '2024-07-20T07:43:55.763Z',
  exactAddress: 'Somewhere',
  id: 1,
  isInsured: true,
  manufactureYear: 2012,
  manufacturer: 'Toyota',
  mileage: 70000,
  model: 'Rav 4',
  receiver: {
    createdAt: '2024-09-18T06:34:16.261Z',
    firstName: 'dssdd',
    id: 43,
    idImageUrl: '43/personal_id.png',
    isJuridical: false,
    lastName: 'sdsddds',
    personalId: '2333443',
    phoneNumber: '34434343',
    updatedAt: '2024-09-18T06:34:16.537Z',
    verificationStatus: 'PENDING',
  },
  state: {
    id: 1,
    createdAt: '2024-07-20T07:43:00.906Z',
    updatedAt: '2024-07-20T07:43:00.906Z',
    name: 'California',
  },
  status: 'InAmericanWarehouse',
  transportationCost: 2200,
  updatedAt: '2024-10-02T12:45:55.728Z',
  vin: '233444',
}

type Props = {
  onClick: () => void
  brandName: string
  link: string
  departureDate: string
  arrivalDate: string
  id: number

  isDropdownOpen: boolean
  setIsDropdownOpen: (arg: boolean) => void
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
          <DropdownIcon
            isOpen={isDropdownOpen}
            onClickWithEvent={handleDropdown}
          />
          <NameLabel>{brandName}</NameLabel>
        </LabelBox>
        <LinkLabel>{link}</LinkLabel>
        <Label>{departureDate}</Label>
        <Label>{arrivalDate}</Label>
        <Label>{id}</Label>
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
      {isDropdownOpen && (
        <>
          <ListItemFullDropdown
            key={`listItemFullDropdown$}`}
            onClick={() => {}}
            orderData={orderData}
          />
          <ListItemFullDropdown
            key={`listItemFullDropdown$}`}
            onClick={() => {}}
            orderData={orderData}
            dashedLineHeight={107}
          />
        </>
      )}
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

  cursor: pointer;
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
  cursor: pointer;
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
