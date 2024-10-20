'use client'
import { FormikValues, useFormik } from 'formik'
import { useTranslations } from 'next-intl'
import { ReactNode, createContext, useContext, useState } from 'react'
import * as yup from 'yup'

import axiosInstance from '@/api/apiClient'
import { ORDER_DATA } from '@/api/apiTypes'
import { endpoints } from '@/api/endpoints'
import { message } from 'antd'

const FormikContext = createContext<FormikValues | null>(null)

export const FIELD_NAMES = {
  MANUFACTURER: 'manufacturer',
  MANUFACTURE_YEAR: 'manufactureYear',
  MODEL: 'model',
  VIN: 'vin',
  TRANSPORTATION_COST: 'transportationCost',
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
  ADDITIONAL_DETAILS: 'additionalDetails',
  CAR_DETAILS: 'carDetails',
}

export const CreateOrderProvider = ({ children }: { children: ReactNode }) => {
  const t = useTranslations('')

  const [orderId, setOrderId] = useState<number | null>(null)

  const initialValues = {
    [FIELD_NAMES.MANUFACTURER]: '',
    [FIELD_NAMES.MANUFACTURE_YEAR]: '',
    [FIELD_NAMES.MODEL]: '',
    [FIELD_NAMES.VIN]: '',
    [FIELD_NAMES.TRANSPORTATION_COST]: '',
    [FIELD_NAMES.CAR_COST]: '',
    [FIELD_NAMES.STATE_ID]: '',
    [FIELD_NAMES.EXACT_ADDRESS]: '',
    [FIELD_NAMES.IS_INSURED]: '',
    [FIELD_NAMES.CAR_CATEGORY]: '',
    [FIELD_NAMES.MILEAGE]: '',
    [FIELD_NAMES.STATUS]: '',
    [FIELD_NAMES.CONTAINER_ID]: '',
    // [FIELD_NAMES.DEALER_ID]: "",
    [FIELD_NAMES.RECEIVER_ID]: '',
    [FIELD_NAMES.ADDITIONAL_DETAILS]: '',
    [FIELD_NAMES.CAR_DETAILS]: '',
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      console.log('onSubmit:', values)

      const numericValues: {
        [x: string]: string | number
      } = { ...values }
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

      // console.log('onSubmit with numeric values:', numericValues)

      try {
        const response = orderId
          ? await axiosInstance.put(
              `${endpoints.ORDERS_ADMIN}/${orderId}`,
              numericValues
            )
          : await axiosInstance.post(endpoints.ORDERS_ADMIN, numericValues)

        message.success(
          orderId
            ? t('order edited successfully')
            : t('order created successfully')
        )

        // Reset all fields
        resetForm()

        return response
      } catch (error) {
        if (orderId) {
          message.error(t('could not edit order'))
          console.error('Error editing order:', error)
        } else {
          message.error(t('could not create order'))
          console.error('Error creating new order:', error)
        }
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
    formik.values[FIELD_NAMES.STATUS].length === 0 ||
    formik.values[FIELD_NAMES.MILEAGE] === null ||
    formik.values[FIELD_NAMES.TRANSPORTATION_COST] === null ||
    formik.values[FIELD_NAMES.TRANSPORTATION_COST] === undefined ||
    formik.values[FIELD_NAMES.TRANSPORTATION_COST] === '' ||
    isNaN(Number(formik.values[FIELD_NAMES.TRANSPORTATION_COST])) ||
    formik.values[FIELD_NAMES.CAR_COST] === null ||
    formik.values[FIELD_NAMES.CAR_COST] === undefined ||
    formik.values[FIELD_NAMES.CAR_COST] === '' ||
    isNaN(Number(formik.values[FIELD_NAMES.CAR_COST])) ||
    formik.values[FIELD_NAMES.MILEAGE] === null ||
    formik.values[FIELD_NAMES.MILEAGE] === undefined ||
    formik.values[FIELD_NAMES.MILEAGE] === '' ||
    isNaN(Number(formik.values[FIELD_NAMES.MILEAGE])) ||
    formik.values[FIELD_NAMES.MANUFACTURE_YEAR] === null ||
    formik.values[FIELD_NAMES.MANUFACTURE_YEAR] === undefined ||
    formik.values[FIELD_NAMES.MANUFACTURE_YEAR] === '' ||
    isNaN(Number(formik.values[FIELD_NAMES.MANUFACTURE_YEAR])) ||
    // formik.values[FIELD_NAMES.DEALER_ID] !== 'number' ||
    typeof formik.values[FIELD_NAMES.STATE_ID] !== 'number' ||
    typeof formik.values[FIELD_NAMES.CONTAINER_ID] !== 'number' ||
    typeof formik.values[FIELD_NAMES.RECEIVER_ID] !== 'number'

  const prefillFormikValues = (orderDetails: ORDER_DATA) => {
    setFieldValue(FIELD_NAMES.MANUFACTURER, orderDetails.manufacturer)
    setFieldValue(FIELD_NAMES.MANUFACTURE_YEAR, orderDetails.manufactureYear)
    setFieldValue(FIELD_NAMES.MODEL, orderDetails.model)
    setFieldValue(FIELD_NAMES.VIN, orderDetails.vin)
    setFieldValue(
      FIELD_NAMES.TRANSPORTATION_COST,
      orderDetails.transportationCost
    )
    setFieldValue(FIELD_NAMES.CAR_COST, orderDetails.carCost)
    setFieldValue(FIELD_NAMES.STATE_ID, orderDetails.state.id)
    setFieldValue(FIELD_NAMES.EXACT_ADDRESS, orderDetails.exactAddress)
    setFieldValue(
      FIELD_NAMES.ADDITIONAL_DETAILS,
      orderDetails.additionalDetails
    )
    setFieldValue(FIELD_NAMES.CAR_DETAILS, orderDetails.carDetails)
    setFieldValue(FIELD_NAMES.IS_INSURED, orderDetails.isInsured)
    setFieldValue(FIELD_NAMES.CAR_CATEGORY, orderDetails.carCategory)
    setFieldValue(FIELD_NAMES.MILEAGE, orderDetails.mileage)
    setFieldValue(FIELD_NAMES.STATUS, orderDetails.status)
    setFieldValue(FIELD_NAMES.CONTAINER_ID, orderDetails.container.id)
    setFieldValue(FIELD_NAMES.RECEIVER_ID, orderDetails.receiver.id)
    setFieldValue(
      FIELD_NAMES.ADDITIONAL_DETAILS,
      orderDetails.additionalDetails
    )
    setFieldValue(FIELD_NAMES.CAR_DETAILS, orderDetails.carDetails)
  }

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    validateForm,
    handleSubmit,
    setFieldValue,
    resetForm,
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
        prefillFormikValues,
        resetForm,
        setOrderId,
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
