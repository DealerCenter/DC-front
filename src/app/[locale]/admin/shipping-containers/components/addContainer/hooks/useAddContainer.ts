import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import axiosInstance from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import { AxiosError } from 'axios'
import { message } from 'antd'
import { createContainer } from '@/api/apiCalls'
import { CONTAINER_POST_RES } from '@/api/apiTypes'

export const FIELD_NAMES = {
  NAME: 'name',
  TRACKING_URL: 'trackingUrl',
}

const useAddContainer = (setUploadedSuccessfully: (arg: boolean) => void) => {
  const [axiosError, setAxiosError] = useState<AxiosError<unknown> | undefined>(
    undefined
  )

  const t = useTranslations('')

  const formik = useFormik({
    initialValues: {
      [FIELD_NAMES.NAME]: '',
      [FIELD_NAMES.TRACKING_URL]: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post<CONTAINER_POST_RES>(
          endpoints.CREATE_CONTAINER,
          values
        )

        setUploadedSuccessfully(true)

        message.success(t('container created successfully'))

        return response
      } catch (error) {
        message.error(t('container could not be created'))

        console.error('Error:', error)
        if (error instanceof AxiosError) {
          console.error('Axios Error:', error)
          setAxiosError(error)
        } else {
          console.error('Unknown Error:', error)
          setAxiosError(undefined) // Handle non-Axios errors if needed
        }
      }
    },

    validationSchema: yup.object({
      [FIELD_NAMES.NAME]: yup.string().required(t('name required')),
      [FIELD_NAMES.TRACKING_URL]: yup.string().required(t('url required')),
    }),
  })

  const isButtonDisabled =
    formik.values[FIELD_NAMES.NAME].length === 0 ||
    formik.values[FIELD_NAMES.TRACKING_URL].length === 0

  return {
    values: formik.values,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
    errors: formik.errors,
    touched: formik.touched,
    axiosError: axiosError,
    setFieldValue: formik.setFieldValue,
    isButtonDisabled,
  }
}

export default useAddContainer
