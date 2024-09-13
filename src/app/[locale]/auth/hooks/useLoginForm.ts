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

export const FIELD_NAMES = {
  EMAIL: 'email',
  PASSWORD: 'password',
}

const useLoginForm = () => {
  const [axiosError, setAxiosError] = useState<AxiosError<unknown> | undefined>(
    undefined
  )
  const tUseForm = useTranslations('useForm')
  const t = useTranslations('')
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      [FIELD_NAMES.EMAIL]: '',
      [FIELD_NAMES.PASSWORD]: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post<LOGIN_RES>(
          endpoints.LOGIN,
          values
        )

        handleAuthResponse(response)

        message.success(t('you are logged in'))
        router.push(routeName.dealer)
      } catch (error) {
        message.success(t('you could not log in'))
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
      [FIELD_NAMES.EMAIL]: yup
        .string()
        .email(tUseForm('must be valid email'))
        .required(tUseForm('email required')),
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
  }
}

export default useLoginForm
