import React from 'react'
import styled from 'styled-components'
import { useRouter } from '@/navigation'

import SearchListItem from './SearchListItem'
import { routeName } from '@/common/helpers/constants'
import { Pagination } from 'antd'
import { FormikHelpers } from 'formik'
import Loader from '@/common/components/loader/Loader'

type Pagination = {
  count: number
  current_page: number
  per_page: number
  total: number
  total_pages: number
}

type Props = {
  vehicleList: VehicleListResult[]
  pagination: Pagination
  setFieldValue: FormikHelpers<any>['setFieldValue']
  isLoading: boolean
}

const SearchResultsList = ({
  vehicleList,
  pagination,
  setFieldValue,
  isLoading,
}: Props) => {
  const router = useRouter()

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      {vehicleList.map((item) => (
        <SearchListItem
          key={`searchListItem${item.vin}`}
          vehicleList={item}
          onClick={() => router.push(`${routeName.vehicleListing}/${item.vin}`)}
        />
      ))}
      <Pagination
        current={pagination.current_page}
        total={pagination.total}
        showSizeChanger={false}
        showQuickJumper
        onChange={(page) => {
          setFieldValue('page', page)
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }}
      />
    </Container>
  )
}

export default SearchResultsList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`
