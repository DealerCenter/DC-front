import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styled from 'styled-components'
import HeaderH4Bold from '../components/HeaderH4Bold'
import OptionField from './components/OptionField'
import AppButton from '@/common/components/appButton/AppButton'

type Props = {}

const ManageNotifications = (props: Props) => {
  const [isEmailSaved, setIsEmailSaved] = useState(true)
  const [isSmsSaved, setIsSmsSaved] = useState(true)
  const t = useTranslations('')

  return (
    <Container>
      <HeaderH4Bold text={t('manage notifications')} />
      <Frame>
        <InputFieldsBox>
          <InputFieldsHeader
            text={t('email notifications')}
            onEdit={() => {}}
            onArrowDown={() => {}}
          />
          <InputFieldsFrame>
            <OptionField
              text={t('order acceptance')}
              onToggle={() => setIsEmailSaved(false)}
            />
            <OptionField
              text={t('existence of debt')}
              onToggle={() => setIsEmailSaved(false)}
            />
            <OptionField
              text={t('incomplete information')}
              onToggle={() => setIsEmailSaved(false)}
            />
            <OptionField
              text={t('company news and changes')}
              onToggle={() => setIsEmailSaved(false)}
            />
          </InputFieldsFrame>
          {!isEmailSaved && (
            <ButtonFrame>
              <AppButton
                text={t('save')}
                type='filled'
                onClick={() => setIsEmailSaved(true)}
                isSmall={true}
              />
            </ButtonFrame>
          )}
        </InputFieldsBox>
        <InputFieldsBox>
          <InputFieldsHeader
            text={t('sms notifications')}
            onEdit={() => {}}
            onArrowDown={() => {}}
          />
          <InputFieldsFrame>
            <OptionField
              text={t('order acceptance')}
              onToggle={() => setIsSmsSaved(false)}
            />
            <OptionField
              text={t('existence of debt')}
              onToggle={() => setIsSmsSaved(false)}
            />
            <OptionField
              text={t('incomplete information')}
              onToggle={() => setIsSmsSaved(false)}
            />
            <OptionField
              text={t('company news and changes')}
              onToggle={() => setIsSmsSaved(false)}
            />
          </InputFieldsFrame>
          {!isSmsSaved && (
            <ButtonFrame>
              <AppButton
                text={t('save')}
                type='filled'
                onClick={() => setIsSmsSaved(true)}
                isSmall={true}
              />
            </ButtonFrame>
          )}
        </InputFieldsBox>
      </Frame>
    </Container>
  )
}

export default ManageNotifications

const Container = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing?.lg};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xl};
`

const InputFieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
`
const InputFieldsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`
