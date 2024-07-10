import TextInput from '@/common/components/InputElements/TextInput'
import { useTranslations } from 'next-intl'
import React from 'react'
import useForm from '../../hooks/useForm'
import AppButton from '@/common/components/appButton/AppButton'
import FileDropZone from '@/common/components/InputElements/FileDropZone'
import styled from 'styled-components'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const IndividualForm1 = ({ setFormStep }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextInput
        type='text'
        name='name'
        placeholder={t('name')}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='text'
        name='surname'
        placeholder={t('surname')}
        value={values.surname}
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
      />
      <TextInput
        type='text'
        name='actualAddress'
        placeholder={t('actual address')}
        value={values.actualAddress}
        onChange={handleChange}
        onBlur={handleBlur}
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
          onClick={() => {}}
        />
      </div>
    </StyledForm>
  )
}

export default IndividualForm1

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
