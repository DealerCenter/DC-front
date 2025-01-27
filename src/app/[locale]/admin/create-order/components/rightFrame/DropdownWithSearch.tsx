import { ReactNode, useEffect, useState } from 'react'
import AppSelectAntDesignWithFetch from '@/common/components/appSelect/AppSelectAntDesignWithFetch'

type Props = {
  placeholder?: string
  fontSize?: number
  notFoundContent?: ReactNode
  fetchData: (searchQuery: string) => void
  handleSearch: (value: string) => void
  value: string
  setValue: (value: number) => void
  options: {
    label: string
    id: number
  }[]
}

const DropdownWithSearch = ({
  placeholder,
  fontSize,
  fetchData,
  handleSearch,
  options,
  value,
  setValue,
  notFoundContent,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    fetchData('')
  }, [])

  return (
    <AppSelectAntDesignWithFetch
      options={options}
      onSearch={handleSearch}
      onChange={setValue}
      isLoading={loading}
      placeholder={placeholder}
      fontSize={fontSize}
      hideDropdownIcon
      value={value}
      setValue={setValue}
      notFoundContent={notFoundContent}
    />
  )
}

export default DropdownWithSearch
