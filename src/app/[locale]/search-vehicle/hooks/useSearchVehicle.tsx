'use client'
import { FormikValues, useFormik } from 'formik'
import { createContext, ReactNode, useContext, useState } from 'react'
import * as yup from 'yup'

import { getVehicleList } from '@/common/helpers/utils'
import { message } from 'antd'

const FormikContext = createContext<FormikValues | null>(null)

export const FIELD_NAMES = {
  PAGE: 'page',
  PER_PAGE: 'per_page',
  AUCTION_NAME: 'auction_name',
  MAKE: 'make', // manufacturer
  MODEL: 'model',
  YEAR_FROM: 'year_from',
  YEAR_TO: 'year_to',
  ODOMETER_FROM: 'odometer_from',
  ODOMETER_TO: 'odometer_to',
}

export const SearchVehicleProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [vehicleList, setVehicleList] = useState<VehicleListResult[]>()
  const [pagination, setPagination] = useState<VehicleListPagination>()
  const [makeId, setMakeId] = useState<number>()

  const initialValues = {
    [FIELD_NAMES.PAGE]: 1,
    [FIELD_NAMES.PER_PAGE]: 10,
    [FIELD_NAMES.AUCTION_NAME]: '',
    [FIELD_NAMES.MAKE]: '',
    [FIELD_NAMES.MODEL]: '',
    [FIELD_NAMES.YEAR_FROM]: '',
    [FIELD_NAMES.YEAR_TO]: '',
    [FIELD_NAMES.ODOMETER_FROM]: 0,
    [FIELD_NAMES.ODOMETER_TO]: Infinity,
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true)
      try {
        const response = await getVehicleList(values)
        // resetForm()
        setVehicleList(response.result)
        setPagination(response.pagination)
        return response
      } catch (error) {
        message.error(error?.response?.data?.message)
        console.error('Error fetching vehicles data:', error)
      } finally {
        setIsLoading(false)
      }
    },

    validationSchema: yup.object({
      [FIELD_NAMES.PAGE]: yup.string(),
      //   .required(t('page required')),
      [FIELD_NAMES.PER_PAGE]: yup.string(),
      [FIELD_NAMES.AUCTION_NAME]: yup.string(),
      [FIELD_NAMES.MAKE]: yup.string(),
      [FIELD_NAMES.MODEL]: yup.string(),
      [FIELD_NAMES.YEAR_FROM]: yup.string(),
      [FIELD_NAMES.YEAR_TO]: yup.string(),
      [FIELD_NAMES.ODOMETER_FROM]: yup.number(),
      [FIELD_NAMES.ODOMETER_TO]: yup.number(),
    }),
  })

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
        resetForm,
        isLoading,
        vehicleList,
        pagination,
        makeId,
        setMakeId,
      }}
    >
      {children}
    </FormikContext.Provider>
  )
}

export const useSearchVehicle = <
  Values extends FormikValues = FormikValues,
  ExtraProps = {},
>() => {
  const context = useContext(FormikContext)
  if (!context) {
    throw new Error(
      'useSearchVehicle must be used within a SearchVehicleProvider'
    )
  }
  return context
}
