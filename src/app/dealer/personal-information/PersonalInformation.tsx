import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import InputFieldsHeader from '../../../common/components/inputFieldsHeader/InputFieldsHeader'
import TextInputField from './components/TextInputField'
import HeaderH4Bold from '../components/HeaderH4Bold'
import AppButton from '@/common/components/appButton/AppButton'

type Props = {}

const PersonalInformation = (props: Props) => {
  const [isInfoSaved, setIsInfoSaved] = useState(true)
  const [isPasswordSaved, setIsPasswordSaved] = useState(true)
  const t = useTranslations('')

  return (
    <Container>
      <HeaderH4Bold text={t('personal information')} />
      <Frame>
        <InputFieldsBox>
          <InputFieldsHeader
            text={t('contact information')}
            onEdit={() => {}}
            onArrowDown={() => {}}
          />
          <InputFieldsFrame>
            <TextInputField
              label={t('email')}
              onChange={() => setIsInfoSaved(false)}
            />
            <TextInputField
              label={t('cell phone')}
              onChange={() => setIsInfoSaved(false)}
            />
            <TextInputField
              label={t('address')}
              onChange={() => setIsInfoSaved(false)}
            />
          </InputFieldsFrame>
          {!isInfoSaved && (
            <ButtonFrame>
              <AppButton
                text={t('save')}
                type='filled'
                onClick={() => setIsInfoSaved(true)}
                isSmall={true}
              />
            </ButtonFrame>
          )}
        </InputFieldsBox>
        <InputFieldsBox>
          <InputFieldsHeader
            text={t('change the password')}
            onEdit={() => {}}
            onArrowDown={() => {}}
          />
          <InputFieldsFrame>
            <TextInputField
              label={t('current password')}
              onChange={() => setIsPasswordSaved(false)}
            />
            <TextInputField
              label={t('new password')}
              onChange={() => setIsPasswordSaved(false)}
            />
            <TextInputField
              label={t('repeat new password')}
              onChange={() => setIsPasswordSaved(false)}
            />
          </InputFieldsFrame>
          {!isPasswordSaved && (
            <ButtonFrame>
              <AppButton
                text={t('save')}
                type='filled'
                onClick={() => setIsPasswordSaved(true)}
                isSmall={true}
              />
            </ButtonFrame>
          )}
        </InputFieldsBox>
      </Frame>
    </Container>
  )
}

export default PersonalInformation

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
  gap: 24px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const InputFieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const InputFieldsFrame = styled.div`
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`
