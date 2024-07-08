import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const useForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      companyName: '',
      identificationCode: '',
      adress: '',
      website: '',
    },
    onSubmit: () => {
      console.log(formik.values.email)
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      password: yup.string().required('Password is required'),
      companyName: yup.string().required('Company name is required'),
      identificationCode: yup.string().required('Company name is required'),
      adress: yup.string().required('Company name is required'),
      website: yup.string(),
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
