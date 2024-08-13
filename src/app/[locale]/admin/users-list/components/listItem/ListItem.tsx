import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive'
import ListItemMobile from './ListItemMobile'
import ListItemFull from './ListItemFull'
import theme from '@/app/[locale]/theme'

type Props = {
  userData: {
    fullName: string
    id: string
    mobile: string
    dateOfAddition: string
    isVerified: boolean
  }
}

const ListItem = ({
  userData: { fullName, id, mobile, dateOfAddition, isVerified },
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          fullName={fullName}
          id={id}
          mobile={mobile}
          dateOfAddition={dateOfAddition}
          isVerified={isVerified}
        />
      ) : (
        <ListItemFull
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