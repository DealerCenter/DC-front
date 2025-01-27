import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import {
  FIELD_NAMES,
  useRegisterFormContextIndividual,
} from '../../../hooks/useRegistrationFormIndividual'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import FileDropZone from '@/common/components/InputElements/FileDropZone'
import theme from '@/app/[locale]/theme'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const IndividualForm2 = ({ setFormStep }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false)

  const t = useTranslations('')
  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    validateForm,
    setUploadFile,
  } = useRegisterFormContextIndividual()

  const onNextClick = async () => {
    const validated = await validateForm()
    if (!validated[FIELD_NAMES.PERSONAL_ID]) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled =
    values[FIELD_NAMES.PERSONAL_ID].length === 0 || !isPhotoUploaded

  return (
    <StyledForm>
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
        onDropAdditional={setUploadFile}
        setIsUploaded={setIsPhotoUploaded}
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

export default IndividualForm2

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
