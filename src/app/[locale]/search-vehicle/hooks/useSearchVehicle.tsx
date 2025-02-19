'use client'
import { FormikValues, useFormik } from 'formik'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import * as yup from 'yup'

import { getVehicleList } from '@/common/helpers/utils'
import { message } from 'antd'
import { AxiosError } from 'axios'

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
  CAR_TYPE: 'car_info_vehicle_type',
}

type VehicleListFilters = {
  page: number
  per_page?: number
  auction_name?: 'COPART' | 'IAAI'
  make?: string
  model?: string
  year_from?: string
  year_to?: string
  odometer_from?: number
  odometer_to?: number
  car_info_vehicle_type?: string
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
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({}) // Active filters state

  // const initialValues = {
  //   [FIELD_NAMES.PAGE]: 1,
  //   [FIELD_NAMES.PER_PAGE]: 10,
  //   [FIELD_NAMES.AUCTION_NAME]: '',
  //   [FIELD_NAMES.MAKE]: '',
  //   [FIELD_NAMES.MODEL]: '',
  //   [FIELD_NAMES.YEAR_FROM]: '',
  //   [FIELD_NAMES.YEAR_TO]: '',
  //   [FIELD_NAMES.ODOMETER_FROM]: '',
  //   [FIELD_NAMES.ODOMETER_TO]: '',
  // }

  const initialValues: VehicleListFilters = {
    page: 1,
    per_page: 30,
    auction_name: undefined,
    make: '',
    model: '',
    year_from: '',
    year_to: '',
    odometer_from: undefined,
    odometer_to: undefined,
    car_info_vehicle_type: '',
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true)
      try {
        const response = await getVehicleList(values)
        setVehicleList(response.result)
        setPagination(response.pagination)
        return response
      } catch (error) {
        // Error as AxiosError to safely access its properties
        if (error instanceof AxiosError) {
          // message.error(error?.response?.data?.message)
        } else {
          // message.error('An unknown error occurred.')
        }
        console.error('Error fetching vehicles data:', error)
      } finally {
        setIsLoading(false)
      }
    },

    validationSchema: yup.object({
      [FIELD_NAMES.PAGE]: yup.string(),
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

  useEffect(() => {
    handleSubmit()
  }, [values.page])

  // Update active filters whenever values change
  useEffect(() => {
    const nonDefaultFilters = Object.entries(values).reduce(
      (filters, [key, value]) => {
        if (value !== initialValues[key as keyof VehicleListFilters]) {
          filters[key] = value
        }
        return filters
      },
      {} as Record<string, any>
    )
    setActiveFilters(nonDefaultFilters)
  }, [values])

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
        activeFilters,
      }}
    >
      {children}
    </FormikContext.Provider>
  )
}

export const useSearchVehicle = <
  Values extends FormikValues = FormikValues,
  ExtraProps = {}
>() => {
  const context = useContext(FormikContext)
  if (!context) {
    throw new Error(
      'useSearchVehicle must be used within a SearchVehicleProvider'
    )
  }
  return context
}
