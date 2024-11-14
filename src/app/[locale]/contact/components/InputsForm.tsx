import emailjs from '@emailjs/browser'
import { message } from 'antd'
import { useTranslations } from 'next-intl'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import TextInput from '@/common/components/InputElements/TextInput'
import BasicButton from '@/common/components/appButton/BasicButton'

const SERVICE_ID = 'service_tx6rd1e'
const TEMPLATE_ID = 'contact_form'
const PUBLIC_KEY = 'esI0VcWP2iktxJyA8'

type Props = {}

const InputsForm = (props: Props) => {
  const t = useTranslations('')
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!form.current) return

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          message.success(t('your info sent successfully'))
          setIsSubmitting(false)
          form.current?.reset() // Clears the form
        },
        (error: any) => {
          message.error(t('your info not sent'))
          console.error('FAILED...', error.text)
          setIsSubmitting(false)
        }
      )
  }
  return (
    <form ref={form} onSubmit={sendEmail}>
      <Container>
        <PairFrame>
          <TextInputSmallBox>
            <TextInput
              type='text'
              placeholder={t('name')}
              name='from_name'
              onChange={() => {}}
              onBlur={() => {}}
              isWidthFill={true}
            />
          </TextInputSmallBox>
          <TextInputSmallBox>
            <TextInput
              type='text'
              placeholder={t('surname')}
              name='from_surname'
              onChange={() => {}}
              onBlur={() => {}}
              isWidthFill={true}
            />
          </TextInputSmallBox>
        </PairFrame>
        <TextInput
          type='email'
          placeholder={t('email')}
          name='from_email'
          onChange={() => {}}
          onBlur={() => {}}
          isWidthFill={true}
        />
        <TextInput
          type='text'
          placeholder={t('mobile number')}
          name='contact_number'
          onChange={() => {}}
          onBlur={() => {}}
          isWidthFill={true}
        />
        <StyledTextArea name='message' placeholder={t('message')} />
        <BasicButton onClick={() => {}} height={56} htmlType='submit'>
          <ButtonLabel>
            {isSubmitting ? t('sending') : t('send message')}
          </ButtonLabel>
        </BasicButton>
      </Container>
    </form>
  )
}

export default InputsForm

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
  }
`

const PairFrame = styled.div`
  display: flex;
  flex-direction: row;

  gap: ${({ theme }) => theme.spacing?.lg};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing?.md};
  }
`

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  height: 153px;
  outline: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  border: none;
  border-radius: ${({ theme }) => theme.radius?.lg};

  padding: 10px 10px 10px 16px;

  resize: none;

  width: 564px;

  @media ${({ theme }) => theme.media?.md} {
    width: 414px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 350px;
  }
`

const TextInputSmallBox = styled.div`
  width: 270px;

  @media ${({ theme }) => theme.media?.md} {
    width: 195px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
  }
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};

  cursor: pointer;
`
