import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import {
  FIELD_NAMES,
  useRegisterFormContextLegalPerson,
} from '../../../hooks/useRegistrationFormLegalPerson'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/inputElements/TextInput'
import FileDropZone from '@/common/components/inputElements/FileDropZone'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {
  setFormStep: React.Dispatch<React.SetStateAction<number>>
  goToLogin: () => void
}

const LegalPersonForm1 = ({ setFormStep, goToLogin }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const t = useTranslations('')
  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    validateForm,
    setUploadDocument,
  } = useRegisterFormContextLegalPerson()

  const onNextClick = async () => {
    const validated = await validateForm()
    if (
      !validated[FIELD_NAMES.COMPANY_NAME] &&
      !validated[FIELD_NAMES.IDENTIFICATION_CODE] &&
      !validated[FIELD_NAMES.COMPANY_ADDRESS] &&
      !validated[FIELD_NAMES.WEBSITE_URL]
    ) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled =
    values[FIELD_NAMES.COMPANY_NAME].length === 0 ||
    values[FIELD_NAMES.IDENTIFICATION_CODE].length === 0 ||
    values[FIELD_NAMES.COMPANY_ADDRESS].length === 0

  return (
    <StyledForm>
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.COMPANY_NAME}
        placeholder={t('company name')}
        value={values[FIELD_NAMES.COMPANY_NAME]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.COMPANY_NAME] && touched[FIELD_NAMES.COMPANY_NAME]
            ? errors[FIELD_NAMES.COMPANY_NAME]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.IDENTIFICATION_CODE}
        placeholder={t('identification code')}
        value={values[FIELD_NAMES.IDENTIFICATION_CODE]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.IDENTIFICATION_CODE] &&
          touched[FIELD_NAMES.IDENTIFICATION_CODE]
            ? errors[FIELD_NAMES.IDENTIFICATION_CODE]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.COMPANY_ADDRESS}
        placeholder={t('company address')}
        value={values[FIELD_NAMES.COMPANY_ADDRESS]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.COMPANY_ADDRESS] &&
          touched[FIELD_NAMES.COMPANY_ADDRESS]
            ? errors[FIELD_NAMES.COMPANY_ADDRESS]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.WEBSITE_URL}
        placeholder={t('website')}
        value={values[FIELD_NAMES.WEBSITE_URL]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.WEBSITE_URL] && touched[FIELD_NAMES.WEBSITE_URL]
            ? errors[FIELD_NAMES.WEBSITE_URL]
            : ''
        }
      />
      <FileDropZone
        width={442}
        dropText={t('Drop the files here ...')}
        text={t('upload a certificate')}
        uploadedText={t('file uploaded')}
        onDropAdditional={setUploadDocument}
      />
      <AppButton
        width={442}
        text={t('next')}
        type='filled'
        disabled={isButtonDisabled}
        onClick={onNextClick}
      />
      <div>
        <StyledP>{t('already registered?')}</StyledP>
        <AppButton
          type='outlined'
          text={t('login')}
          onClick={goToLogin}
          width={442}
        />
      </div>
    </StyledForm>
  )
}

export default LegalPersonForm1

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`

const StyledP = styled.p`
  margin-bottom: 16px;
  margin-top: 24px;
`
