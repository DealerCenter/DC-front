import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import {
  FIELD_NAMES,
  useRegisterFormContextIndividual,
} from '../../../hooks/useRegistrationFormIndividual'

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
      !validated[FIELD_NAMES.FIRST_NAME] &&
      !validated[FIELD_NAMES.LAST_NAME] &&
      !validated[FIELD_NAMES.BIRTH_DATE] &&
      !validated[FIELD_NAMES.ADDRESS] &&
      !validated[FIELD_NAMES.CONTACT_NUMBER]
    ) {
      setFormStep((prev) => prev + 1)
    }
  }

  const isButtonDisabled =
    values[FIELD_NAMES.FIRST_NAME].length === 0 ||
    values[FIELD_NAMES.LAST_NAME].length === 0 ||
    values[FIELD_NAMES.BIRTH_DATE].length === 0 ||
    values[FIELD_NAMES.ADDRESS].length === 0 ||
    values[FIELD_NAMES.CONTACT_NUMBER].length === 0

  return (
    <StyledForm>
      <Frame>
        <TextInput
          width={442}
          type='text'
          name={FIELD_NAMES.FIRST_NAME}
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
          name={FIELD_NAMES.LAST_NAME}
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
        name={FIELD_NAMES.BIRTH_DATE}
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
        name={FIELD_NAMES.ADDRESS}
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
        name={FIELD_NAMES.CONTACT_NUMBER}
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
