import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { formatDate } from '@/common/helpers/simpleFunctions'
import { VERIFICATION_STATUS_NAME } from '@/common/helpers/constants'
import AppModal from '@/common/components/modal/AppModal'

import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import VerificationIcon from '@/common/components/readyIcons/verificationIcon'
import DeleteWarning from '@/common/components/deleteWarning/DeleteWarning'

type Props = {
  id: number
  firstName: string
  lastName: string
  personalId: string
  phoneNumber: string
  createdAt: string
  verificationStatus: string
  handleDelete: (id: number) => void
  handleEdit: () => void
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
  handleEdit,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const t = useTranslations('')

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
          <VerificationIcon verificationStatus={verificationStatus} />
        </Label>
        <IconBox>
          <Icon>
            <Image src={editPencil} alt='edit icon' onClick={handleEdit} />
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
          header={t('delete recipient')}
          text={t('delete data warning')}
          deletingItemText={`${t('recipient person')} ${firstName} ${lastName}`}
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

  cursor: pointer;
`
