import React, { ChangeEventHandler, useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'

import Box from '../../../../components/common/Box'
import TextInput from '@/common/components/inputElements/TextInput'

import checkedEmpty from '@/assets/icons/checkedIconEmpty.svg'

const INPUT_WIDTH_MOBILE_1 = 160
const INPUT_WIDTH_TABLET_1 = 156
const INPUT_WIDTH_DESKTOP_1 = 180

const INPUT_WIDTH_MOBILE_2 = 143
const INPUT_WIDTH_DESKTOP_2 = 160

type Props = {
  header: string
  name: string
  value: string
  onBlur: ChangeEventHandler<HTMLInputElement>
  onChange: ChangeEventHandler<HTMLInputElement>
  errorMessage: string
  placeholder1: string
  placeholder2: string
}

const UserDataBox = ({
  header,
  name,
  value,
  onBlur,
  onChange,
  errorMessage,
  placeholder1,
  placeholder2,
}: Props) => {
  const [textInputWidth, setTextInputWidth] = useState(INPUT_WIDTH_DESKTOP_1)
  const [textInputWidth2, setTextInputWidth2] = useState(INPUT_WIDTH_DESKTOP_2)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })

  const t = useTranslations('')

  useEffect(() => {
    setTextInputWidth(
      isMobile
        ? INPUT_WIDTH_MOBILE_1
        : isTablet
          ? INPUT_WIDTH_TABLET_1
          : INPUT_WIDTH_DESKTOP_1
    )
  }, [isMobile, isTablet, setTextInputWidth])

  useEffect(() => {
    setTextInputWidth2(isMobile ? INPUT_WIDTH_MOBILE_2 : INPUT_WIDTH_DESKTOP_2)
  }, [isMobile, setTextInputWidth2])

  return (
    <Box>
      <HeaderFrame>
        <Header>{header}</Header>
        {isMobile && (
          <Icon onClick={() => {}}>
            <Image src={checkedEmpty} alt='checked icon' />
          </Icon>
        )}
      </HeaderFrame>
      <Line />
      <DataFrame>
        <TextInput
          width={textInputWidth}
          height={48}
          type='text'
          name='full name'
          placeholder={placeholder1}
          value={''}
          onChange={() => {}}
          onBlur={() => {}}
          fontWeight='bold'
          fontSize={13}
          isOutline={false}
        />
        <TextInput
          width={textInputWidth2}
          height={48}
          type='text'
          name={name}
          placeholder={placeholder2}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          fontWeight='bold'
          fontSize={13}
          isOutline={false}
        />
        {!isMobile && (
          <Icon onClick={() => {}}>
            <Image src={checkedEmpty} alt='checked icon' />
          </Icon>
        )}
      </DataFrame>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Box>
  )
}

export default UserDataBox

const HeaderFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Header = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const DataFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors?.red};
  position: absolute;
  font-size: ${({ theme }) => theme.fontSizes?.extraSmall};
  top: 48px;
  left: 12px;
`
