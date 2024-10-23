import { ConfigProvider, Select, Spin } from 'antd'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import arrowDown from '@/assets/icons/arrowDown.svg'
import ErrorMessage from '../errorMessage/ErrorMessage'
import styled, { CSSProperties } from 'styled-components'
import theme from '@/app/[locale]/theme'

const { Option } = Select

type Props = {
  value?: string | number
  options: {
    label: string
    id: number
  }[]
  onSearch?: (arg: string) => void
  width?: number
  placeholder?: string
  errorMessage?: string
  fontSize?: number
  isLoading: boolean
  onChange: (value: number) => void
}

const AppSelectAntDesignWithFetch = ({
  value,
  options,
  onSearch,
  width,
  placeholder,
  fontSize,
  isLoading,
  errorMessage,
  onChange,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>()

  const handleOnChange = (value: number) => {
    setSelectedItem(value)
    onChange && onChange(value)
  }

  const handleOnSearch = (value: string) => {
    onSearch && onSearch(value)
  }

  //   useEffect(() => {
  //     if (typeof value === 'string' || typeof value === 'number') {
  //       const label = options.find((item) => item.id === value)?.label
  //       setSelectedItem(label ? label : value)
  //     }
  //     if (value === '') {
  //       setSelectedItem(undefined)
  //     }
  //   }, [value, options])

  useEffect(() => {
    console.log('options:', options)
  }, [options])

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
          value={selectedItem}
          onChange={handleOnChange}
          onSearch={handleOnSearch}
          filterOption={false}
          style={{
            width: `${width ? `${width}px` : '100%'}`,
            border: `2px solid ${theme.colors?.main_gray_04}`,
            borderRadius: '12px',
          }}
          suffixIcon={<Image src={arrowDown} alt='arrow icon' />}
          notFoundContent={isLoading ? <Spin size='small' /> : null} // Show isLoading spinner
        >
          {options.map((option) => (
            <Option key={option.id} value={option.id}>
              {option.label}
            </Option>
          ))}
        </Select>
      </ConfigProvider>
      {errorMessage && <ErrorMessage text={errorMessage} top={48} left={12} />}
    </Container>
  )
}

export default AppSelectAntDesignWithFetch

const Container = styled.div`
  position: relative;
  width: 100%;
`
