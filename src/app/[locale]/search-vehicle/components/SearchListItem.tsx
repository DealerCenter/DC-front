import React from 'react'
import styled from 'styled-components'
import CarDetailsBox from './CarDetailsBox'

import dummyCarImage from '@/assets/images/DummyCarImage.jpg'
import PriceAndStatusBox from './PriceAndStatusBox'

type Props = { vehicleList: VehicleListResult; onClick: () => void }

const SearchListItem = ({ vehicleList, onClick }: Props) => {
  const {
    odometer,
    year,
    car_photo,
    make,
    model,
    location,
    engine_type,
    color,
    active_bidding,
  } = vehicleList

  return (
    <Container onClick={onClick}>
      <CarDetailsBox
        imageLink={dummyCarImage.src}
        brand={make}
        year={year.toString()}
        model={model}
        mileage={`${odometer} miles`}
        location={location}
        engineType={engine_type}
        color={color}
      />
      <PriceAndStatusBox
        amount={active_bidding[0].current_bid}
        auctionState={'not sold'}
      />
    </Container>
  )
}

export default SearchListItem

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing?.md};

  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors?.white};

  flex: 1;

  @media ${({ theme }) => theme.media?.notSm} {
    cursor: pointer;
  }
`
