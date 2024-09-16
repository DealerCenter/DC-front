import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import axiosInstance from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import { AxiosError } from 'axios'

export const FIELD_NAMES = {
  ID_IMAGE: 'idImage ',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  PERSONAL_ID: 'personalId',
  CONTACT_NUMBER: 'phoneNumber',
  IS_JURIDICAL: 'isJuridical',
}

const useAddRecipients = () => {
  const [axiosError, setAxiosError] = useState<AxiosError<unknown> | undefined>(
    undefined
  )
  const [uploadIdImage, setUploadIdImage] = useState<Blob>()
  //   const router = useRouter()
  const t = useTranslations('useForm')

  const initialValues = {
    [FIELD_NAMES.FIRST_NAME]: '',
    [FIELD_NAMES.LAST_NAME]: '',
    [FIELD_NAMES.CONTACT_NUMBER]: '',
    [FIELD_NAMES.PERSONAL_ID]: '',
    [FIELD_NAMES.IS_JURIDICAL]: false,
  }

  const legalFormData = new FormData()

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log('slkfdjsimage:', uploadIdImage)
      const data = { ...values }
      Object.keys(data).forEach((key) => {
        legalFormData.append(key, values[key])
      })

      uploadIdImage && legalFormData.append(FIELD_NAMES.ID_IMAGE, uploadIdImage)

      //   console.log('data we are sending to backend:', legalFormData)
      try {
        const response = await axiosInstance.post<RECEIVER_POST_RES>(
          endpoints.RECEIVERS,
          legalFormData
        )

        console.log('__Receiver uploaded successfully__:', response)
        // message.success(t('you registered successfully'))
        // router.push(routeName.dealer)
        return response
      } catch (error) {
        // message.success(t('you could not register'))
        console.error('Error:', error)
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
      //   [FIELD_NAMES.ID_IMAGE]: yup.string().required(t('manufacturer required')),
      [FIELD_NAMES.FIRST_NAME]: yup.string().required(t('name required')),
      [FIELD_NAMES.LAST_NAME]: yup.string().required(t('surname required')),
      [FIELD_NAMES.CONTACT_NUMBER]: yup
        .string()
        .required(t('contact number required')),

      [FIELD_NAMES.PERSONAL_ID]: yup
        .string()
        .required(t('personal number required')),
      [FIELD_NAMES.IS_JURIDICAL]: yup.boolean().required(''),
    }),
  })

  const isButtonDisabled =
    formik.values[FIELD_NAMES.FIRST_NAME].length === 0 ||
    formik.values[FIELD_NAMES.LAST_NAME].length === 0 ||
    formik.values[FIELD_NAMES.CONTACT_NUMBER].length === 0 ||
    formik.values[FIELD_NAMES.PERSONAL_ID].length === 0

  return {
    values: formik.values,
    handleChange: formik.handleChange,
    handleBlur: formik.handleBlur,
    handleSubmit: formik.handleSubmit,
    errors: formik.errors,
    touched: formik.touched,
    axiosError: axiosError,
    setUploadIdImage: setUploadIdImage,
    setFieldValue: formik.setFieldValue,
    isButtonDisabled,
  }
}

export default useAddRecipients
