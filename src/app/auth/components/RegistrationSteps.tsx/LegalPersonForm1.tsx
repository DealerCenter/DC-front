import AppButton from '@/common/components/appButton/AppButton'
import FileInput from '@/common/components/InputElements/FileInput'
import TextInput from '@/common/components/InputElements/TextInput'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const LegalPersonForm1 = ({ setFormStep }: Props) => {
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
      <FileInput>
        {t(
          'upload a certificate of commercial activity from the public register'
        )}
      </FileInput>
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
          onClick={() => {}}
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
