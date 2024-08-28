import React from 'react'
import SearchComponent from './components/searchComponent/SearchComponent'
import styled from 'styled-components'
import PageHeader from './components/pageHeader/PageHeader'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <TopContainer>
      <PageHeader />
      <SearchComponent />
    </TopContainer>
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
`
