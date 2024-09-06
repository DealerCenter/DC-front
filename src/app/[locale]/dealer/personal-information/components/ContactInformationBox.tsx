import React, { useEffect, useState } from 'react'
import TextInputField from './TextInputField'
import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'
import styled from 'styled-components'
import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import { useTranslations } from 'next-intl'
import { useUserData } from '@/common/store/userDataStore'
import { updateUserData } from '@/api/apiCalls'

type Props = { type: 'representative' | 'individual' | 'company' }

const ContactInformationBox = ({ type }: Props) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isSaved, setIsSaved] = useState(true)

  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    address: '',
    companyName: '',
    identificationCode: '',
    companyAddress: '',
  })

  const t = useTranslations('')
  const { userData, fetchAndUpdateUser } = useUserData()

  useEffect(() => {
    if (userData) {
      setFormData({
        email: userData?.email || '',
        phoneNumber: userData?.phoneNumber || '',
        address: userData?.address || '',
        companyName: userData?.juridicalInfo?.companyName || '',
        identificationCode: userData?.juridicalInfo?.identificationCode || '',
        companyAddress: userData?.juridicalInfo?.companyAddress || '',
      })
    }
  }, [userData])

  // const handleSave = async () => {
  //   if (!userData) return

  //   if (type === 'company' && userData.juridicalInfo) {
  //     console.log('trying to save Company data')
  //     const data = {
  //       email: userData.email,
  //       phoneNumber: userData.phoneNumber,
  //       address: userData.address,
  //       juridicalInfo: {
  //         companyName:formData companyName,
  //         identificationCode: identificationCode,
  //         companyAddress: companyAddress,
  //         websiteUrl: userData.juridicalInfo.websiteUrl,
  //       },
  //     }
  //     await updateUserData(data).then(() => {
  //       fetchAndUpdateUser()
  //       console.log('everything done right')
  //     })
  //   }

  //   if (type === 'representative' && userData.juridicalInfo) {
  //     console.log('trying to save Email, Mobile, Address data')
  //     const data = {
  //       email: email,
  //       phoneNumber: phoneNumber,
  //       address: address,
  //       juridicalInfo: {
  //         companyName: companyName,
  //         identificationCode: identificationCode,
  //         companyAddress: companyAddress,
  //         websiteUrl: userData.juridicalInfo.websiteUrl,
  //       },
  //     }
  //     await updateUserData(data).then(() => {
  //       fetchAndUpdateUser()
  //       console.log('everything done right')
  //     })
  //   }

  //   if (type === 'individual') {
  //     console.log('NOT WORKING YET')
  //   }
  // }

  const handleSave = async () => {
    if (!userData) return

    const data = {
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      juridicalInfo: {
        companyName: formData.companyName,
        identificationCode: formData.identificationCode,
        companyAddress: formData.companyAddress,
        websiteUrl: userData.juridicalInfo?.websiteUrl,
      },
    }

    const response = await updateUserData(data)
    fetchAndUpdateUser()

    if (response) {
      setSuccessMessage(true)
      setErrorMessage(false)
      setIsSaved(true)
    } else {
      setSuccessMessage(false)
      setErrorMessage(true)
    }
  }

  const renderInputFields = () => {
    if (type === 'company') {
      return (
        <>
          <TextInputField
            onChange={() => setIsSaved(false)}
            label={t('company name')}
            value={formData.companyName}
            setValue={(value) => handleChange('companyName', value)}
          />
          <TextInputField
            onChange={() => setIsSaved(false)}
            label={t('identification code')}
            value={formData.identificationCode}
            setValue={(value) => handleChange('identificationCode', value)}
          />
          <TextInputField
            onChange={() => setIsSaved(false)}
            label={t('address')}
            value={formData.companyAddress}
            setValue={(value) => handleChange('companyAddress', value)}
          />
        </>
      )
    } else {
      return (
        <>
          <TextInputField
            onChange={() => setIsSaved(false)}
            label={t('email')}
            value={formData.email}
            setValue={(value) => handleChange('email', value)}
            type='email'
          />
          <TextInputField
            onChange={() => setIsSaved(false)}
            label={t('mobile number')}
            value={formData.phoneNumber}
            setValue={(value) => handleChange('phoneNumber', value)}
          />
          <TextInputField
            onChange={() => setIsSaved(false)}
            label={t('address')}
            value={formData.address}
            setValue={(value) => handleChange('address', value)}
          />
        </>
      )
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    setIsSaved(false)
  }

  return (
    <Container>
      <InputFieldsHeader
        text={
          type === 'individual'
            ? t('contact information')
            : t(`contact info of ${type}`)
        }
        onEdit={() => setIsOpenDropdown((is) => !is)}
        onArrowDown={() => setIsOpenDropdown((is) => !is)}
        isOpen={isOpenDropdown}
      />
      {isOpenDropdown && (
        <>
          <InputFieldsFrame>{renderInputFields()}</InputFieldsFrame>
          {successMessage && (
            <Success>{t('information updated successfully')}</Success>
          )}
          {errorMessage && <Error>{t('information not updated')}</Error>}
          {!isSaved && (
            <ButtonFrame>
              <FormSaveButton text={t('save')} onClick={handleSave} />
            </ButtonFrame>
          )}
        </>
      )}
    </Container>
  )
}

export default ContactInformationBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const InputFieldsFrame = styled.div`
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Error = styled.div`
  padding-left: 40px;
  color: ${({ theme }) => theme.colors?.red};
`

const Success = styled.div`
  padding-left: 40px;
  color: ${({ theme }) => theme.colors?.green};
`
