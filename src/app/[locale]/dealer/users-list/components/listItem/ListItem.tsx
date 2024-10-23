import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive'
import ListItemMobile from './ListItemMobile'
import ListItemFull from './ListItemFull'
import theme from '@/app/[locale]/theme'
import AppModal from '@/common/components/modal/AppModal'
import AddRecipient from '../addRecipient/AddRecipient'
import { VERIFICATION_STATUS_NAME } from '@/common/helpers/constants'

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
  updatedSuccessfully: boolean
  setUpdatedSuccessfully: (arg: boolean) => void
}

const ListItem = ({
  receiverData,
  handleDelete,
  updatedSuccessfully,

  setUpdatedSuccessfully,
}: Props) => {
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

  useEffect(() => {
    updatedSuccessfully && setIsModalOpen(false)
  }, [updatedSuccessfully])

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
          handleEdit={() => setIsModalOpen(true)}
        />
      ) : (
        <ListItemFull
          id={id}
          firstName={firstName}
          lastName={lastName}
          personalId={personalId}
          phoneNumber={phoneNumber}
          createdAt={createdAt}
          verificationStatus={verificationStatus as VERIFICATION_STATUS_NAME}
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
          setUpdatedSuccessfully={setUpdatedSuccessfully}
        />
      </AppModal>
    </>
  )
}

export default ListItem
