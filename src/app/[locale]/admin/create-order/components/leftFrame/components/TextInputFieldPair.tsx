import React, { ChangeEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import TextInput from '@/common/components/inputElements/TextInput'
import AppSelectBasic from '@/common/components/appSelect/AppSelectBasic'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {
  title: string
  value: string
  placeholder?: string
  selectItems?: { value: string }[]
  name?: string
  onBlur?: ChangeEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  errorMessage?: string
}

const TextInputFieldPair = ({
  title,
  value,
  selectItems,
  placeholder,
  name,
  onBlur,
  onChange,
  errorMessage,
}: Props) => {
  const [textInputWidth, setTextInputWidth] = useState(220)
  const [textInputWidth2, setTextInputWidth2] = useState(220)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  useEffect(() => {
    setTextInputWidth(isMobile ? 160 : isTablet ? 220 : 240)
  }, [isMobile, isTablet, setTextInputWidth])

  useEffect(() => {
    setTextInputWidth2(isMobile ? 143 : 220)
  }, [isMobile, setTextInputWidth2])

  return (
    <LabelPair>
      <TextInput
        width={textInputWidth}
        height={48}
        type='text'
        name={title}
        placeholder={t(title)}
        value={''}
        onChange={() => {}}
        onBlur={() => {}}
        fontWeight='bold'
        fontSize={13}
        isOutline={false}
        isDisabled={true}
      />
      {selectItems ? (
        <AppSelectBasic
          options={selectItems}
          onChange={() => {}}
          placeholder={t('select')}
        />
      ) : (
        <TextInput
          width={textInputWidth2}
          height={48}
          type='text'
          name={name ? name : ''}
          placeholder={placeholder ? placeholder : ''}
          value={value}
          onChange={onChange ? onChange : () => {}}
          onBlur={onBlur ? onBlur : () => {}}
          fontWeight='bold'
          fontSize={13}
          isOutline={false}
          errorMessage={errorMessage}
        />
      )}
    </LabelPair>
  )
}

export default TextInputFieldPair

const LabelPair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  min-height: 36px;

  gap: ${({ theme }) => theme.spacing?.lg};

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.xsm};
  }
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};

  width: 180px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 142px;
  }
`

const Value = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const IconLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
const IconBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
