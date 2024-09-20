'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { useFormik, FormikValues } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import { createOrder } from '@/api/apiCalls'
import axiosInstance from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import { message } from 'antd'

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
  // DEALER_ID: 'dealerId',
  RECEIVER_ID: 'receiverId',
}

export const SHIPPING_STATUS = {
  IN_AMERICAN_WAREHOUSE: 'InAmericanWarehouse',
  IN_CONTAINER: 'InContainer',
  UNDERGOES_CUSTOMS: 'UndergoesCustomsProcedures',
  SENT: 'Sent',
}

export const CreateOrderProvider = ({ children }: { children: ReactNode }) => {
  const t = useTranslations('')

  const initialValues = {
    [FIELD_NAMES.MANUFACTURER]: yup.string,
    [FIELD_NAMES.MANUFACTURE_YEAR]: yup.number,
    [FIELD_NAMES.MODEL]: yup.string,
    [FIELD_NAMES.VIN]: yup.string,
    [FIELD_NAMES.TRANSPORTATION_COST]: yup.number,
    [FIELD_NAMES.CAR_COST]: yup.number,
    [FIELD_NAMES.STATE_ID]: yup.number,
    [FIELD_NAMES.EXACT_ADDRESS]: yup.string,
    [FIELD_NAMES.IS_INSURED]: yup.boolean,
    [FIELD_NAMES.CAR_CATEGORY]: yup.string,
    [FIELD_NAMES.MILEAGE]: yup.number,
    [FIELD_NAMES.STATUS]: yup.string,
    [FIELD_NAMES.CONTAINER_ID]: yup.number,
    // [FIELD_NAMES.DEALER_ID]: yup.number,
    [FIELD_NAMES.RECEIVER_ID]: yup.number,
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      console.log('onSubmit:', values)

      const numericValues = { ...values }
      const numberFields = [
        FIELD_NAMES.MANUFACTURE_YEAR,
        FIELD_NAMES.TRANSPORTATION_COST,
        FIELD_NAMES.CAR_COST,
        FIELD_NAMES.STATE_ID,
        FIELD_NAMES.MILEAGE,
        FIELD_NAMES.CONTAINER_ID,
        FIELD_NAMES.RECEIVER_ID,
      ]

      numberFields.forEach((field) => {
        if (
          numericValues[field] !== undefined &&
          numericValues[field] !== null
        ) {
          numericValues[field] = Number(numericValues[field])
        }
      })

      console.log('onSubmit with numeric values:', numericValues)

      try {
        const response = await axiosInstance.post(
          endpoints.CREATE_ORDER,
          numericValues
        )
        message.success(t('order created successfully'))
        resetForm()

        return response
      } catch (error) {
        message.error(t('could not create order'))
        console.error('Error creating new order:', error)
      }
    },

    validationSchema: yup.object({
      [FIELD_NAMES.MANUFACTURER]: yup
        .string()
        .required(t('manufacturer required')),
      [FIELD_NAMES.MANUFACTURE_YEAR]: yup
        .number()
        .required(t('manufacture year required')),
      [FIELD_NAMES.MODEL]: yup.string().required(t('model required')),
      [FIELD_NAMES.VIN]: yup.string().required(t('vin required')),
      [FIELD_NAMES.TRANSPORTATION_COST]: yup
        .number()
        .required(t('transportation cost required')),
      [FIELD_NAMES.CAR_COST]: yup.number().required(t('car cost required')),
      [FIELD_NAMES.STATE_ID]: yup.number().required(t('state required')),
      [FIELD_NAMES.EXACT_ADDRESS]: yup
        .string()
        .required(t('exact address required')),
      [FIELD_NAMES.IS_INSURED]: yup
        .boolean()
        .required(t('insurance status required')),
      [FIELD_NAMES.CAR_CATEGORY]: yup
        .string()
        .required(t('car category required')),
      [FIELD_NAMES.MILEAGE]: yup.number().required(t('mileage required')),
      [FIELD_NAMES.STATUS]: yup.string().required(t('status required')),
      [FIELD_NAMES.CONTAINER_ID]: yup
        .number()
        .required(t('container ID required')),
      // [FIELD_NAMES.DEALER_ID]: yup.number().required(t('dealer ID required')),
      [FIELD_NAMES.RECEIVER_ID]: yup
        .number()
        .required(t('receiver ID required')),
    }),
  })

  const isButtonDisabled =
    formik.values[FIELD_NAMES.MANUFACTURER].length === 0 ||
    formik.values[FIELD_NAMES.MODEL].length === 0 ||
    formik.values[FIELD_NAMES.VIN].length === 0 ||
    formik.values[FIELD_NAMES.EXACT_ADDRESS].length === 0 ||
    formik.values[FIELD_NAMES.CAR_CATEGORY].length === 0 ||
    formik.values[FIELD_NAMES.STATUS].length === 0
  // typeof formik.values[FIELD_NAMES.MILEAGE] !== 'number' ||
  //   typeof formik.values[FIELD_NAMES.TRANSPORTATION_COST] !== 'number' ||
  //   typeof formik.values[FIELD_NAMES.CAR_COST] !== 'number' ||
  //   // typeof formik.values[FIELD_NAMES.STATE_ID] !== 'number' ||
  //   typeof formik.values[FIELD_NAMES.CONTAINER_ID] !== 'number' ||
  //   // formik.values[FIELD_NAMES.DEALER_ID] !== 'number' ||
  //   typeof formik.values[FIELD_NAMES.RECEIVER_ID] !== 'number'

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    validateForm,
    handleSubmit,
    setFieldValue,
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
        setFieldValue,
        isButtonDisabled,
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
