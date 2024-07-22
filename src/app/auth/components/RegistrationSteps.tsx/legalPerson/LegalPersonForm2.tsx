import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { useRegisterFormContextLegalPerson } from '../../../hooks/useRegistrationFormLegalPerson'

import TextInput from '@/common/components/inputElements/TextInput'
import FileDropZone from '@/common/components/inputElements/FileDropZone'
import AppButton from '@/common/components/appButton/AppButton'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const LegalPersonForm2 = ({ setFormStep }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, validateForm, errors, touched } =
    useRegisterFormContextLegalPerson()

  const onNextClick = async () => {
    const validated = await validateForm()
    if (
      !validated.nameOfRepresentative &&
      !validated.surnameOfRepresentative &&
      !validated.contactNumber &&
      !validated.dateOfBirth &&
      !validated.personalNumber
    ) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled =
    values.nameOfRepresentative.length === 0 ||
    values.surnameOfRepresentative.length === 0 ||
    values.contactNumber.length === 0 ||
    values.dateOfBirth.length === 0 ||
    values.personalNumber.length === 0

  return (
    <StyledForm>
      <TextInput
        type='text'
        name='nameOfRepresentative'
        placeholder={t('name of representative')}
        value={values.nameOfRepresentative}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.nameOfRepresentative && touched.nameOfRepresentative
            ? errors.nameOfRepresentative
            : ''
        }
      />
      <TextInput
        type='text'
        name='surnameOfRepresentative'
        placeholder={t('surname of representative')}
        value={values.surnameOfRepresentative}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.surnameOfRepresentative && touched.surnameOfRepresentative
            ? errors.surnameOfRepresentative
            : ''
        }
      />
      <TextInput
        type='text'
        name='contactNumber'
        placeholder={t('contact number')}
        value={values.contactNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.contactNumber && touched.contactNumber
            ? errors.contactNumber
            : ''
        }
      />
      <TextInput
        type='date'
        name='dateOfBirth'
        placeholder={t('date of birth')}
        value={values.dateOfBirth}
        onChange={handleChange}
        onBlur={handleBlur}
        optionalInfo={t('enter your date of birth')}
        errorMessage={
          errors.dateOfBirth && touched.dateOfBirth ? errors.dateOfBirth : ''
        }
      />
      <TextInput
        type='text'
        name='personalNumber'
        placeholder={t('personal number')}
        value={values.personalNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.personalNumber && touched.personalNumber
            ? errors.personalNumber
            : ''
        }
      />
      <FileDropZone
        dropText={t('drop the file')}
        text={t('upload an ID photo')}
        uploadedText={t('photo uploaded')}
      />
      <AppButton
        text={t('next')}
        type='filled'
        disabled={isButtonDisabled}
        onClick={onNextClick}
      />
    </StyledForm>
  )
}

export default LegalPersonForm2

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`
