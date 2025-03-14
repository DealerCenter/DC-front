import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslations } from 'next-intl'
import axiosInstance from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import { AxiosError } from 'axios'
import { message } from 'antd'
import { RECEIVER_POST_RES } from '@/api/apiTypes'

export const FIELD_NAMES = {
  ID_IMAGE: 'idImage',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  PERSONAL_ID: 'personalId',
  CONTACT_NUMBER: 'phoneNumber',
  IS_JURIDICAL: 'isJuridical',
}

const useAddRecipientsAdmin = (
  dealerId: number,
  onSuccess: () => void,
  receiverData?: {
    id: number
    firstName: string
    lastName: string
    personalId: string
    phoneNumber: string
    createdAt: string
    verificationStatus: string
  },
  setUpdatedSuccessfully?: (arg: boolean) => void
) => {
  const [axiosError, setAxiosError] = useState<AxiosError<unknown> | undefined>(
    undefined
  )
  const [isReadOnly, setIsReadOnly] = useState(true)

  const [uploadIdImage, setUploadIdImage] = useState<Blob>()

  const t = useTranslations('')

  const initialValues = {
    [FIELD_NAMES.FIRST_NAME]: receiverData?.firstName || '',
    [FIELD_NAMES.LAST_NAME]: receiverData?.lastName || '',
    [FIELD_NAMES.CONTACT_NUMBER]: receiverData?.phoneNumber || '',
    [FIELD_NAMES.PERSONAL_ID]: receiverData?.personalId || '',
    [FIELD_NAMES.IS_JURIDICAL]: false,
  }

  const legalFormData = new FormData()

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = { ...values }
      Object.keys(data).forEach((key) => {
        const value =
          typeof values[key] === 'boolean'
            ? values[key].toString()
            : values[key].toString()
        legalFormData.append(key, value)
      })

      receiverData && legalFormData.delete(FIELD_NAMES.IS_JURIDICAL)
      dealerId && legalFormData.append('dealerId', dealerId.toString())

      uploadIdImage && legalFormData.append(FIELD_NAMES.ID_IMAGE, uploadIdImage)

      try {
        const response = receiverData
          ? await axiosInstance.put<RECEIVER_POST_RES>(
              `${endpoints.RECEIVERS_ADMIN}/${receiverData.id}`,
              legalFormData
            )
          : await axiosInstance.post<RECEIVER_POST_RES>(
              endpoints.RECEIVERS_ADMIN,
              legalFormData
            )

        setUpdatedSuccessfully && setUpdatedSuccessfully(true)

        message.success(
          receiverData
            ? t('receiver updated successfully')
            : t('receiver uploaded successfully')
        )
        onSuccess()

        return response
      } catch (error) {
        message.error(
          receiverData
            ? t('receiver could not be updated')
            : t('receiver could not be uploaded')
        )
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
    formik.values[FIELD_NAMES.FIRST_NAME].toString().length === 0 ||
    formik.values[FIELD_NAMES.LAST_NAME].toString().length === 0 ||
    formik.values[FIELD_NAMES.CONTACT_NUMBER].toString().length === 0 ||
    formik.values[FIELD_NAMES.PERSONAL_ID].toString().length === 0

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
    isReadOnly,
    setIsReadOnly,
  }
}

export default useAddRecipientsAdmin
