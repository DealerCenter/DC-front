import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

import { formatDate } from '@/common/helpers/simpleFunctions'
import { verificationStatusName } from '@/common/helpers/constants'
import DeleteWarning from '../addRecipient/components/DeleteWarning'
import AppModal from '@/common/components/modal/AppModal'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import uncheckedYellow from '@/assets/icons/uncheckedYellow.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'

type Props = {
  id: number
  firstName: string
  lastName: string
  personalId: string
  phoneNumber: string
  createdAt: string
  verificationStatus: string
  handleDelete: (id: number) => void
}

const ListItemFull = ({
  id,
  firstName,
  lastName,
  personalId,
  phoneNumber,
  createdAt,
  verificationStatus,
  handleDelete,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formattedDate = formatDate(createdAt)

  return (
    <>
      <Container>
        <LabelBox>
          <NameLabel>{`${firstName} ${lastName}`}</NameLabel>
          <IdLabel>{personalId}</IdLabel>
        </LabelBox>
        <Label>{phoneNumber}</Label>
        <Label>{formattedDate}</Label>
        <Label>
          {verificationStatus === verificationStatusName.VERIFIED ? (
            <Image
              src={checkedGreen}
              alt='checked icon'
              width={20}
              height={20}
            />
          ) : verificationStatus === verificationStatusName.UNVERIFIED ? (
            <Image
              src={uncheckedRed}
              alt='unchecked icon'
              width={20}
              height={20}
            />
          ) : (
            verificationStatus === verificationStatusName.PENDING && (
              <Image
                src={uncheckedYellow}
                alt='pending icon'
                width={20}
                height={20}
              />
            )
          )}
        </Label>
        <IconBox>
          <Icon>
            <Image
              src={editPencil}
              alt='edit icon'
              onClick={() => {
                console.log('edit')
              }}
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
          onDelete={() => {
            handleDelete(id)
            setIsModalOpen(false)
          }}
          nameOfReceiver={`${firstName} ${lastName}`}
        />
      </AppModal>
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
  padding: 0 16px 0 32px;

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};
`

const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 120px;
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
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
const CheckmarkBox = styled.div``
