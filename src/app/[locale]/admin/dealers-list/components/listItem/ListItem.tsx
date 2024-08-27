import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive'
import ListItemMobile from './ListItemMobile'
import ListItemFull from './ListItemFull'
import theme from '@/app/[locale]/theme'

type Props = {
  onClick: () => void
  userData: {
    fullName: string
    id: string
    mobile: string
    dateOfAddition: string
    isVerified: boolean
  }
}

const ListItem = ({
  onClick,
  userData: { fullName, id, mobile, dateOfAddition, isVerified },
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          onClick={onClick}
          fullName={fullName}
          id={id}
          mobile={mobile}
          dateOfAddition={dateOfAddition}
          isVerified={isVerified}
        />
      ) : (
        <ListItemFull
          onClick={onClick}
          fullName={fullName}
          id={id}
          mobile={mobile}
          dateOfAddition={dateOfAddition}
          isVerified={isVerified}
        />
      )}
    </>
  )
}

export default ListItem
