import React from 'react'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import useForm from '../../hooks/useForm'
import TextInput from '@/common/components/InputElements/TextInput'
import FileDropZone from '@/common/components/InputElements/FileDropZone'
import AppButton from '@/common/components/appButton/AppButton'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const IndividualForm2 = ({ setFormStep }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextInput
        type='text'
        name='personalNumber'
        placeholder={t('personal number')}
        value={values.personalNumber}
        onChange={handleChange}
        onBlur={handleBlur}
      />{' '}
      <FileDropZone
        dropText={t('Drop the file here ...')}
        text={t('upload an ID photo')}
        uploadedText={t('photo uploaded')}
      />
      <AppButton
        text={t('next')}
        type='filled'
        disabled={values.personalNumber === ''}
        onClick={() => {
          setFormStep((step) => step + 1)
        }}
      />
    </StyledForm>
  )
}

export default IndividualForm2

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const StyledP = styled.p`
  margin-bottom: 16px;
  margin-top: 24px;
`
