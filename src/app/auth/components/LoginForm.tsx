'use client'
import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { setUserLocale } from '@/lib/locale'

import Checkbox from '@/common/components/checkbox/Checkbox'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import useForm from '../hooks/useForm'
import Image from 'next/image'
import emailIcon from '@/app/assets/icons/email.svg'
import passwordIcon from '@/app/assets/icons/password.svg'

type Props = {
  goToRegistration: () => void
}

const LoginForm = ({ goToRegistration }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } = useForm()

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
              <Icon src={emailIcon} alt='email icon' width={20} height={16} />
            }
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
              withIcon={true}
            />
            <Icon
              src={passwordIcon}
              alt='password icon'
              width={19}
              height={22}
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
        />
      </StyledForm>
      <div>
        <StyledP>{t('not registered?')}</StyledP>
        <AppButton
          type='outlined'
          text={t('register')}
          disabled={false}
          onClick={goToRegistration}
        />
      </div>
    </Container>
  )
}

export default LoginForm

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors?.background};
  margin: auto;
  width: 374px;
  min-height: 617px;
  border-radius: 28px;
  padding: 42px 12px 42px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 63px;

  @media (${({ theme }) => theme.media?.desktop}) {
    width: 47%;
    max-width: 682px;
    padding: 42px 120px 42px 120px;
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

const StyledCheckbox = styled(Checkbox)`
  margin: 8px;
  padding: 10px;
`

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
`

const Icon = styled(Image)`
  position: absolute;
  align-self: center;
  justify-self: center;
  left: 16px;
  top: 17px;
`
