import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import styled, { css } from 'styled-components'

import { DEALERS_DATA } from '@/api/apiTypes'
import { formatDate } from '@/common/helpers/simpleFunctions'

import DeleteWarning from '@/common/components/deleteWarning/DeleteWarning'
import AppModal from '@/common/components/modal/AppModal'
import VerificationIcon from '@/common/components/readyIcons/VerificationIcon'
import ListItemFullDropdown from './ListItemFullDropdown'

import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import DropdownIcon from '@/common/components/readyIcons/DropdownIcon'

type Props = {
  onClick: () => void
  userData: DEALERS_DATA
  isDropdownOpen: boolean
  setIsDropdownOpen: (arg: boolean) => void
  isDisabled?: boolean
  onDeleteDealer: (orderId: number) => void
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
    receivers,
  },
  isDropdownOpen,
  setIsDropdownOpen,
  isDisabled,
  onDeleteDealer,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const t = useTranslations('')

  const withReceivers = receivers && receivers?.length > 0

  const handleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if (receivers?.length === 0) return

    !isDisabled && setIsDropdownOpen(!isDropdownOpen)
  }

  const handleUserDelete = () => {
    onDeleteDealer(id)
    setIsModalOpen(false)
  }

  return (
    <>
      <Container>
        <LabelBox>
          <DropdownIcon
            isOpen={isDropdownOpen}
            onClickWithEvent={handleDropdown}
            isShowing={withReceivers}
          />
          <NameAndIdBox>
            <NameLabel>{`${firstName} ${lastName}`}</NameLabel>
            <IdLabel>{personalId}</IdLabel>
          </NameAndIdBox>
        </LabelBox>
        <Label>{phoneNumber}</Label>
        <Label>{formatDate(createdAt)}</Label>
        <DebtLabel>{`$ NA`}</DebtLabel>
        <IconBox>
          {isDropdownOpen && receivers ? (
            <>
              <ReceiversNumberLabel>{receivers.length}</ReceiversNumberLabel>
              <VerificationIcon
                verificationStatus={idImageVerificationStatus}
              />
            </>
          ) : (
            <>
              <VerificationIcon
                verificationStatus={idImageVerificationStatus}
              />
              <Icon onClick={isDisabled ? () => {} : onClick}>
                <Image src={editPencil} alt='edit icon' />
              </Icon>
              <Icon onClick={() => setIsModalOpen(true)}>
                <Image src={trashCan} alt='trash icon' />
              </Icon>
            </>
          )}
        </IconBox>
      </Container>
      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <DeleteWarning
          onCancel={() => setIsModalOpen(false)}
          onDelete={handleUserDelete}
          header={t('delete recipient')}
          text={t('delete data warning')}
          deletingItemText={`${firstName} ${lastName}`}
        />
      </AppModal>
      {isDropdownOpen && receivers && (
        <ReceiversListDropdownFrame>
          {receivers.map((receiver, i) => (
            <ListItemFullDropdown
              key={`listItemFullDropdown${i}`}
              onClick={() => {}}
              receiverData={receiver}
            />
          ))}
        </ReceiversListDropdownFrame>
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

const ReceiversNumberLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 40px;
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
  cursor: pointer;
`

const DebtLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
  cursor: default;
`

const NameAndIdBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`

const ReceiversListDropdownFrame = styled.div`
  max-height: 500px;
  overflow-y: auto;
`
