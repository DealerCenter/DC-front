import { getDealersAdmin, getReceiversAdmin } from '@/api/apiCalls'
import React, { useState } from 'react'

type Props = {}

const useFilters = () => {
  const [receiverNameOptions, setReceiverNameOptions] = useState<
    {
      label: string
      id: number
    }[]
  >([])

  const [dealerOptions, setDealerOptions] = useState<
    {
      label: string
      id: number
    }[]
  >([])

  const fetchReceiverDataByName = async (searchQuery: string) => {
    // setLoading(true)
    try {
      const response = await getReceiversAdmin({
        pageSize: 100,
        search: searchQuery,
      })

      if (response && response.data) {
        const mapped = response.data.map((item) => {
          return {
            label: `${item.firstName} ${item.lastName}`,
            id: item.id,
          }
        })
        setReceiverNameOptions(mapped)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      // setLoading(false)
    }
  }

  const handleReceiverNameSearch = (value: string) => {
    if (value) {
      fetchReceiverDataByName(value)
    } else {
      setReceiverNameOptions([])
    }
  }

  const fetchDealerOptions = async (searchQuery: string) => {
    try {
      const response = await getDealersAdmin({
        pageSize: 100,
        search: searchQuery,
      })

      if (response && response.data) {
        const mapped = response.data.map((item) => {
          return {
            label: `${item.firstName} ${item.lastName}`,
            id: item.id,
          }
        })
        setDealerOptions(mapped)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleDealerSearch = (value: string) => {
    if (value) {
      fetchDealerOptions(value) // Fetch data as user types
    } else {
      setDealerOptions([]) // Clear options if search is empty
    }
  }

  return {
    handleReceiverNameSearch,
    fetchReceiverDataByName,
    receiverNameOptions,
    handleDealerSearch,
    fetchDealerOptions,
    dealerOptions,
  }
}

export default useFilters
