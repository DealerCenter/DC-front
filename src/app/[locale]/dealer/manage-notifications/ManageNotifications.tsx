import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { message } from 'antd'

import {
  getNotificationSettings,
  updateNotificationSettings,
} from '@/api/apiCalls'
import { useUserData } from '@/common/store/userDataStore'

import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'
import OptionFieldsBox from './components/OptionFieldsBox'

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
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
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

      const response = await updateNotificationSettings(
        userData.id,
        updatedData
      )
      setNotifications(response)
      setIsEmailSaved(true)
      setIsSmsSaved(true)

      message.success(t('notification settings updated successfully'))
    } catch (error) {
      message.error(t('failed to update notification settings'))
      console.error('Error updating settings', error)
    }
  }

  if (!userData) {
    return (
      <Loading>
        {t('loading')}
        {'...'}
      </Loading>
    )
  }

  return (
    <Container>
      <HeaderH4Bold text={t('manage notifications')} />
      <Frame>
        <OptionFieldsBox
          headerText={t('email notifications')}
          notificationsState={notifications}
          saveChanges={saveChanges}
          onChange={updateNotification}
          isSaved={isEmailSaved}
          setIsSaved={setIsEmailSaved}
        />
        <OptionFieldsBox
          headerText={t('sms notifications')}
          notificationsState={notifications}
          saveChanges={saveChanges}
          onChange={updateNotification}
          isSaved={isSmsSaved}
          setIsSaved={setIsSmsSaved}
        />
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

const Loading = styled.div`
  margin: 10px;

  color: ${({ theme }) => theme.colors?.main_gray_56};

  @media ${({ theme }) => theme.media?.sm} {
    margin: 30px;
  }
`
