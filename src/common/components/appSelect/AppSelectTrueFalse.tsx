import React, { useEffect, useState } from 'react'
import { ConfigProvider, Select } from 'antd'
import { useTranslations } from 'next-intl'
import theme from '@/app/[locale]/pilot/theme'
import styled from 'styled-components'
import ErrorMessage from '../errorMessage/ErrorMessage'
import Image from 'next/image'

import arrowDown from '@/assets/icons/arrowDown.svg'

type Props = {
  onChange: (arg: boolean) => void
  width?: number
  placeholder?: string
  errorMessage?: string
  fontSize?: number
  booleanValue?: boolean
}

const AppSelectTrueFalse = ({
  width,
  placeholder,
  errorMessage,
  fontSize,
  onChange,
  booleanValue,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState<boolean | undefined>(
    undefined
  )
  const t = useTranslations('')

  const handleChange = (value: boolean) => {
    setSelectedOption(value)
    onChange(value)
  }

  useEffect(() => {
    if (typeof booleanValue === 'boolean') {
      setSelectedOption(booleanValue)
    }
    if (!booleanValue) {
      setSelectedOption(undefined)
    }
  }, [booleanValue])

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
          placeholder={placeholder}
          optionFilterProp='label'
          value={selectedOption}
          onChange={handleChange}
          style={{
            width: `${width ? `${width}px` : '100%'}`,
            border: `2px solid ${theme.colors?.main_gray_04}`,
            borderRadius: '12px',
          }}
          options={[
            { value: true, label: `${t('yes')}` },
            { value: false, label: `${t('no')}` },
          ]}
          suffixIcon={<Image src={arrowDown} alt='arrow icon' />}
        />
      </ConfigProvider>
      {errorMessage && <ErrorMessage text={errorMessage} top={48} left={12} />}
    </Container>
  )
}

export default AppSelectTrueFalse

const Container = styled.div`
  position: relative;
  width: 100%;
`
