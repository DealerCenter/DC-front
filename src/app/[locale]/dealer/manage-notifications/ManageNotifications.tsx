import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'
import OptionField from './components/OptionField'
import AppButton from '@/common/components/appButton/AppButton'
import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import {
  getNotificationSettings,
  updateNotificationSettings,
} from '@/api/apiCalls'
import { useUserData } from '@/common/store/userDataStore'

const nameChanger = (name: string) => {
  switch (name) {
    case 'OrderGet':
      return 'order acceptance'
    case 'DebtExistence':
      return 'existence of debt'
    case 'InfoMissing':
      return 'incomplete information'
    case 'CompanyNewsAndServiceChange':
      return 'company news and changes'
    default:
      return ''
  }
}

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

type Props = {}

const ManageNotifications = (props: Props) => {
  const [isOpenEmail, setIsOpenEmail] = useState(true)
  const [isOpenSms, setIsOpenSms] = useState(true)
  const [isEmailSaved, setIsEmailSaved] = useState(true)
  const [isSmsSaved, setIsSmsSaved] = useState(true)
  const [notifications, setNotifications] = useState<NotificationSetting[]>([])

  const { userData } = useUserData()

  const t = useTranslations('')

  const getSettings = async () => {
    if (!userData) return
    const notificationData = await getNotificationSettings(userData.id)
    setNotifications(notificationData)
  }

  notifications.sort((a, b) => {
    return a.notificationCategory.id - b.notificationCategory.id
  })

  // when userData updates and we have users' id, then we get the settings
  useEffect(() => {
    userData && getSettings()
    // eslint-disable-next-line
  }, [userData])

  // Function to update a single notification
  const updateNotification = (id: number, enabled: boolean) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, enabled } : notification
      )
    )
  }

  // Function to send PUT request to update settings
  const saveChanges = async () => {
    if (!userData) return

    try {
      const updatedData = notifications.map(({ id, enabled }) => ({
        notificationId: id,
        enabled,
      }))
      console.log('data to send:', updatedData)

      const response = await updateNotificationSettings(
        userData.id,
        updatedData
      )
      setNotifications(response)

      setIsEmailSaved(true)
      setIsSmsSaved(true)
    } catch (error) {
      console.error('Error updating settings', error)
    }
  }

  return (
    <Container>
      <HeaderH4Bold text={t('manage notifications')} />
      <Frame>
        <InputFieldsBox>
          <InputFieldsHeader
            text={t('email notifications')}
            onEdit={() => setIsOpenEmail((is) => !is)}
            onArrowDown={() => setIsOpenEmail((is) => !is)}
            isOpen={isOpenEmail}
          />
          {userData && isOpenEmail && (
            <OptionFieldsFrame>
              {notifications.map(
                (notification) =>
                  notification.notificationCategory.type === 'Email' && (
                    <OptionField
                      key={`optionField${notification.createdAt}${notification.id}`}
                      isChecked={notification.enabled}
                      onChange={(e) => updateNotification(notification.id, e)}
                      text={t(
                        nameChanger(notification.notificationCategory.name)
                      )}
                      setTouched={() => setIsEmailSaved(false)}
                    />
                  )
              )}
            </OptionFieldsFrame>
          )}
          {!isEmailSaved && (
            <ButtonFrame>
              <FormSaveButton text={t('save')} onClick={saveChanges} />
            </ButtonFrame>
          )}
        </InputFieldsBox>
        <InputFieldsBox>
          <InputFieldsHeader
            text={t('sms notifications')}
            onEdit={() => setIsOpenSms((is) => !is)}
            onArrowDown={() => setIsOpenSms((is) => !is)}
            isOpen={isOpenSms}
          />
          {userData && isOpenSms && (
            <OptionFieldsFrame>
              {notifications.map(
                (notification) =>
                  notification.notificationCategory.type === 'Sms' && (
                    <OptionField
                      key={`optionField${notification.createdAt}${notification.id}`}
                      isChecked={notification.enabled}
                      onChange={(e) => updateNotification(notification.id, e)}
                      text={t(
                        nameChanger(notification.notificationCategory.name)
                      )}
                      setTouched={() => setIsSmsSaved(false)}
                    />
                  )
              )}
            </OptionFieldsFrame>
          )}
          {userData && !isSmsSaved && (
            <ButtonFrame>
              <AppButton
                text={t('save')}
                type='filled'
                onClick={saveChanges}
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

const OptionFieldsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};
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

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`
