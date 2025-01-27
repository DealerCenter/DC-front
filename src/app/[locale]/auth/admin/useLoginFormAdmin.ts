import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import axiosInstance from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import { AxiosError } from 'axios'
import { handleAuthResponse } from '@/common/helpers/utils'
import { message } from 'antd'
import { LOGIN_RES } from '@/api/apiTypes'

export const FIELD_NAMES = {
  USERNAME: 'username',
  PASSWORD: 'password',
}

const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [axiosError, setAxiosError] = useState<AxiosError<unknown> | undefined>(
    undefined
  )
  const t = useTranslations('')
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      [FIELD_NAMES.USERNAME]: '',
      [FIELD_NAMES.PASSWORD]: '',
    },
    onSubmit: async (values) => {
      setIsLoading(true)
      try {
        const response = await axiosInstance.post<LOGIN_RES>(
          endpoints.LOGIN_ADMIN,
          values
        )

        handleAuthResponse(response)

        message.success(t('you are logged in'))
        router.push(routeName.admin)
      } catch (error) {
        message.error(t('you could not log in'))
        setIsLoading(false)
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
      [FIELD_NAMES.USERNAME]: yup.string().required(t('username required')),
      [FIELD_NAMES.PASSWORD]: yup.string().required(t('password required')),
    }),
  })

  return {
    values: formik.values,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
    errors: formik.errors,
    touched: formik.touched,
    axiosError: axiosError,
    isLoading,
  }
}

export default useLoginForm
