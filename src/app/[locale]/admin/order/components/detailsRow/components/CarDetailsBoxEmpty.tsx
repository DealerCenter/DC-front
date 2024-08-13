import theme from '@/app/[locale]/theme'
import TextInput from '@/common/components/inputElements/TextInput'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

type Props = {}

const CarDetailsBoxEmpty = (props: Props) => {
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  const textInputWidth = isTablet ? 242 : 356

  return (
    <CarDetailsBox>
      <TextInput
        width={textInputWidth}
        height={48}
        type='text'
        name='name of vehicle'
        placeholder={t('name of vehicle')}
        value={''}
        onChange={() => {}}
        onBlur={() => {}}
        fontWeight='bold'
        fontSize={13}
      />
      <TextInput
        width={textInputWidth}
        height={48}
        type='text'
        name='release year'
        placeholder={t('release year')}
        value={''}
        onChange={() => {}}
        onBlur={() => {}}
        fontWeight='bold'
        fontSize={13}
      />
      <TextInput
        width={textInputWidth}
        height={48}
        type='text'
        name='vehicle feature'
        placeholder={t('vehicle feature')}
        value={''}
        onChange={() => {}}
        onBlur={() => {}}
        fontWeight='bold'
        fontSize={13}
      />
      <TextInput
        width={textInputWidth}
        height={48}
        type='text'
        name='vin code'
        placeholder={t('vin code')}
        value={''}
        onChange={() => {}}
        onBlur={() => {}}
        fontWeight='bold'
        fontSize={13}
      />
    </CarDetailsBox>
  )
}

export default CarDetailsBoxEmpty

const CarDetailsBox = styled.div`
  box-sizing: border-box;
  width: 420px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 32px;
  gap: ${({ theme }) => theme.spacing?.sm};

  @media ${({ theme }) => theme.media?.md} {
    width: 306px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    padding: 24px 16px;
  }
`
