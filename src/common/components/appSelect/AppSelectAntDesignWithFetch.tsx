import { ConfigProvider, Select, Spin } from 'antd'
import Image from 'next/image'
import styled from 'styled-components'

import theme from '@/app/[locale]/theme'
import arrowDown from '@/assets/icons/arrowDown.svg'
import ErrorMessage from '../errorMessage/ErrorMessage'

const { Option } = Select

type Props = {
  options: {
    label: string
    id: number | string
  }[]
  onSearch?: (arg: string) => void
  width?: number
  placeholder?: string
  errorMessage?: string
  fontSize?: number
  isLoading: boolean
  onChange: (value: number) => void
  value: number | string
  setValue: (arg: any) => void
  hideDropdownIcon?: boolean
  notFoundContent?: React.ReactNode | null
}

const AppSelectAntDesignWithFetch = ({
  options,
  onSearch,
  width,
  placeholder,
  fontSize,
  isLoading,
  errorMessage,
  onChange,
  setValue,
  value,
  hideDropdownIcon,
  notFoundContent,
}: Props) => {
  const handleOnChange = (value: number) => {
    setValue(value)
    onChange && onChange(value)
  }

  const handleOnSearch = (value: string) => {
    onSearch && onSearch(value)
  }

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
          // @ts-ignore
          value={value?.toString()?.length > 0 ? value : null}
          onChange={handleOnChange}
          onSearch={handleOnSearch}
          filterOption={(input, option) =>
            // @ts-ignore
            option?.children?.toLowerCase().includes(input.toLowerCase())
          }
          style={{
            width: `${width ? `${width}px` : '100%'}`,
            border: `2px solid ${theme.colors?.main_gray_04}`,
            borderRadius: '12px',
          }}
          suffixIcon={
            hideDropdownIcon ? null : <Image src={arrowDown} alt='arrow icon' />
          }
          // notFoundContent={isLoading ? <Spin size='small' /> : null}
        >
          {options?.map((option, index) => (
            <Option key={`${option.id}${index}`} value={option.id}>
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
