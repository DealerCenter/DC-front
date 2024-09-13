import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { nameChanger } from '../helpers/helpers'

import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'
import OptionField from './OptionField'

type NotificationCategory = {
  id: number
  createdAt: string
  updatedAt: string
  type: string
  name: string
}

type NotificationSetting = {
  id: number
  createdAt: string
  updatedAt: string
  enabled: boolean
  notificationCategory: NotificationCategory
}

type Props = {
  headerText: string
  notificationsState: NotificationSetting[]
  saveChanges: () => void
  onChange: (id: number, enabled: boolean) => void
  isSaved: boolean
  setIsSaved: (arg: boolean) => void
  isError: boolean
  isSuccess: boolean
}

const OptionFieldsBox = ({
  headerText,
  notificationsState,
  saveChanges,
  onChange,
  isSaved,
  setIsSaved,
  isError,
  isSuccess,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  const t = useTranslations('')

  return (
    <InputFieldsBox>
      <InputFieldsHeader
        text={headerText}
        onEdit={() => setIsOpen((is) => !is)}
        onArrowDown={() => setIsOpen((is) => !is)}
        isOpen={isOpen}
      />
      {isOpen && (
        <OptionFieldsFrame>
          {notificationsState.map(
            (notification) =>
              notification.notificationCategory.type === 'Email' && (
                <OptionField
                  key={`optionField${notification.createdAt}${notification.id}`}
                  isChecked={notification.enabled}
                  onChange={(e) => onChange(notification.id, e)}
                  text={t(nameChanger(notification.notificationCategory.name))}
                  setTouched={() => setIsSaved(false)}
                />
              )
          )}
        </OptionFieldsFrame>
      )}
      {isSuccess && <Success>{t('information updated successfully')}</Success>}
      {isError && <Error>{t('information not updated')}</Error>}
      {!isSaved && (
        <ButtonFrame>
          <FormSaveButton text={t('save')} onClick={saveChanges} />
        </ButtonFrame>
      )}
    </InputFieldsBox>
  )
}

export default OptionFieldsBox

const OptionFieldsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const InputFieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Error = styled.div`
  padding-left: 40px;
  color: ${({ theme }) => theme.colors?.red};
`

const Success = styled.div`
  padding-left: 40px;
  color: ${({ theme }) => theme.colors?.green};
`
