import React, { ReactNode, createContext, useContext, useState } from 'react'
import { useFormik, FormikValues } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import axiosInstance from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import { handleAuthResponse } from '@/common/helpers/utils'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import { message } from 'antd'
import { REGISTER_RES } from '@/api/apiTypes'

const FormikContext = createContext<FormikValues | null>(null)

export const FIELD_NAMES = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  BIRTH_DATE: 'birthDate',
  ADDRESS: 'address',
  CONTACT_NUMBER: 'phoneNumber',
  PERSONAL_ID: 'personalId',
  EMAIL: 'email',
  PASSWORD: 'password',
  REPEAT_PASSWORD: 'repeatPassword',
  IMAGE: 'image',
}

export const RegisterFormProviderIndividual = ({
  children,
}: {
  children: any
}) => {
  const t = useTranslations('')
  const router = useRouter()
  const [uploadFile, setUploadFile] = useState<Blob>()

  const initialValues = {
    [FIELD_NAMES.FIRST_NAME]: '',
    [FIELD_NAMES.LAST_NAME]: '',
    [FIELD_NAMES.BIRTH_DATE]: '',
    [FIELD_NAMES.ADDRESS]: '',
    [FIELD_NAMES.CONTACT_NUMBER]: '',
    [FIELD_NAMES.PERSONAL_ID]: '',
    [FIELD_NAMES.EMAIL]: '',
    [FIELD_NAMES.PASSWORD]: '',
    [FIELD_NAMES.REPEAT_PASSWORD]: '',
  }
  const individualFormData = new FormData()

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = { ...values }
      delete data[FIELD_NAMES.REPEAT_PASSWORD]
      Object.keys(data).forEach((key) =>
        individualFormData.append(key, values[key])
      )
      uploadFile && individualFormData.append(FIELD_NAMES.IMAGE, uploadFile)

      try {
        const response = await axiosInstance.post<REGISTER_RES>(
          endpoints.REGISTER,
          individualFormData
        )
        handleAuthResponse(response)
        message.success(t('you registered successfully'))
        router.push(routeName.dealer)
      } catch (error) {
        ;(error as any)?.response &&
          message.error((error as any)?.response?.data?.message[0])
        console.error('Error:', error)
      }
    },

    validationSchema: yup.object({
      [FIELD_NAMES.FIRST_NAME]: yup.string().required(t('name required')),
      [FIELD_NAMES.LAST_NAME]: yup.string().required(t('surname required')),
      [FIELD_NAMES.BIRTH_DATE]: yup
        .date()
        .required(t('date of birth required')),
      [FIELD_NAMES.ADDRESS]: yup
        .string()
        .required(t('actual address required')),
      [FIELD_NAMES.CONTACT_NUMBER]: yup
        .string()
        .required(t('contact number required')),
      [FIELD_NAMES.PERSONAL_ID]: yup
        .number()
        .required(t('personal number required')),
      [FIELD_NAMES.EMAIL]: yup
        .string()
        .email(t('must be valid email'))
        .required(t('email required')),
      [FIELD_NAMES.PASSWORD]: yup.string().required(t('password required')),
      [FIELD_NAMES.REPEAT_PASSWORD]: yup
        .string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match'),
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
        setUploadFile,
      }}
    >
      {children}
    </FormikContext.Provider>
  )
}

export const useRegisterFormContextIndividual = <
  Values extends FormikValues = FormikValues,
  ExtraProps = {}
>() => {
  const context = useContext(FormikContext)
  if (!context) {
    throw new Error('useFormikContext must be used within a FormikProvider')
  }
  return context
}
