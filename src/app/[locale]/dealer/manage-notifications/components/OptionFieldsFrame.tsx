import React from 'react'
import styled from 'styled-components'
import OptionField from './OptionField'
import { useTranslations } from 'next-intl'
import { string } from 'yup'

type NotificationCategory = {
  id: number
  type: string
  name: string
}

type NotificationSetting = {
  id: number
  enabled: boolean
  notificationCategory: NotificationCategory
}

type Props = {
  settingsState: {
    OrderGet: boolean
    DebtExistence: boolean
    InfoMissing: boolean
    CompanyNewsAndServiceChange: boolean
  }
  onChange: (e: any) => void
  labelsAndIds: { label: string; id: number }[]
  notifications: NotificationSetting[]
  updateNotification: (id: number, enabled: boolean) => void
}

const OptionFieldsFrame = ({
  settingsState,
  onChange,
  labelsAndIds,
  notifications,
  updateNotification,
}: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      {labelsAndIds.map((item, i) => (
        <OptionField
          key={`settingsFiledForSettings${item.id}`}
          text={t(item.label)}
          onChange={(e) => updateNotification(item.id, e.target.checked)}
          isChecked={}
          settingId={item.id}
          // settingsState={}
        />
      ))}
    </Container>
  )
}

export default OptionFieldsFrame

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};
`
