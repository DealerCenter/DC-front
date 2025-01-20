import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive'
import ListItemMobile from './components/ListItemMobile'
import ListItemFull from './components/ListItemFull'
import theme from '@/app/[locale]/theme'
import { CONTAINER_GET_RES } from '@/api/apiTypes'
import { formatDate } from '@/common/helpers/simpleFunctions'

type Props = {
  onClick: () => void
  containerData: CONTAINER_GET_RES
}

const ListItem = ({
  onClick,
  containerData: { name, trackingUrl, id, createdAt, updatedAt, orders },
}: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const createdAtFormatted = formatDate(createdAt)
  const updatedAtFormatted = formatDate(updatedAt)

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          onClick={onClick}
          brandName={name}
          link={trackingUrl}
          departureDate={createdAtFormatted}
          arrivalDate={updatedAtFormatted}
          id={id}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      ) : (
        <ListItemFull
          onClick={onClick}
          brandName={name}
          link={trackingUrl}
          departureDate={createdAtFormatted}
          arrivalDate={updatedAtFormatted}
          id={id}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          orders={orders}
        />
      )}
    </>
  )
}

export default ListItem
