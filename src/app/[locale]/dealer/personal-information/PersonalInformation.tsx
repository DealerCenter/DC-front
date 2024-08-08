import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import InputFieldsHeader from '../../../../common/components/inputFieldsHeader/InputFieldsHeader'
import TextInputField from './components/TextInputField'
import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'
import FormSaveButton from '@/common/components/appButton/FormSaveButton'

type Props = {}

const PersonalInformation = (props: Props) => {
  const DummyUserType = 'legalPerson'
  const [isInfoSaved, setIsInfoSaved] = useState(true)
  const [isPasswordSaved, setIsPasswordSaved] = useState(true)
  const [isContactInfoSaved, setIsContactInfoSaved] = useState(true)
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
              <FormSaveButton
                text={t('save')}
                onClick={() => setIsInfoSaved(true)}
              />
            </ButtonFrame>
          )}
        </InputFieldsBox>
        {DummyUserType === 'legalPerson' && (
          <InputFieldsBox>
            <InputFieldsHeader
              text={t('contact info of representative')}
              onEdit={() => {}}
              onArrowDown={() => {}}
            />
            <InputFieldsFrame>
              <TextInputField
                label={t('email')}
                onChange={() => setIsContactInfoSaved(false)}
              />
              <TextInputField
                label={t('cell phone')}
                onChange={() => setIsContactInfoSaved(false)}
              />
              <TextInputField
                label={t('address')}
                onChange={() => setIsContactInfoSaved(false)}
              />
            </InputFieldsFrame>
            {!isContactInfoSaved && (
              <ButtonFrame>
                <FormSaveButton
                  text={t('save')}
                  onClick={() => setIsContactInfoSaved(true)}
                />
              </ButtonFrame>
            )}
          </InputFieldsBox>
        )}
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
              <FormSaveButton
                text={t('save')}
                onClick={() => setIsPasswordSaved(true)}
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
