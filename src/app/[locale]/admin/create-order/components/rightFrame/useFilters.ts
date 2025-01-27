import { getDealersAdmin, getReceiversAdmin } from '@/api/apiCalls'
import { VERIFICATION_STATUS_NAME } from '@/common/helpers/constants'
import React, { useState } from 'react'

type Options = {
  label: string
  id: number
  verificationStatus: VERIFICATION_STATUS_NAME
}[]

const useFilters = () => {
  const [receiverNameOptions, setReceiverNameOptions] = useState<Options>([])
  const [receiverPhoneOptions, setReceiverPhoneOptions] = useState<Options>([])

  const [dealerNameOptions, setDealerNameOptions] = useState<Options>([])
  const [dealerPhoneOptions, setDealerPhoneOptions] = useState<Options>([])

  const [isAddReceiverModalOpen, setIsAddReceiverModalOpen] = useState(false)
  const [isAddContainerModalOpen, setIsAddContainerModalOpen] = useState(false)

  const fetchReceiverDataByName = async (searchQuery: string) => {
    // setLoading(true)
    try {
      const response = await getReceiversAdmin({
        pageSize: 100,
        search: searchQuery,
      })

      if (response && response.data) {
        const mappedNames = response.data.map((item) => {
          return {
            label: `${item.firstName} ${item.lastName}`,
            id: item.id,
            verificationStatus: item.verificationStatus,
          }
        })
        const mappedPhones = response.data.map((item) => {
          return {
            label: `${item.phoneNumber}`,
            id: item.id,
            verificationStatus: item.verificationStatus,
          }
        })
        setReceiverNameOptions(mappedNames)
        setReceiverPhoneOptions(mappedPhones)
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
      setReceiverPhoneOptions([])
    }
  }

  const fetchDealerOptions = async (searchQuery: string) => {
    try {
      const response = await getDealersAdmin({
        pageSize: 100,
        search: searchQuery,
      })

      if (response && response.data) {
        const mappedNames = response.data.map((item) => {
          return {
            label: `${item.firstName} ${item.lastName}`,
            id: item.id,
            verificationStatus: item.idImageVerificationStatus,
          }
        })
        const mappedPhones = response.data.map((item) => {
          return {
            label: `${item.phoneNumber}`,
            id: item.id,
            verificationStatus: item.idImageVerificationStatus,
          }
        })

        setDealerNameOptions(mappedNames)
        setDealerPhoneOptions(mappedPhones)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleDealerSearch = (value: string) => {
    if (value) {
      fetchDealerOptions(value) // Fetch data as user types
    } else {
      setDealerNameOptions([])
      setDealerPhoneOptions([])
    }
  }

  return {
    handleReceiverNameSearch,
    fetchReceiverDataByName,
    receiverNameOptions,
    receiverPhoneOptions,
    handleDealerSearch,
    fetchDealerOptions,
    dealerNameOptions,
    dealerPhoneOptions,
    setIsAddReceiverModalOpen,
    isAddReceiverModalOpen,
    isAddContainerModalOpen,
    setIsAddContainerModalOpen,
  }
}

export default useFilters
