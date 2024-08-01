import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { useRegisterFormContextIndividual } from '../../../hooks/useRegistrationFormIndividual'

import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/inputElements/TextInput'

type Props = {
  setFormStep: React.Dispatch<React.SetStateAction<number>>
  goToLogin: () => void
}

const IndividualForm1 = ({ setFormStep, goToLogin }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, errors, touched, validateForm } =
    useRegisterFormContextIndividual()

  const onNextClick = async () => {
    const validated = await validateForm()
    if (
      !validated.name &&
      !validated.surname &&
      !validated.dateOfBirth &&
      !validated.actualAddress &&
      !validated.contactNumber
    ) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled =
    values.name.length === 0 ||
    values.surname.length === 0 ||
    values.dateOfBirth.length === 0 ||
    values.actualAddress.length === 0 ||
    values.contactNumber.length === 0

  return (
    <StyledForm>
      <Frame>
        <TextInput
          width={442}
          type='text'
          name='name'
          placeholder={t('name')}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          isHalfSize={true}
          errorMessage={errors.name && touched.name ? errors.name : ''}
        />
        <TextInput
          width={442}
          type='text'
          name='surname'
          placeholder={t('surname')}
          value={values.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          isHalfSize={true}
          errorMessage={errors.surname && touched.surname ? errors.surname : ''}
        />
      </Frame>
      <TextInput
        width={442}
        type='date'
        name='dateOfBirth'
        placeholder={t('date of birth')}
        value={values.dateOfBirth}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.dateOfBirth && touched.dateOfBirth ? errors.dateOfBirth : ''
        }
      />
      <TextInput
        width={442}
        type='text'
        name='actualAddress'
        placeholder={t('actual address')}
        value={values.actualAddress}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.actualAddress && touched.actualAddress
            ? errors.actualAddress
            : ''
        }
      />
      <TextInput
        width={442}
        type='text'
        name='contactNumber'
        placeholder={t('contact number')}
        value={values.contactNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.contactNumber && touched.contactNumber
            ? errors.contactNumber
            : ''
        }
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

export default IndividualForm1

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing?.md};
`

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
