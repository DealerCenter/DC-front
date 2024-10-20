import React from 'react'
import styled from 'styled-components'
import SearchListItem from './SearchListItem'

type Props = {}

const SearchResultsList = (props: Props) => {
  return (
    <Container>
      <SearchListItem auctionState={'not sold'} />
      <SearchListItem auctionState={'pending'} />
      <SearchListItem auctionState={'sold'} />
      <SearchListItem auctionState={'not sold'} />
    </Container>
  )
}

export default SearchResultsList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`
