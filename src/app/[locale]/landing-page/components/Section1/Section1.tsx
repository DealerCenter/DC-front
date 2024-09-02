import React from 'react'
import styled from 'styled-components'

import PageHeader from './components/pageHeader/PageHeader'
import SearchComponent from './components/searchComponent/SearchComponent'
import ContainersImage from './components/ContainersImage'
import CarsAtAuctionCarousel from './components/CarsOnAuctionCarousel/CarsAtAuctionCarousel'
import DecorativeLabelsBox from './components/searchComponent/components/DecorativeLabelsBox'

type Props = {}

const Section1 = (props: Props) => {
  return (
    <Container>
      <PageHeader />
      <SearchComponent />
      <ContainersImage />
      <CarsAtAuctionCarousel
        onSeeAllClick={() => console.log('see all clicked')}
      />
      <DecorativeLabelsBox />
    </Container>
  )
}

export default Section1

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 80px 0;
  width: 1200px;
  margin-bottom: 120px;

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 375px;
  }
`
