import { getReceiversAdmin } from '@/api/apiCalls'
import { Select, Spin } from 'antd'
import { useState } from 'react'

const { Option } = Select

type Props = {}

const MySelectComponent = ({}: Props) => {
  const [options, setOptions] = useState<
    {
      label: string
      id: number
    }[]
  >([]) // For storing API results
  const [loading, setLoading] = useState<boolean>(false) // Loading state

  const fetchData = async (searchTerm: string) => {
    setLoading(true)
    try {
      const response = await getReceiversAdmin({ search: searchTerm })

      setOptions([])

      response?.data.map((item) =>
        setOptions((prev) => [
          ...prev,
          {
            label: item.firstName,
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
    <Select
      showSearch
      placeholder='Search receivers'
      onSearch={handleSearch} // Trigger the search
      notFoundContent={loading ? <Spin size='small' /> : null} // Show loading spinner
      filterOption={false} // Disable default filtering to rely on API data
      style={{ width: '100%' }}
    >
      {options.map((option) => (
        <Option key={option.id} value={option.id}>
          {option.label} {/* Adjust based on the structure of your API data */}
        </Option>
      ))}
    </Select>
  )
}

export default MySelectComponent
