import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'
import HeaderH4Bold from '../components/HeaderH4Bold'
import OptionField from './components/OptionField'

type Props = {}

const ManageNotifications = (props: Props) => {
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
            <OptionField text={t('order acceptance')} />
            <OptionField text={t('existence of debt')} />
            <OptionField text={t('incomplete information')} />
            <OptionField text={t('company news and changes')} />
          </InputFieldsFrame>
        </InputFieldsBox>
        <InputFieldsBox>
          <InputFieldsHeader
            text={t('sms notifications')}
            onEdit={() => {}}
            onArrowDown={() => {}}
          />
          <InputFieldsFrame>
            {' '}
            <OptionField text={t('order acceptance')} />
            <OptionField text={t('existence of debt')} />
            <OptionField text={t('incomplete information')} />
            <OptionField text={t('company news and changes')} />
          </InputFieldsFrame>
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
