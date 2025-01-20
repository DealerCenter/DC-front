import theme from '@/app/[locale]/pilot/theme'
import { ConfigProvider, Select } from 'antd'
import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import ErrorMessage from '../errorMessage/ErrorMessage'

import arrowDown from '@/assets/icons/arrowDown.svg'

type Props = {
  value?: string | number
  optionsBasic?: string[]
  optionsWithId?: { id: number; label: string }[]
  onSearch?: (arg: string | number) => void
  onChangeString?: (arg: string) => void
  onChangeId?: (id: number) => void
  width?: number
  placeholder?: string
  errorMessage?: string
  fontSize?: number
  notFoundContent?: ReactNode
}

const AppSelectAntDesign = ({
  value,
  optionsBasic,
  optionsWithId = [
    { id: 1, label: '1' },
    { id: 2, label: '2' },
  ],
  onSearch,
  onChangeString,
  onChangeId,
  width,
  placeholder,
  errorMessage,
  fontSize,
  notFoundContent,
}: Props) => {
  const [selectedItem, setSelectedItem] = useState<number | string | undefined>(
    undefined
  )

  const handleOnChange = (value: string | number) => {
    setSelectedItem(value)
    onChangeString && onChangeString(value.toString())
    onChangeId && onChangeId(Number(value))
  }

  const handleOnSearch = (value: string | number) => {
    onSearch && onSearch(value)
  }

  useEffect(() => {
    if (typeof value === 'string' || typeof value === 'number') {
      const label =
        optionsWithId && optionsWithId.find((item) => item.id === value)?.label

      setSelectedItem(label ? label : value)
    }
    if (value === '') {
      setSelectedItem(undefined)
    }
  }, [value, optionsWithId])

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
          notFoundContent={notFoundContent}
          showSearch
          placeholder={placeholder}
          optionFilterProp='label'
          value={selectedItem}
          onChange={handleOnChange}
          onSearch={handleOnSearch}
          style={{
            width: `${width ? `${width}px` : '100%'}`,
            border: `2px solid ${theme.colors?.main_gray_04}`,
            borderRadius: '12px',
          }}
          options={
            optionsBasic
              ? optionsBasic.map((item, i) => ({
                  value: item,
                  label: item,
                }))
              : optionsWithId?.map((item) => ({
                  value: item.id.toString(),
                  label: item.label,
                }))
          }
          suffixIcon={<Image src={arrowDown} alt='arrow icon' />}
        />
      </ConfigProvider>
      {errorMessage && <ErrorMessage text={errorMessage} top={48} left={12} />}
    </Container>
  )
}

export default AppSelectAntDesign

const Container = styled.div`
  position: relative;
  width: 100%;
`
