import React from 'react'
import styled from 'styled-components'
import CarDetailsBox from './CarDetailsBox'

import dummyCarImage from '@/assets/images/DummyCarImage.jpg'
import PriceAndStatusBox from './PriceAndStatusBox'

type Props = {}

const SearchListItem = (props: Props) => {
  return (
    <Container>
      <CarDetailsBox
        imageLink={dummyCarImage.src}
        brand='Mercedes Benz'
        year='2020'
        model='E class, Diesel'
        mileage='57,557 miles'
        location='Troy, MI'
      />
      <PriceAndStatusBox amount={5750} auctionState={'sold'} />
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
`
