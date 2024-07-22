import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import InputFieldsHeader from '../../../common/components/inputFieldsHeader/InputFieldsHeader'
import TextInputField from './components/TextInputField'
import HeaderH4Bold from '../components/HeaderH4Bold'

type Props = {}

const PersonalInformation = (props: Props) => {
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
            <TextInputField label={t('email')} />
            <TextInputField label={t('cell phone')} />
            <TextInputField label={t('address')} />
          </InputFieldsFrame>
        </InputFieldsBox>
        <InputFieldsBox>
          <InputFieldsHeader
            text={t('change the password')}
            onEdit={() => {}}
            onArrowDown={() => {}}
          />
          <InputFieldsFrame>
            <TextInputField label={t('current password')} />
            <TextInputField label={t('new password')} />
            <TextInputField label={t('repeat new password')} />
          </InputFieldsFrame>
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
