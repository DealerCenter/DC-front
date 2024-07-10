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
        .email('must be a valid email')
        .required('email is required'),
      password: yup.string().required('password is required'),
      repeatPassword: yup.string().required('password is required'),
      companyName: yup.string().required('company name  is required'),
      identificationCode: yup
        .string()
        .required('identification code is required'),
      address: yup.string().required('address  is required'),
      website: yup.string(),
      nameOfRepresentative: yup
        .string()
        .required('name of representative is required'),
      surnameOfRepresentative: yup
        .string()
        .required('surname of representative is required'),
      contactNumber: yup.string().required('contact number name is required'),
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
