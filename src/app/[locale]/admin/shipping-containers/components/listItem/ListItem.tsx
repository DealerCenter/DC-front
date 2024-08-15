import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import { useMediaQuery } from 'react-responsive'
import ListItemMobile from './ListItemMobile'
import ListItemFull from './ListItemFull'
import theme from '@/app/[locale]/theme'

type Props = {
  onClick: () => void
  containerData: {
    brandName: string
    link: string
    departureDate: string
    arrivalDate: string
    numberOfCars: string
  }
}

const ListItem = ({
  onClick,
  containerData: { brandName, link, departureDate, arrivalDate, numberOfCars },
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          onClick={onClick}
          brandName={brandName}
          link={link}
          departureDate={departureDate}
          arrivalDate={arrivalDate}
          numberOfCars={numberOfCars}
        />
      ) : (
        <ListItemFull
          onClick={onClick}
          brandName={brandName}
          link={link}
          departureDate={departureDate}
          arrivalDate={arrivalDate}
          numberOfCars={numberOfCars}
        />
      )}
    </>
  )
}

export default ListItem
