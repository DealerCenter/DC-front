import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'

const useForm = () => {
  const t = useTranslations('useForm')

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
      companyName: '',
      identificationCode: '',
      adress: '',
      website: '',
      nameOfRepresentative: '',
      surnameOfRepresentative: '',
      contactNumber: '',
      dateOfBirth: '',
      personalNumber: '',
      name: '',
      surname: '',
      actualAddress: '',
    },
    onSubmit: () => {
      console.log(formik.values.email)
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email(t('must be valid email'))
        .required(t('email required')),
      password: yup.string().required(t('password required')),
      repeatPassword: yup.string().required(t('password required')),
      companyName: yup.string().required(t('company name required')),
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
      name: yup.number().required(t('name required')),
      surname: yup.number().required(t('surname required')),
      actualAddress: yup.number().required(t('actual address required')),
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

export default useForm
