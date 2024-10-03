import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { VERIFICATION_STATUS_NAME } from '@/common/helpers/constants'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import uncheckedYellow from '@/assets/icons/uncheckedYellow.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import calendarIcon from '@/assets/icons/calendar.svg'
import AppModal from '@/common/components/modal/AppModal'
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

const ListItemMobile = ({
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

  return (
    <Container>
      <NameFrame>
        <LabelAndIconBox>
          <NameLabel>{`${firstName} ${lastName}`}</NameLabel>
          <Icon>
            {verificationStatus === VERIFICATION_STATUS_NAME.VERIFIED ? (
              <Image src={checkedGreen} alt='checked icon' />
            ) : verificationStatus === VERIFICATION_STATUS_NAME.UNVERIFIED ? (
              <Image src={uncheckedRed} alt='unchecked icon' />
            ) : (
              verificationStatus === VERIFICATION_STATUS_NAME.PENDING && (
                <Image src={uncheckedYellow} alt='pending icon' />
              )
            )}
          </Icon>
        </LabelAndIconBox>
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
      </NameFrame>
      <DetailsFrame>
        <DetailsBox>
          <Label>
            {t('personal number')}
            {':'}
          </Label>
          <ValueLabel>{personalId}</ValueLabel>
        </DetailsBox>
        <DetailsBox>
          <Label>
            {t('mobile number')}
            {':'}
          </Label>
          <ValueLabel>{phoneNumber}</ValueLabel>
        </DetailsBox>
      </DetailsFrame>
      <LabelAndIconBox>
        <Image src={calendarIcon} alt='calendar icon' />
        <Label>
          {t('added')} {createdAt}
        </Label>
      </LabelAndIconBox>
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
    </Container>
  )
}

export default ListItemMobile

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  flex: 1;
  gap: 16px;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};
`

const NameFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LabelAndIconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const NameLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: start;
  font-weight: 700;
  font-size: 16px;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: 14px;
`

const ValueLabel = styled.label`
  align-items: start;
  justify-content: start;
  font-size: ${({ theme }) => theme.fontSizes?.small};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
const DetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const DetailsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
  align-items: center;
`
