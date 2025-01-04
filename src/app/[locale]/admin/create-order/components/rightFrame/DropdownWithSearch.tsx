import { useEffect, useState } from 'react'

import { getDealersAdmin, getReceiversAdmin } from '@/api/apiCalls'
import AppSelectAntDesignWithFetch from '@/common/components/appSelect/AppSelectAntDesignWithFetch'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../hooks/useCreateOrderContext'

type Props = {
  searchType: 'receiver' | 'dealer'
  placeholder?: string
  fontSize?: number
  fetchData: (searchQuery: string) => void
  handleSearch: (value: string) => void
  options: {
    label: string
    id: number
  }[]
}

const DropdownWithSearch = ({
  searchType,
  placeholder,
  fontSize,
  fetchData,
  handleSearch,
  options,
}: Props) => {
  // const [options, setOptions] = useState<
  //   {
  //     label: string
  //     id: number
  //   }[]
  // >([])
  const [loading, setLoading] = useState<boolean>(false) // Loading state

  const { setFieldValue, values } = useCreateOrderContext()

  const handleSetValue = (id: number) => {
    searchType === 'dealer' && setFieldValue(FIELD_NAMES.DEALER_ID, id)
    searchType === 'receiver' && setFieldValue(FIELD_NAMES.RECEIVER_ID, id)
  }

  useEffect(() => {
    fetchData('')
  }, [])

  return (
    <AppSelectAntDesignWithFetch
      options={options}
      onSearch={handleSearch}
      onChange={handleSetValue}
      isLoading={loading}
      placeholder={placeholder}
      fontSize={fontSize}
      hideDropdownIcon
      value={
        searchType === 'dealer'
          ? values[FIELD_NAMES.DEALER_ID]
          : values[FIELD_NAMES.RECEIVER_ID]
      }
      setValue={
        searchType === 'dealer'
          ? (value) => setFieldValue(FIELD_NAMES.DEALER_ID, value)
          : (value) => setFieldValue(FIELD_NAMES.RECEIVER_ID, value)
      }
    />
  )
}

export default DropdownWithSearch
