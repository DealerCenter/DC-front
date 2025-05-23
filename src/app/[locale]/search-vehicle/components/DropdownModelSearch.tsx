import { useEffect, useState } from 'react'
import { ConfigProvider, Select, Spin } from 'antd'
import styled from 'styled-components'
import Image from 'next/image'

import { getDealersAdmin, getReceiversAdmin } from '@/api/apiCalls'
import AppSelectAntDesignWithFetch from '@/common/components/appSelect/AppSelectAntDesignWithFetch'
import { FIELD_NAMES, useSearchVehicle } from '../hooks/useSearchVehicle'
import { getMakeNames, getModelByMake } from '@/common/helpers/utils'
import theme from '@/app/[locale]/theme'
import arrowDown from '@/assets/icons/arrowDown.svg'
import ErrorMessage from '@/common/components/errorMessage/ErrorMessage'

const { Option } = Select

type Props = {
  placeholder?: string
  fontSize?: number
  errorMessage?: string
  width?: number
}

const DropdownModelSearch = ({
  placeholder,
  fontSize,
  errorMessage,
  width,
}: Props) => {
  const [allOptions, setAllOptions] = useState<{ label: string; id: number }[]>(
    []
  )
  const [filteredOptions, setFilteredOptions] = useState<
    { label: string; id: number }[]
  >([])
  const { setFieldValue, values, makeId } = useSearchVehicle()

  const fetchData = async () => {
    try {
      const response = await getModelByMake(makeId)

      if (response) {
        const mapped = response.result.map((item) => {
          return {
            label: `${item.model}`,
            id: item.id,
          }
        })
        setAllOptions(mapped)
        setFilteredOptions(mapped) // Initialize filtered options
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSearch = (value: string) => {
    const query = value.toLowerCase()
    const filtered = allOptions.filter((option) =>
      option.label.toLowerCase().includes(query)
    )
    setFilteredOptions(filtered)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [makeId])

  return (
    <Container>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              borderRadius: 12,
              controlHeight: 48,
              colorBorder: 'none',
              colorBorderSecondary: `${theme.colors?.main_gray_04}`,
              optionSelectedBg: `${theme.colors?.main_gray_04}`,
              borderRadiusSM: 8,
              optionHeight: 36,
              optionPadding: 7,
              colorTextPlaceholder: `${theme.colors?.main_gray_100}`,
              fontSize: fontSize,
            },
          },
        }}
      >
        <Select
          //   mode='multiple'
          showSearch
          placeholder={placeholder}
          optionFilterProp='label'
          value={values[FIELD_NAMES.MODEL]}
          onChange={(value) => {
            setFieldValue(FIELD_NAMES.MODEL, value)
          }}
          onSearch={handleSearch}
          filterOption={false}
          style={{
            width: `${width ? `${width}px` : '100%'}`,
            border: `2px solid ${theme.colors?.main_gray_04}`,
            borderRadius: '12px',
          }}
          suffixIcon={<Image src={arrowDown} alt='arrow icon' />}
        >
          {filteredOptions.map((option) => (
            <Option key={option.id} value={option.label}>
              {option.label}
            </Option>
          ))}
        </Select>
      </ConfigProvider>
      {errorMessage && <ErrorMessage text={errorMessage} top={48} left={12} />}
    </Container>
  )
}

export default DropdownModelSearch

const Container = styled.div`
  position: relative;
  width: 100%;
`
