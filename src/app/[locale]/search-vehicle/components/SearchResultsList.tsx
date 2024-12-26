import React from 'react'
import styled from 'styled-components'
import { useRouter } from '@/navigation'

import SearchListItem from './SearchListItem'
import { routeName } from '@/common/helpers/constants'

type Props = { vehicleList: VehicleListResult[] }

const SearchResultsList = ({ vehicleList }: Props) => {
  const router = useRouter()

  return (
    <Container>
      {vehicleList.map((item) => (
        <SearchListItem
          key={`searchListItem${item.vin}`}
          vehicleList={item}
          onClick={() => router.push(`${routeName.vehicleListing}/${item.vin}`)}
        />
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
