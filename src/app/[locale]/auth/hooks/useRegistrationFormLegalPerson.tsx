import React, { ReactNode, createContext, useContext, useState } from 'react'
import { useFormik, FormikValues, Formik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import axiosInstance from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import { handleAuthResponse } from '@/common/helpers/utils'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'

const FormikContext = createContext<FormikValues | null>(null)

export const FIELD_NAMES = {
  COMPANY_NAME: 'companyName',
  IDENTIFICATION_CODE: 'identificationCode',
  COMPANY_ADDRESS: 'companyAddress',
  WEBSITE_URL: 'websiteUrl',
  DOCUMENT: 'document',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  CONTACT_NUMBER: 'phoneNumber',
  BIRTH_DATE: 'birthDate',
  PERSONAL_ID: 'personalId',
  EMAIL: 'email',
  PASSWORD: 'password',
  REPEAT_PASSWORD: 'repeatPassword',

  ADDRESS: 'address',
}

export const RegisterFormProviderLegalPerson = ({
  children,
}: {
  children: ReactNode
}) => {
  const t = useTranslations('useForm')
  const router = useRouter()
  const [uploadDocument, setUploadDocument] = useState<Blob>()

  const initialValues = {
    [FIELD_NAMES.EMAIL]: '',
    [FIELD_NAMES.PASSWORD]: '',
    [FIELD_NAMES.REPEAT_PASSWORD]: '',
    [FIELD_NAMES.COMPANY_NAME]: '',
    [FIELD_NAMES.IDENTIFICATION_CODE]: '',
    [FIELD_NAMES.COMPANY_ADDRESS]: '',
    [FIELD_NAMES.ADDRESS]: '',
    [FIELD_NAMES.WEBSITE_URL]: '',
    [FIELD_NAMES.FIRST_NAME]: '',
    [FIELD_NAMES.LAST_NAME]: '',
    [FIELD_NAMES.CONTACT_NUMBER]: '',
    [FIELD_NAMES.BIRTH_DATE]: '',
    [FIELD_NAMES.PERSONAL_ID]: '',
  }

  const legalFormData = new FormData()

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = { ...values }
      delete data[FIELD_NAMES.REPEAT_PASSWORD]
      Object.keys(data).forEach((key) => legalFormData.append(key, values[key]))

      uploadDocument &&
        legalFormData.append(FIELD_NAMES.DOCUMENT, uploadDocument)

      try {
        const response = await axiosInstance.post<REGISTER_RES>(
          endpoints.REGISTER_LEGAL,
          legalFormData
        )
        handleAuthResponse(response)
        router.push(routeName.dealer)
      } catch (error) {
        console.error('Error:', error)
      }
    },

    validationSchema: yup.object({
      [FIELD_NAMES.COMPANY_NAME]: yup
        .string()
        .required(t('company name required')),
      [FIELD_NAMES.EMAIL]: yup
        .string()
        .email(t('must be valid email'))
        .required(t('email required')),
      [FIELD_NAMES.PASSWORD]: yup.string().required(t('password required')),
      [FIELD_NAMES.REPEAT_PASSWORD]: yup
        .string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match'),
      [FIELD_NAMES.IDENTIFICATION_CODE]: yup
        .string()
        .required(t('identification code required')),
      [FIELD_NAMES.ADDRESS]: yup.string().required(t('address required')),
      [FIELD_NAMES.WEBSITE_URL]: yup.string(),
      [FIELD_NAMES.LAST_NAME]: yup
        .string()
        .required(t('name of representative required')),
      [FIELD_NAMES.LAST_NAME]: yup
        .string()
        .required(t('surname of representative required')),
      [FIELD_NAMES.CONTACT_NUMBER]: yup
        .string()
        .required(t('contact number required')),
      [FIELD_NAMES.BIRTH_DATE]: yup
        .date()
        .required(t('date of birth required')),
      [FIELD_NAMES.PERSONAL_ID]: yup
        .number()
        .required(t('personal number required')),
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
        setUploadDocument,
      }}
    >
      {children}
    </FormikContext.Provider>
  )
}

export const useRegisterFormContextLegalPerson = <
  Values extends FormikValues = FormikValues,
  ExtraProps = {},
>() => {
  const context = useContext(FormikContext)
  if (!context) {
    throw new Error('useFormikContext must be used within a FormikProvider')
  }
  return context
}
