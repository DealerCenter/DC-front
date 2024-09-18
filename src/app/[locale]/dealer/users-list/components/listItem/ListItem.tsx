import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive'
import ListItemMobile from './ListItemMobile'
import ListItemFull from './ListItemFull'
import theme from '@/app/[locale]/theme'
import AppModal from '@/common/components/modal/AppModal'
import AddRecipient from '../addRecipient/AddRecipient'

type Props = {
  receiverData: {
    id: number
    firstName: string
    lastName: string
    personalId: string
    phoneNumber: string
    createdAt: string
    verificationStatus: string
  }
  handleDelete: (id: number) => void
}

const ListItem = ({ receiverData, handleDelete }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const {
    id,
    firstName,
    lastName,
    personalId,
    phoneNumber,
    verificationStatus,
    createdAt,
  } = receiverData

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          id={id}
          firstName={firstName}
          lastName={lastName}
          personalId={personalId}
          phoneNumber={phoneNumber}
          createdAt={createdAt}
          verificationStatus={verificationStatus}
          handleDelete={handleDelete}
        />
      ) : (
        <ListItemFull
          id={id}
          firstName={firstName}
          lastName={lastName}
          personalId={personalId}
          phoneNumber={phoneNumber}
          createdAt={createdAt}
          verificationStatus={verificationStatus}
          handleDelete={handleDelete}
          handleEdit={() => setIsModalOpen(true)}
        />
      )}
      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <AddRecipient
          onClose={() => setIsModalOpen(false)}
          receiverData={receiverData}
        />
      </AppModal>
    </>
  )
}

export default ListItem
