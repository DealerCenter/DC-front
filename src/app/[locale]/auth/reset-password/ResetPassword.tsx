'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import TextInput from '@/common/components/InputElements/TextInput'
import { useTranslations } from 'next-intl'
import emailIcon from '@/assets/icons/email.svg'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import theme from '../../theme'
import AppButton from '@/common/components/appButton/AppButton'

type Props = {}

const ResetPassword = (props: Props) => {
  const t = useTranslations('')
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const [email, setEmail] = useState('')

  return (
    <Container>
      <H4Bold>{t('reset password')}</H4Bold>
      <TextInputContainer>
        <TextInput
          type='email'
          name='email'
          placeholder='john@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {}}
          icon={
            <Image src={emailIcon} alt='email icon' width={20} height={16} />
          }
          width={isMobile ? undefined : 442}
          // errorMessage={
          //   errors[FIELD_NAMES.EMAIL] && touched[FIELD_NAMES.EMAIL]
          //     ? errors[FIELD_NAMES.EMAIL]
          //     : ''
          // }
        />
      </TextInputContainer>

      <AppButton
        type='filled'
        text={t('reset password')}
        // disabled={isLoading}
        // onClick={handleSubmit}
        width={442}
        htmlType='submit'
      />
    </Container>
  )
}

export default ResetPassword

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
