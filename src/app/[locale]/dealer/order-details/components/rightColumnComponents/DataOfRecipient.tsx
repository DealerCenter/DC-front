import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import BoxWithHeader from '../BoxWithHeader'
import BasicButton from '@/common/components/appButton/BasicButton'
import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'

import addPersonIcon from '@/assets/icons/addPersonBlack.svg'
import editIcon from '@/assets/icons/editPencil.svg'
import { useTranslations } from 'next-intl'
import { RECEIVER_DATA } from '@/api/apiTypes'
import AppModal from '@/common/components/modal/AppModal'
import AddRecipient from '../../../users-list/components/addRecipient/AddRecipient'
import VerificationIcon from '@/common/components/readyIcons/VerificationIcon'

type Props = { receiverData?: RECEIVER_DATA; getOrderData: () => void }

const DataOfRecipient = ({ receiverData, getOrderData }: Props) => {
  const t = useTranslations('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <BoxWithHeader headerText='recipient data'>
      {receiverData ? (
        <DataFrame>
          <Name>{`${receiverData.firstName} ${receiverData.lastName}`}</Name>
          <Value>{receiverData.phoneNumber}</Value>
          <IconBox>
            <Icon>
              <VerificationIcon
                verificationStatus={receiverData.verificationStatus}
              />
            </Icon>
            <Icon onClick={() => setIsModalOpen(true)}>
              <Image src={editIcon} alt='pencil icon' />
            </Icon>
          </IconBox>
        </DataFrame>
      ) : (
        <AddPersonFrame>
          <Image src={addPersonIcon} alt='add person icon' />
          <Value>{t('not added recipient data')}</Value>
          <BasicButton onClick={() => {}}>{t('add recipient')}</BasicButton>
        </AddPersonFrame>
      )}

      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <AddRecipient
          onClose={() => setIsModalOpen(false)}
          receiverData={receiverData}
          setUpdatedSuccessfully={() => {}}
          isReadOnly
          getOrderData={getOrderData}
        />
      </AppModal>
    </BoxWithHeader>
  )
}

export default DataOfRecipient

const DataFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`

const Name = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Value = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`
const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddPersonFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`
