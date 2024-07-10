import TextInput from '@/common/components/InputElements/TextInput'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import useForm from '../../hooks/useForm'
import FileDropZone from '@/common/components/InputElements/FileDropZone'
import AppButton from '@/common/components/appButton/AppButton'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const LegalPersonForm2 = ({ setFormStep }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextInput
        type='text'
        name='nameOfRepresentative'
        placeholder={t('name of representative')}
        value={values.nameOfRepresentative}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='text'
        name='surnameOfRepresentative'
        placeholder={t('surname of representative')}
        value={values.surnameOfRepresentative}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='text'
        name='contactNumber'
        placeholder={t('contact number')}
        value={values.contactNumber}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='text'
        name='dateOfBirth'
        placeholder={t('date of birth')}
        value={values.dateOfBirth}
        onChange={handleChange}
        onBlur={handleBlur}
        optionalInfo={t('enter your date of birth as year/month/day')}
      />
      <TextInput
        type='text'
        name='personalNumber'
        placeholder={t('personal number')}
        value={values.personalNumber}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FileDropZone
        dropText={t('Drop the file here ...')}
        text={t('upload an ID photo')}
      />
      <AppButton
        text={t('next')}
        type='filled'
        disabled={false}
        onClick={() => {
          setFormStep((step) => step + 1)
        }}
      />
    </StyledForm>
  )
}

export default LegalPersonForm2

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`
