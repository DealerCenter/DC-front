import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import useForm from '../../hooks/useForm'

import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import FileDropZone from '@/common/components/InputElements/FileDropZone'

type Props = {
  setFormStep: React.Dispatch<React.SetStateAction<number>>
  goToLogin: () => void
}

const LegalPersonForm1 = ({ setFormStep, goToLogin }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextInput
        type='text'
        name='companyName'
        placeholder={t('company name')}
        value={values.companyName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='text'
        name='identificationCode'
        placeholder={t('identification code')}
        value={values.identificationCode}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='text'
        name='adress'
        placeholder={t('adress')}
        value={values.adress}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='text'
        name='website'
        placeholder={t('website')}
        value={values.website}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FileDropZone
        dropText={t('Drop the files here ...')}
        text={t(
          'upload a certificate of commercial activity from the public register'
        )}
        uploadedText={t('file uploaded')}
      />
      <AppButton
        text={t('next')}
        type='filled'
        disabled={false}
        onClick={() => {
          setFormStep((step) => step + 1)
        }}
      />
      <div>
        <StyledP>{t('already registered?')}</StyledP>
        <AppButton
          type='outlined'
          text={t('register')}
          disabled={false}
          onClick={goToLogin}
        />
      </div>
    </StyledForm>
  )
}

export default LegalPersonForm1

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
