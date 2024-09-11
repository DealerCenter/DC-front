'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { useFormik, FormikValues } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import { uploadOrder } from '@/api/apiCalls'

const FormikContext = createContext<FormikValues | null>(null)

export const FIELD_NAMES = {
  MANUFACTURER: 'manufacturer',
  MANUFACTURE_YEAR: 'manufactureYear',
  MODEL: 'model',
  VIN: 'vin',
  TRANSPORTATION_COST: 'transportaionCost',
  CAR_COST: 'carCost',
  STATE_ID: 'stateId',
  EXACT_ADDRESS: 'exactAddress',

  IS_INSURED: 'isInsured',

  CAR_CATEGORY: 'carCategory',
  MILEAGE: 'mileage',

  STATUS: 'status',
  CONTAINER_ID: 'containerId',
  DEALER_ID: 'dealerId',
  RECEIVER_ID: 'receiverId',
}

export const CreateOrderProvider = ({ children }: { children: ReactNode }) => {
  const t = useTranslations('createOrder')

  const initialValues = {
    [FIELD_NAMES.MANUFACTURER]: '',
    [FIELD_NAMES.MANUFACTURE_YEAR]: 0,
    [FIELD_NAMES.MODEL]: '',
    [FIELD_NAMES.VIN]: '',
    [FIELD_NAMES.TRANSPORTATION_COST]: 0,
    [FIELD_NAMES.CAR_COST]: 0,
    [FIELD_NAMES.STATE_ID]: 0,
    [FIELD_NAMES.EXACT_ADDRESS]: '',
    [FIELD_NAMES.IS_INSURED]: false,
    [FIELD_NAMES.CAR_CATEGORY]: '',
    [FIELD_NAMES.MILEAGE]: 0,
    [FIELD_NAMES.STATUS]: '',
    [FIELD_NAMES.CONTAINER_ID]: 0,
    [FIELD_NAMES.DEALER_ID]: 0,
    [FIELD_NAMES.RECEIVER_ID]: 0,
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log('onSubmit:', values)
    },

    // validationSchema: yup.object({
    //   [FIELD_NAMES.MANUFACTURER]: yup
    //     .string()
    //     .required(t('manufacturer required')),
    //   [FIELD_NAMES.MANUFACTURE_YEAR]: yup
    //     .number()
    //     .required(t('manufacture year required')),
    //   [FIELD_NAMES.MODEL]: yup.string().required(t('model required')),
    //   [FIELD_NAMES.VIN]: yup.string().required(t('vin required')),
    //   [FIELD_NAMES.TRANSPORTATION_COST]: yup
    //     .number()
    //     .required(t('transportation cost required')),
    //   [FIELD_NAMES.CAR_COST]: yup.number().required(t('car cost required')),
    //   [FIELD_NAMES.STATE_ID]: yup.number().required(t('state required')),
    //   [FIELD_NAMES.EXACT_ADDRESS]: yup
    //     .string()
    //     .required(t('exact address required')),
    //   [FIELD_NAMES.IS_INSURED]: yup
    //     .boolean()
    //     .required(t('insurance status required')),
    //   [FIELD_NAMES.CAR_CATEGORY]: yup
    //     .string()
    //     .required(t('car category required')),
    //   [FIELD_NAMES.MILEAGE]: yup.number().required(t('mileage required')),
    //   [FIELD_NAMES.STATUS]: yup.string().required(t('status required')),
    //   [FIELD_NAMES.CONTAINER_ID]: yup
    //     .number()
    //     .required(t('container ID required')),
    //   [FIELD_NAMES.DEALER_ID]: yup.number().required(t('dealer ID required')),
    //   [FIELD_NAMES.RECEIVER_ID]: yup
    //     .number()
    //     .required(t('receiver ID required')),
    // }),
  })

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    validateForm,
    handleSubmit,
  } = formik

  return (
    <FormikContext.Provider
      value={{
        values,
        handleBlur,
        handleChange,
        errors,
        touched,
        validateForm,
        handleSubmit,
      }}
    >
      {children}
    </FormikContext.Provider>
  )
}

export const useCreateOrderContext = <
  Values extends FormikValues = FormikValues,
  ExtraProps = {},
>() => {
  const context = useContext(FormikContext)
  if (!context) {
    throw new Error(
      'useCreateOrderContext must be used within a CreateOrderProvider'
    )
  }
  return context
}
