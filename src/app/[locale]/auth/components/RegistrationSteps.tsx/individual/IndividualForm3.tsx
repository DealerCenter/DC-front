import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
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
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = { setFormStep: Dispatch<SetStateAction<number>> }

const IndividualForm3 = ({ setFormStep }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
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
    if (
      !validated[FIELD_NAMES.EMAIL] &&
      !validated[FIELD_NAMES.PASSWORD] &&
      !validated[FIELD_NAMES.REPEAT_PASSWORD]
    ) {
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
        width={isMobile ? undefined : 442}
        type='email'
        name={FIELD_NAMES.EMAIL}
        placeholder={t('email')}
        value={values[FIELD_NAMES.EMAIL]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.EMAIL] && touched[FIELD_NAMES.EMAIL]
            ? errors[FIELD_NAMES.EMAIL]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='password'
        name={FIELD_NAMES.PASSWORD}
        placeholder={t('password')}
        value={values[FIELD_NAMES.PASSWORD]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.PASSWORD] && touched[FIELD_NAMES.PASSWORD]
            ? errors[FIELD_NAMES.PASSWORD]
            : ''
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
        width={isMobile ? undefined : 442}
        type='password'
        name={FIELD_NAMES.REPEAT_PASSWORD}
        placeholder={t('repeat password')}
        value={values[FIELD_NAMES.REPEAT_PASSWORD]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.REPEAT_PASSWORD] &&
          touched[FIELD_NAMES.REPEAT_PASSWORD]
            ? errors[FIELD_NAMES.REPEAT_PASSWORD]
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
