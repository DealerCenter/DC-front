'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import CheckBox from '@/common/components/appCheckBox/Checkbox'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/inputElements/TextInput'
import useLoginForm, { FIELD_NAMES } from '../hooks/useLoginForm'

import Image from 'next/image'
import emailIcon from '@/assets/icons/email.svg'
import passwordIcon from '@/assets/icons/password.svg'

type Props = {
  goToRegistration: () => void
}

const LoginForm = ({ goToRegistration }: Props) => {
  const [isRemember, setIsRemember] = useState(false)
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit, axiosError } =
    useLoginForm()

  console.log('axios error', axiosError)

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <H4Bold>{t('login')}</H4Bold>
        <TextInputContainer>
          <TextInput
            type='email'
            name={FIELD_NAMES.EMAIL}
            placeholder='john@example.com'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            icon={
              <Image src={emailIcon} alt='email icon' width={20} height={16} />
            }
            width={442}
          />
        </TextInputContainer>
        <div>
          <TextInputContainer>
            <TextInput
              type='password'
              name={FIELD_NAMES.PASSWORD}
              placeholder='•••••••'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              icon={
                <Image
                  src={passwordIcon}
                  alt='password icon'
                  width={19}
                  height={22}
                />
              }
              width={442}
              errorMessage={axiosError ? axiosError.message : ''}
            />
          </TextInputContainer>
          <LabelContainer>
            <RememberPair onClick={() => setIsRemember((is) => !is)}>
              <RememberCheckbox isChecked={isRemember} />
              <StyledLabel>{t('remember')}</StyledLabel>
            </RememberPair>
            <StyledLabel>{t('forgot password?')}</StyledLabel>
          </LabelContainer>
        </div>
        <AppButton
          type='filled'
          text={t('login')}
          disabled={false}
          onClick={() => {}}
          width={442}
        />
      </StyledForm>
      <div>
        <StyledP>{t('not registered?')}</StyledP>
        <AppButton
          type='outlined'
          text={t('register')}
          disabled={false}
          onClick={goToRegistration}
          width={442}
        />
      </div>
    </Container>
  )
}

export default LoginForm

const Container = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.background};
  margin: auto;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 63px;

  max-width: 682px;
  padding: 42px 120px 42px 120px;

  @media ${({ theme }) => theme.media?.sm} {
    min-width: 375px;
    width: 90%;
    padding: 42px 12px 42px 12px;
  }
`

const TextInputContainer = styled.div`
  position: relative;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const H4Bold = styled.h4`
  font-size: 28px;
  line-height: 33.6px;
  font-weight: 700;
  align-self: center;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 26.5px;
`

const StyledP = styled.p`
  margin-bottom: 16px;
  margin-top: 24px;
`

const RememberPair = styled.label`
  display: flex;
  gap: 8px;
  align-items: center;
`

const RememberCheckbox = styled(CheckBox)`
  margin: 8px;
  padding: 10px;
`

const StyledLabel = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
`

const ErrorLabel = styled.label`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors?.red};

  cursor: default;
`
