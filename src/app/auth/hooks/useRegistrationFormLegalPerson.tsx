import React, { ReactNode, createContext, useContext } from 'react'
import { useFormik, FormikValues, Formik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'

const FormikContext = createContext<FormikValues | null>(null)

export const RegisterFormProviderLegalPerson = ({
  children,
}: {
  children: ReactNode
}) => {
  const t = useTranslations('useForm')

  const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
    companyName: '',
    identificationCode: '',
    address: '',
    website: '',
    nameOfRepresentative: '',
    surnameOfRepresentative: '',
    contactNumber: '',
    dateOfBirth: '',
    personalNumber: '',
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log('formik', values)
    },
    validationSchema: yup.object({
      companyName: yup.string().required(t('company name required')),
      email: yup
        .string()
        .email(t('must be valid email'))
        .required(t('email required')),
      password: yup.string().required(t('password required')),
      repeatPassword: yup.string().required(t('password required')),
      identificationCode: yup
        .string()
        .required(t('identification code required')),
      address: yup.string().required(t('address required')),
      website: yup.string(),
      nameOfRepresentative: yup
        .string()
        .required(t('name of representative required')),
      surnameOfRepresentative: yup
        .string()
        .required(t('surname of representative required')),
      contactNumber: yup.string().required(t('contact number required')),
      dateOfBirth: yup.date().required(t('date of birth required')),
      personalNumber: yup.number().required(t('personal number required')),
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
