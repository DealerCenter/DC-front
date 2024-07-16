import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { useRegisterFormContextIndividual } from '../../../hooks/useRegistrationFormIndividual'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import FileDropZone from '@/common/components/InputElements/FileDropZone'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const IndividualForm2 = ({ setFormStep }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, errors, touched, validateForm } =
    useRegisterFormContextIndividual()

  const onNextClick = async () => {
    const validated = await validateForm()
    if (!validated.personalNumber) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled = values.personalNumber.length === 0

  return (
    <StyledForm>
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
      />{' '}
      <FileDropZone
        dropText={t('drop the file here')}
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

export default IndividualForm2

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
