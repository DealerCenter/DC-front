import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { useRegisterFormContextLegalPerson } from '../../../hooks/useRegistrationFormLegalPerson'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import FileDropZone from '@/common/components/InputElements/FileDropZone'

type Props = {
  setFormStep: React.Dispatch<React.SetStateAction<number>>
  goToLogin: () => void
}

const LegalPersonForm1 = ({ setFormStep, goToLogin }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, errors, touched, validateForm } =
    useRegisterFormContextLegalPerson()

  const onNextClick = async () => {
    const validated = await validateForm()
    if (
      !validated.companyName &&
      !validated.identificationCode &&
      !validated.address &&
      !validated.website
    ) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled =
    values.companyName.length === 0 ||
    values.identificationCode.length === 0 ||
    values.address.length === 0

  return (
    <StyledForm>
      <TextInput
        type='text'
        name='companyName'
        placeholder={t('company name')}
        value={values.companyName}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.companyName && touched.companyName ? errors.companyName : ''
        }
      />

      <TextInput
        type='text'
        name='identificationCode'
        placeholder={t('identification code')}
        value={values.identificationCode}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.identificationCode && touched.identificationCode
            ? errors.identificationCode
            : ''
        }
      />
      <TextInput
        type='text'
        name='address'
        placeholder={t('address')}
        value={values.address}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.address && touched.address ? errors.address : ''}
      />
      <TextInput
        type='text'
        name='website'
        placeholder={t('website')}
        value={values.website}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.website && touched.website ? errors.website : ''}
      />
      <FileDropZone
        dropText={t('Drop the files here ...')}
        text={t('upload a certificate')}
        uploadedText={t('file uploaded')}
      />
      <AppButton
        text={t('next')}
        type='filled'
        disabled={isButtonDisabled}
        onClick={onNextClick}
      />
      <div>
        <StyledP>{t('already registered?')}</StyledP>
        <AppButton type='outlined' text={t('login')} onClick={goToLogin} />
      </div>
    </StyledForm>
  )
}

export default LegalPersonForm1

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const StyledP = styled.p`
  margin-bottom: 16px;
  margin-top: 24px;
`
