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
  errorMessage?: string
}

const DropdownWithSearch = ({
  searchType,
  placeholder,
  fontSize,
  errorMessage,
}: Props) => {
  const [options, setOptions] = useState<
    {
      label: string
      id: number
    }[]
  >([])
  const [loading, setLoading] = useState<boolean>(false) // Loading state

  const { setFieldValue, values } = useCreateOrderContext()

  const handleSetValue = (id: number) => {
    searchType === 'dealer' && setFieldValue(FIELD_NAMES.DEALER_ID, id)
    searchType === 'receiver' && setFieldValue(FIELD_NAMES.RECEIVER_ID, id)
  }

  const fetchData = async (searchQuery: string) => {
    setLoading(true)
    try {
      const response =
        searchType === 'receiver'
          ? await getReceiversAdmin({ pageSize: 100, search: searchQuery })
          : searchType === 'dealer' &&
            (await getDealersAdmin({
              pageSize: 100,
              firstName: searchQuery,
            }))

      if (response && response.data) {
        const mapped = response.data.map((item) => {
          return {
            label: `${item.firstName} ${item.lastName}`,
            id: item.id,
          }
        })
        setOptions(mapped)
      }
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

  useEffect(() => {
    fetchData('')
    // eslint-disable-next-line
  }, [])

  return (
    <AppSelectAntDesignWithFetch
      options={options}
      onSearch={handleSearch}
      onChange={handleSetValue}
      isLoading={loading}
      placeholder={placeholder}
      fontSize={fontSize}
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
      errorMessage={errorMessage}
    />
  )
}

export default DropdownWithSearch
