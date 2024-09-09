import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'
import OptionField from './components/OptionField'
import AppButton from '@/common/components/appButton/AppButton'
import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import { getNotificationSettings } from '@/api/apiCalls'
import { setSettingsData } from './helpers/setSettingsData'
import { useUserData } from '@/common/store/userDataStore'
import OptionFieldsFrame from './components/OptionFieldsFrame'

type Props = {}

const ManageNotifications = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  const [isOpenEmail, setIsOpenEmail] = useState(true)
  const [isOpenSms, setIsOpenSms] = useState(true)

  const [isEmailSaved, setIsEmailSaved] = useState(true)
  const [isSmsSaved, setIsSmsSaved] = useState(true)

  const [emailSettings, setEmailSettings] = useState({
    OrderGet: true,
    DebtExistence: true,
    InfoMissing: true,
    CompanyNewsAndServiceChange: true,
  })
  const [smsSettings, setSmsSettings] = useState({
    OrderGet: true,
    DebtExistence: false,
    InfoMissing: true,
    CompanyNewsAndServiceChange: false,
  })

  const { userData } = useUserData()

  const t = useTranslations('')

  const handleEmailChange = () => {
    setIsEmailSaved(false)
  }
  const handleSmsChange = () => {
    setIsSmsSaved(false)
  }

  const getSettings = async () => {
    if (!userData) return

    setIsLoading(true)
    const notificationData = await getNotificationSettings(userData.id)

    console.log(notificationData)

    setIsLoading(!setSettingsData(notificationData, setEmailSettings, 'Email'))
    setIsLoading(!setSettingsData(notificationData, setSmsSettings, 'Sms'))
  }

  // when userData updates and we have users' id, then we get the settings
  useEffect(() => {
    userData && getSettings()
    // eslint-disable-next-line
  }, [userData])

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
          {!isLoading && isOpenEmail && (
            <OptionFieldsFrame
              settingsState={emailSettings}
              onChange={handleEmailChange}
            />
          )}
          {!isEmailSaved && (
            <ButtonFrame>
              <FormSaveButton
                text={t('save')}
                onClick={() => setIsEmailSaved(true)}
              />
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
          {!isLoading && isOpenSms && (
            <OptionFieldsFrame
              settingsState={smsSettings}
              onChange={handleSmsChange}
            />
          )}
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

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`
