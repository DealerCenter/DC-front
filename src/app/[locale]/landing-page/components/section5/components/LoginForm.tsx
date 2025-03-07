'use client'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import CheckBox from '@/common/components/appCheckBox/Checkbox'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import useLoginForm from '@/app/[locale]/auth/hooks/useLoginForm'

import emailIcon from '@/assets/icons/email.svg'
import passwordIcon from '@/assets/icons/password.svg'

type Props = {
  goToRegistration: () => void
}

const LoginForm = ({ goToRegistration }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit, isLoading } =
    useLoginForm()

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <H4Bold>{t('login')}</H4Bold>
        <TextInputContainer>
          <TextInput
            type='email'
            name='email'
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
              name='password'
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
            />
          </TextInputContainer>
          <LabelContainer>
            <StyledLabel>
              {/* <StyledCheckbox checked={false} /> */}
              {t('remember')}
            </StyledLabel>
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
          disabled={isLoading}
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
  background-color: ${({ theme }) => theme.colors?.white_72};
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  max-width: 564px;
  padding: 42px 120px 42px 120px;
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

const StyledCheckbox = styled(CheckBox)`
  margin: 8px;
  padding: 10px;
`

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`
