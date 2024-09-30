import Image from 'next/image'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import AppModal from '@/common/components/modal/AppModal'
import DeleteWarning from '../../DeleteWarning'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import dropDownIcon from '@/assets/icons/arrowDown.svg'
import ListItemFullDropdown from './ListItemFullDropdown'
import { DEALERS_DATA, RECEIVER_DATA } from '@/api/apiTypes'
import { formatDate } from '@/common/helpers/simpleFunctions'

type Props = {
  onClick: () => void
  userData: DEALERS_DATA
  receiversList: RECEIVER_DATA[] | undefined
  isDropdownOpen: boolean
  setIsDropdownOpen: (arg: boolean) => void
  setDealerId: (arg: number) => void
  isDisabled?: boolean
}

const ListItemFull = ({
  onClick,
  userData: {
    id,
    personalId,
    firstName,
    lastName,
    createdAt,
    phoneNumber,
    idImageVerificationStatus,
  },
  receiversList,
  isDropdownOpen,
  setIsDropdownOpen,
  setDealerId,
  isDisabled,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDropdown = (e: any) => {
    e.stopPropagation()
    setDealerId(id)
    !isDisabled && setIsDropdownOpen(!isDropdownOpen)
  }

  // console.log('log from item id:', id)

  return (
    <>
      <Container>
        <LabelBox>
          <DropdownIcon isOpen={isDropdownOpen} onClick={handleDropdown}>
            <Image src={dropDownIcon} alt='down arrow icon' width={12} />
          </DropdownIcon>
          <NameAndIdBox>
            <NameLabel>{`${firstName} ${lastName}`}</NameLabel>
            <IdLabel>{personalId}</IdLabel>
          </NameAndIdBox>
        </LabelBox>
        <Label>{phoneNumber}</Label>
        <Label>{formatDate(createdAt)}</Label>
        <DebtLabel>{`$ 5750`}</DebtLabel>
        <IconBox>
          <Icon>
            {idImageVerificationStatus ? (
              <Image
                src={checkedGreen}
                alt='checked icon'
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={uncheckedRed}
                alt='unchecked icon'
                width={20}
                height={20}
              />
            )}
          </Icon>
          <Icon>
            <Image
              src={editPencil}
              alt='edit icon'
              onClick={isDisabled ? () => {} : onClick}
            />
          </Icon>
          <Icon>
            <Image
              src={trashCan}
              alt='trash icon'
              onClick={() => setIsModalOpen(true)}
            />
          </Icon>
        </IconBox>
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
        receiversList &&
        receiversList.map((receiver, i) => (
          <ListItemFullDropdown
            key={`listItemFullDropdown${receiver.personalId}`}
            onClick={() => {}}
            receiverData={receiver}
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
  height: 75px;
  padding: 0 16px 0 8px;

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};
`

const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 128px;
  cursor: pointer;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 120px;
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: 13px;
`

const NameLabel = styled(Label)`
  font-weight: 700;
  justify-content: start;
  text-align: start;
`

const IdLabel = styled(Label)`
  align-items: start;
  justify-content: start;
  color: ${({ theme }) => theme.colors?.main_gray_56};
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`

const DebtLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const NameAndIdBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`

type DropdownIconProps = { isOpen: boolean }

const DropdownIcon = styled.div<DropdownIconProps>`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}

  cursor: pointer;
`
