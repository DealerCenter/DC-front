import React from 'react'
import SearchComponent from './components/searchComponent/SearchComponent'
import styled from 'styled-components'
import PageHeader from './components/pageHeader/PageHeader'
import Image from 'next/image'
import ContainersImage from './components/ContainersImage'
import CarsAtAuctionCarousel from './components/CarsOnAuctionCarousel/CarsAtAuctionCarousel'
import DecorativeLabelsBox from './components/searchComponent/components/DecorativeLabelsBox'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <>
      <TopContainer>
        <PageHeader />
        <SearchComponent />
        <ContainersImage />
        <CarsAtAuctionCarousel
          onSeeAllClick={() => console.log('see all clicked')}
        />
        <DecorativeLabelsBox />
      </TopContainer>
    </>
  )
}

export default LandingPage

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 80px 0;
  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }
  
  @media ${({ theme }) => theme.media?.sm} {
    width: 375px;
  }
`
