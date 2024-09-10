import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import {
  FIELD_NAMES,
  useRegisterFormContextLegalPerson,
} from '../../../hooks/useRegistrationFormLegalPerson'

import TextInput from '@/common/components/inputElements/TextInput'
import FileDropZone from '@/common/components/inputElements/FileDropZone'
import AppButton from '@/common/components/appButton/AppButton'
import theme from '@/app/[locale]/theme'
import { useMediaQuery } from 'react-responsive'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const LegalPersonForm2 = ({ setFormStep }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const { values, handleBlur, handleChange, validateForm, errors, touched } =
    useRegisterFormContextLegalPerson()

  const onNextClick = async () => {
    const validated = await validateForm()
    if (
      !validated[FIELD_NAMES.FIRST_NAME] &&
      !validated[FIELD_NAMES.LAST_NAME] &&
      !validated[FIELD_NAMES.CONTACT_NUMBER] &&
      !validated[FIELD_NAMES.BIRTH_DATE] &&
      !validated[FIELD_NAMES.PERSONAL_ID]
    ) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled =
    values[FIELD_NAMES.FIRST_NAME].length === 0 ||
    values[FIELD_NAMES.LAST_NAME].length === 0 ||
    values[FIELD_NAMES.CONTACT_NUMBER].length === 0 ||
    values[FIELD_NAMES.BIRTH_DATE].length === 0 ||
    values[FIELD_NAMES.PERSONAL_ID].length === 0

  return (
    <StyledForm>
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.FIRST_NAME}
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
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.LAST_NAME}
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
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.CONTACT_NUMBER}
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
        width={isMobile ? undefined : 442}
        type='date'
        name={FIELD_NAMES.BIRTH_DATE}
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
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.PERSONAL_ID}
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
        width={442}
        dropText={t('drop the file')}
        text={t('upload an ID photo')}
        uploadedText={t('photo uploaded')}
      />
      <AppButton
        width={442}
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
