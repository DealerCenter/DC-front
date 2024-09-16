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
  const {
    values,
    handleBlur,
    handleChange,
    validateForm,
    errors,
    touched,
    setUploadIdImage,
  } = useRegisterFormContextLegalPerson()

  const onNextClick = async () => {
    const validated = await validateForm()
    if (
      !validated[FIELD_NAMES.FIRST_NAME] &&
      !validated[FIELD_NAMES.LAST_NAME] &&
      !validated[FIELD_NAMES.CONTACT_NUMBER] &&
      !validated[FIELD_NAMES.ADDRESS] &&
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
    values[FIELD_NAMES.ADDRESS].length === 0 ||
    values[FIELD_NAMES.BIRTH_DATE].length === 0 ||
    values[FIELD_NAMES.PERSONAL_ID].length === 0

  return (
    <StyledForm>
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.FIRST_NAME}
        placeholder={t('name of representative')}
        value={values[FIELD_NAMES.FIRST_NAME]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.FIRST_NAME] && touched[FIELD_NAMES.FIRST_NAME]
            ? errors[FIELD_NAMES.FIRST_NAME]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.LAST_NAME}
        placeholder={t('surname of representative')}
        value={values[FIELD_NAMES.LAST_NAME]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.LAST_NAME] && touched[FIELD_NAMES.LAST_NAME]
            ? errors[FIELD_NAMES.LAST_NAME]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.ADDRESS}
        placeholder={t('address of representative')}
        value={values[FIELD_NAMES.ADDRESS]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.ADDRESS] && touched[FIELD_NAMES.ADDRESS]
            ? errors[FIELD_NAMES.ADDRESS]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.CONTACT_NUMBER}
        placeholder={t('contact number')}
        value={values[FIELD_NAMES.CONTACT_NUMBER]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.CONTACT_NUMBER] &&
          touched[FIELD_NAMES.CONTACT_NUMBER]
            ? errors[FIELD_NAMES.CONTACT_NUMBER]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='date'
        name={FIELD_NAMES.BIRTH_DATE}
        placeholder={t('date of birth')}
        value={values[FIELD_NAMES.BIRTH_DATE]}
        onChange={handleChange}
        onBlur={handleBlur}
        optionalInfo={t('enter your date of birth')}
        errorMessage={
          errors[FIELD_NAMES.BIRTH_DATE] && touched[FIELD_NAMES.BIRTH_DATE]
            ? errors[FIELD_NAMES.BIRTH_DATE]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.PERSONAL_ID}
        placeholder={t('personal number')}
        value={values[FIELD_NAMES.PERSONAL_ID]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.PERSONAL_ID] && touched[FIELD_NAMES.PERSONAL_ID]
            ? errors[FIELD_NAMES.PERSONAL_ID]
            : ''
        }
      />
      <FileDropZone
        width={442}
        dropText={t('drop the file here')}
        text={t('upload an ID photo')}
        uploadedText={t('photo uploaded')}
        warningText={t('add an id photo')}
        onDropAdditional={setUploadIdImage}
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
