import theme from '@/app/[locale]/theme'
import TextInput from '@/common/components/inputElements/TextInput'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../../hooks/useCreateOrderContext'

type Props = {}

const CarDetailsBoxEmpty = (props: Props) => {
  const [textInputWidth, setTextInputWidth] = useState(0)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')
  const { values, handleBlur, handleChange, errors, touched } =
    useCreateOrderContext()

  useEffect(() => {
    setTextInputWidth(isMobile ? 311 : isTablet ? 242 : 356)
  }, [isMobile, isTablet, setTextInputWidth])

  return (
    <CarDetailsBox>
      <TextInput
        width={textInputWidth}
        height={48}
        fontWeight='bold'
        fontSize={13}
        type='text'
        placeholder={t('name of vehicle')}
        name={FIELD_NAMES.MODEL}
        value={values[FIELD_NAMES.MODEL]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.MODEL] && touched[FIELD_NAMES.MODEL]
            ? errors[FIELD_NAMES.MODEL]
            : ''
        }
      />
      <TextInput
        width={textInputWidth}
        height={48}
        type='text'
        placeholder={t('release year')}
        fontWeight='bold'
        fontSize={13}
        name={FIELD_NAMES.MANUFACTURE_YEAR}
        value={values[FIELD_NAMES.MANUFACTURE_YEAR]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.MANUFACTURE_YEAR] &&
          touched[FIELD_NAMES.MANUFACTURE_YEAR]
            ? errors[FIELD_NAMES.MANUFACTURE_YEAR]
            : ''
        }
      />
      <TextInput
        width={textInputWidth}
        height={48}
        type='text'
        name='vehicle feature'
        placeholder={`NotWorking ${t('vehicle feature')}`}
        value={''}
        onChange={() => {}}
        onBlur={() => {}}
        fontWeight='bold'
        fontSize={13}
        isDisabled={true}
      />
      <TextInput
        width={textInputWidth}
        height={48}
        type='text'
        fontWeight='bold'
        fontSize={13}
        placeholder={t('vin code')}
        name={FIELD_NAMES.VIN}
        value={values[FIELD_NAMES.VIN]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.VIN] && touched[FIELD_NAMES.VIN]
            ? errors[FIELD_NAMES.VIN]
            : ''
        }
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
