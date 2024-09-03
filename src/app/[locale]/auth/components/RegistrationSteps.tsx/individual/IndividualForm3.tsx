import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/inputElements/TextInput'
import React, { Dispatch, SetStateAction } from 'react'

import Image from 'next/image'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import {
  FIELD_NAMES,
  useRegisterFormContextIndividual,
} from '@/app/[locale]/auth/hooks/useRegistrationFormIndividual'

import ValidateTextBox from '@/common/components/passwordValidateTextBox/ValidateTextBox'
import usePasswordValidation from '../../../hooks/usePasswordValidation'

type Props = { setFormStep: Dispatch<SetStateAction<number>> }

const IndividualForm3 = ({ setFormStep }: Props) => {
  const t = useTranslations('')

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    validateForm,
    touched,
  } = useRegisterFormContextIndividual()

  const criteria = usePasswordValidation(values.password)

  const onNextClick = async () => {
    const validated = await validateForm()
    if (!validated.email && !validated.password && !validated.repeatPassword) {
      handleSubmit()
    }
  }

  const isButtonDisabled =
    values[FIELD_NAMES.EMAIL].length === 0 ||
    values[FIELD_NAMES.PASSWORD].length === 0 ||
    values[FIELD_NAMES.REPEAT_PASSWORD].length === 0 ||
    !Object.values(criteria).every((value) => value === true)

  return (
    <StyledForm>
      <TextInput
        width={442}
        type='email'
        name={FIELD_NAMES.EMAIL}
        placeholder={t('email')}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.email && touched.email ? errors.email : ''}
      />
      <TextInput
        width={442}
        type='password'
        name={FIELD_NAMES.PASSWORD}
        placeholder={t('password')}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.password && touched.password ? errors.password : ''
        }
      />
      <PasswordErrorBox>
        <ValidateTextBox text={t('use numbers')} isChecked={criteria.number} />
        <ValidateTextBox
          text={t('use uppercase characters')}
          isChecked={criteria.uppercase}
        />
        <ValidateTextBox
          text={t('use lowercase characters')}
          isChecked={criteria.lowercase}
        />
        <ValidateTextBox
          text={t('at least 14 characters')}
          isChecked={criteria.length}
        />
      </PasswordErrorBox>
      <TextInput
        width={442}
        type='password'
        name={FIELD_NAMES.REPEAT_PASSWORD}
        placeholder={t('repeat password')}
        value={values.repeatPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors.repeatPassword && touched.repeatPassword
            ? errors.repeatPassword
            : ''
        }
      />
      <AppButton
        width={442}
        text={t('register')}
        type='filled'
        disabled={isButtonDisabled}
        onClick={onNextClick}
      />
    </StyledForm>
  )
}

export default IndividualForm3

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`

const PasswordErrorBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 442px;
  gap: 12px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 350px;
  }
`
