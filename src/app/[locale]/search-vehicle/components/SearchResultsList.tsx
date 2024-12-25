import React from 'react'
import styled from 'styled-components'
import SearchListItem from './SearchListItem'

type Props = { vehicleList: VehicleListResult[] }

const SearchResultsList = ({ vehicleList }: Props) => {
  return (
    <Container>
      {vehicleList.map((item) => (
        <SearchListItem key={`searchListItem${item.vin}`} vehicleList={item} />
      ))}
    </Container>
  )
}

export default SearchResultsList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`
