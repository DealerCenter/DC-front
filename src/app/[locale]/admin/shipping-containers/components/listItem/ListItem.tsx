import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive'
import ListItemMobile from './ListItemMobile'
import ListItemFull from './ListItemFull'
import theme from '@/app/[locale]/theme'
import { CONTAINER_GET_RES } from '@/api/apiTypes'
import { formatDate } from '@/common/helpers/simpleFunctions'

type Props = {
  onClick: () => void
  containerData: CONTAINER_GET_RES

  // containerData: {
  //   brandName: string
  //   link: string
  //   departureDate: string
  //   arrivalDate: string
  //   numberOfCars: string
  // }

  // name: string
  // trackingUrl: string
  // id: number
  // createdAt: string
  // updatedAt: string
}

const ListItem = ({
  onClick,
  // containerData: { brandName, link, departureDate, arrivalDate, numberOfCars },
  containerData: { name, trackingUrl, id, createdAt, updatedAt },
}: Props) => {
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
        />
      ) : (
        <ListItemFull
          onClick={onClick}
          brandName={name}
          link={trackingUrl}
          departureDate={createdAtFormatted}
          arrivalDate={updatedAtFormatted}
          id={id}
        />
      )}
    </>
  )
}

export default ListItem
