import theme from '@/app/[locale]/theme'
import TextInput from '@/common/components/InputElements/TextInput'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../../hooks/useCreateOrderContext'
import AppButton from '@/common/components/appButton/AppButton'
import { getCarDetailsByVin } from '@/common/helpers/utils'

type Props = {}

const INPUT_WIDTH_MOBILE = 311
const INPUT_WIDTH_TABLET = 242
const INPUT_WIDTH_DESKTOP = 356

const CarDetailsBoxEmpty = (props: Props) => {
  const [textInputWidth, setTextInputWidth] = useState(242)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')
  const { values, handleBlur, handleChange, errors, touched, setFieldValue } =
    useCreateOrderContext()

  useEffect(() => {
    setTextInputWidth(
      isMobile
        ? INPUT_WIDTH_MOBILE
        : isTablet
        ? INPUT_WIDTH_TABLET
        : INPUT_WIDTH_DESKTOP
    )
  }, [isMobile, isTablet, setTextInputWidth])

  const checkCarByVin = async () => {
    const vin = values[FIELD_NAMES.VIN]
    if (vin) {
      try {
        const res = (await getCarDetailsByVin(vin)).result[0]
        setFieldValue(FIELD_NAMES.MANUFACTURER, res.make)
        setFieldValue(FIELD_NAMES.MANUFACTURE_YEAR, res.year)
        setFieldValue(FIELD_NAMES.MODEL, res.model)
        setFieldValue(FIELD_NAMES.VIN, vin)
        setFieldValue(FIELD_NAMES.CAR_CATEGORY, res.vehicle_type)
        setFieldValue(FIELD_NAMES.MILEAGE, res.odometer)
        setFieldValue(FIELD_NAMES.CAR_COST, res.currency.iso_code)
        setFieldValue(FIELD_NAMES.IS_INSURED, !!res.is_insurance)
        setFieldValue(FIELD_NAMES.ADDITIONAL_DETAILS, res.car_info)
      } catch (e) {
        console.error(e)
      }
    }
  }

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
        fontSize={13}
        fontWeight='bold'
        placeholder={t('release year')}
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
        fontSize={13}
        fontWeight='bold'
        placeholder={t('vehicle feature')}
        name={FIELD_NAMES.CAR_DETAILS}
        value={values[FIELD_NAMES.CAR_DETAILS] ?? ''}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.CAR_DETAILS] && touched[FIELD_NAMES.CAR_DETAILS]
            ? errors[FIELD_NAMES.CAR_DETAILS]
            : ''
        }
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
        rightComponent={
          <AppButton
            text='Check'
            height='medium'
            onClick={checkCarByVin}
            isSmall
            type='outlined'
          />
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
