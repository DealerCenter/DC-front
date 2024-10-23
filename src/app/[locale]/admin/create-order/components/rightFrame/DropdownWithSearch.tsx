import { useState } from 'react'

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
}

const DropdownWithSearch = ({ searchType, placeholder, fontSize }: Props) => {
  const [options, setOptions] = useState<
    {
      label: string
      id: number
    }[]
  >([])
  const [loading, setLoading] = useState<boolean>(false) // Loading state

  const { setFieldValue } = useCreateOrderContext()

  const handleSetValue = (id: number) => {
    searchType === 'dealer' && setFieldValue(FIELD_NAMES.DEALER_ID, id)
    searchType === 'receiver' && setFieldValue(FIELD_NAMES.RECEIVER_ID, id)
  }

  const fetchData = async (searchQuery: string) => {
    setLoading(true)
    try {
      const response =
        searchType === 'receiver'
          ? await getReceiversAdmin({ search: searchQuery })
          : searchType === 'dealer' &&
            (await getDealersAdmin({ firstName: searchQuery }))

      setOptions([])

      // MY_BUG
      // @ts-ignore
      response?.data?.map((item) =>
        setOptions((prev) => [
          ...prev,
          {
            label: `${item.firstName} ${item.lastName}`,
            id: item.id,
          },
        ])
      )
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (value: string) => {
    if (value) {
      fetchData(value) // Fetch data as user types
    } else {
      setOptions([]) // Clear options if search is empty
    }
  }

  return (
    <AppSelectAntDesignWithFetch
      options={options}
      onSearch={handleSearch}
      onChange={handleSetValue}
      isLoading={loading}
      placeholder={placeholder}
      fontSize={fontSize}
    />
  )
}

export default DropdownWithSearch
