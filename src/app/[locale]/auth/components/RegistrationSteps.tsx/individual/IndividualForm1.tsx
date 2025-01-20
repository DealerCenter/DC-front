import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import {
  FIELD_NAMES,
  useRegisterFormContextIndividual,
} from '../../../hooks/useRegistrationFormIndividual'
import theme from '@/app/[locale]/theme'

import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'

type Props = {
  setFormStep: React.Dispatch<React.SetStateAction<number>>
  goToLogin: () => void
}

const IndividualForm1 = ({ setFormStep, goToLogin }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
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
          value={values[FIELD_NAMES.FIRST_NAME]}
          onChange={handleChange}
          onBlur={handleBlur}
          isHalfSize={true}
          errorMessage={
            errors[FIELD_NAMES.FIRST_NAME] && touched[FIELD_NAMES.FIRST_NAME]
              ? errors[FIELD_NAMES.FIRST_NAME]
              : ''
          }
        />
        <TextInput
          width={442}
          type='text'
          name={FIELD_NAMES.LAST_NAME}
          placeholder={t('surname')}
          value={values[FIELD_NAMES.LAST_NAME]}
          onChange={handleChange}
          onBlur={handleBlur}
          isHalfSize={true}
          errorMessage={
            errors[FIELD_NAMES.LAST_NAME] && touched[FIELD_NAMES.LAST_NAME]
              ? errors[FIELD_NAMES.LAST_NAME]
              : ''
          }
        />
      </Frame>
      <TextInput
        width={isMobile ? undefined : 442}
        type='date'
        name={FIELD_NAMES.BIRTH_DATE}
        placeholder={t('date of birth')}
        value={values[FIELD_NAMES.BIRTH_DATE]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.BIRTH_DATE] && touched[FIELD_NAMES.BIRTH_DATE]
            ? errors[FIELD_NAMES.BIRTH_DATE]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.ADDRESS}
        placeholder={t('actual address')}
        value={values[FIELD_NAMES.ADDRESS]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.ADDRESS] && touched[FIELD_NAMES.ADDRESS]
            ? errors[FIELD_NAMES.ADDRESS]
            : ''
        }
      />
      <TextInput
        width={isMobile ? undefined : 442}
        type='text'
        name={FIELD_NAMES.CONTACT_NUMBER}
        placeholder={t('contact number')}
        value={values[FIELD_NAMES.CONTACT_NUMBER]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.CONTACT_NUMBER] &&
          touched[FIELD_NAMES.CONTACT_NUMBER]
            ? errors[FIELD_NAMES.CONTACT_NUMBER]
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
