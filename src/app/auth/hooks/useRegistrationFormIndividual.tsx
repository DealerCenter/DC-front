import React, { ReactNode, createContext, useContext } from 'react'
import { useFormik, FormikValues, Formik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'

const FormikContext = createContext<FormikValues | null>(null)

export const RegisterFormProviderIndividual = ({
  children,
}: {
  children: ReactNode
}) => {
  const t = useTranslations('useForm')

  const initialValues = {
    name: '',
    surname: '',
    dateOfBirth: '',
    actualAddress: '',
    contactNumber: '',

    personalNumber: '',

    email: '',
    password: '',
    repeatPassword: '',
  }

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log('formik', values)
    },
    validationSchema: yup.object({
      name: yup.string().required(t('name required')),
      surname: yup.string().required(t('surname required')),
      dateOfBirth: yup.date().required(t('date of birth required')),
      actualAddress: yup.string().required(t('actual address required')),
      contactNumber: yup.string().required(t('contact number required')),

      personalNumber: yup.number().required(t('personal number required')),

      email: yup
        .string()
        .email(t('must be valid email'))
        .required(t('email required')),
      password: yup.string().required(t('password required')),
      repeatPassword: yup.string().required(t('password required')),
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

export const useRegisterFormContextIndividual = <
  Values extends FormikValues = FormikValues,
  ExtraProps = {},
>() => {
  const context = useContext(FormikContext)
  if (!context) {
    throw new Error('useFormikContext must be used within a FormikProvider')
  }
  return context
}
