import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive'
import ListItemMobile from './ListItemMobile'
import ListItemFull from './ListItemFull'
import theme from '@/app/[locale]/theme'

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

const ListItem = ({
  receiverData: {
    id,
    firstName,
    lastName,
    personalId,
    phoneNumber,
    verificationStatus,
    createdAt,
  },
  handleDelete,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

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
        />
      )}
    </>
  )
}

export default ListItem
