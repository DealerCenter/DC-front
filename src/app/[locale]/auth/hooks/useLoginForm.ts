import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'

const useLoginForm = () => {
  const t = useTranslations('useForm')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('login', values)
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email(t('must be valid email'))
        .required(t('email required')),
      password: yup.string().required(t('password required')),
    }),
  })

  return {
    values: formik.values,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
    errors: formik.errors,
    touched: formik.touched,
  }
}

export default useLoginForm
