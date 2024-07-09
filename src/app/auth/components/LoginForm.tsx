'use client'
import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { setUserLocale } from '@/lib/locale'

import Checkbox from '@/common/components/checkbox/Checkbox'
import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/textInput/TextInput'
import useForm from '../hooks/useForm'

type Props = {}

const LoginForm = (props: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } = useForm()

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <H4Bold>შესვლა</H4Bold>
        <TextInput
          type='email'
          name='email'
          placeholder='john@example.com'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div>
          <TextInput
            type='password'
            name='password'
            placeholder='******'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <LabelContainer>
            <StyledLabel>
              <StyledCheckbox />
              დამახსოვრება
            </StyledLabel>
            <StyledLabel>დაგავიწყდა პაროლი?</StyledLabel>
          </LabelContainer>
        </div>
        <AppButton type='filled' text='შესვლა' disabled={false} />
      </StyledForm>
      <div>
        <StyledP>არ ხარ დარეგისტრირებული?</StyledP>
        <AppButton type='outlined' text={t('register')} disabled={false} />
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
  margin-top: 2rem;

  @media (${({ theme }) => theme.media?.desktop}) {
    width: 682px;
    padding: 42px 120px 42px 120px;
  }
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
