import TextInput from '@/common/components/InputElements/TextInput'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useRegisterFormContext } from '../../hooks/useRegistrationForm'

import AppButton from '@/common/components/appButton/AppButton'
import styled from 'styled-components'

type Props = {
  setFormStep: React.Dispatch<React.SetStateAction<number>>
  goToLogin: () => void
}

const IndividualForm1 = ({ setFormStep, goToLogin }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } =
    useRegisterFormContext()

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Frame>
        <TextInput
          type='text'
          name='name'
          placeholder={t('name')}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          isHalfSize={true}
        />
        <TextInput
          type='text'
          name='surname'
          placeholder={t('surname')}
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          isHalfSize={true}
        />
      </Frame>
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
      <TextInput
        type='text'
        name='contactNumber'
        placeholder={t('contact number')}
        value={values.contactNumber}
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
          text={t('login')}
          disabled={false}
          onClick={goToLogin}
        />
      </div>
    </StyledForm>
  )
}

export default IndividualForm1

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`

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
