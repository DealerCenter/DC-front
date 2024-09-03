import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import {
  FIELD_NAMES,
  useRegisterFormContextIndividual,
} from '../../../hooks/useRegistrationFormIndividual'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/inputElements/TextInput'
import FileDropZone from '@/common/components/inputElements/FileDropZone'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const IndividualForm2 = ({ setFormStep }: Props) => {
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
    if (!validated.personalNumber) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled = values[FIELD_NAMES.PERSONAL_Id].length === 0

  return (
    <StyledForm>
      <TextInput
        width={442}
        type='text'
        name={FIELD_NAMES.PERSONAL_Id}
        placeholder={t('personal number')}
        value={values.personalNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.personalNumber && touched.personalNumber
            ? errors.personalNumber
            : ''
        }
      />{' '}
      <FileDropZone
        width={442}
        dropText={t('drop the file here')}
        text={t('upload an ID photo')}
        uploadedText={t('photo uploaded')}
        onDropAdditional={setUploadFile}
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
