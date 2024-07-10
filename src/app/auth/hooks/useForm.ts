import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const useForm = () => {
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
        .email('Must be a valid email')
        .required('Email is required'),
      password: yup.string().required('Password is required'),
      repeatPassword: yup.string().required('Password is required'),
      companyName: yup.string().required('Company name  is required'),
      identificationCode: yup
        .string()
        .required('Identification code is required'),
      adress: yup.string().required('Adress  is required'),
      website: yup.string(),
      nameOfRepresentative: yup
        .string()
        .required('Name of representative is required'),
      surnameOfRepresentative: yup
        .string()
        .required('Surname of representative is required'),
      contactNumber: yup.string().required('Contact number name is required'),
      dateOfBirth: yup.date().required('date of birth name is required'),
      personalNumber: yup.number().required('personal number name is required'),
      name: yup.number().required('name is required'),
      surname: yup.number().required('surname is required'),
      actualAddress: yup.number().required('actual adress is required'),
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
