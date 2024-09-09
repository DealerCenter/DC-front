export const setSettingsData = (
  data: {
    id: number
    createdAt: string
    updatedAt: string
    enabled: boolean
    notificationCategory: {
      id: number
      createdAt: string
      updatedAt: string
      type: string
      name: string
    }
  }[],
  set: React.Dispatch<
    React.SetStateAction<{
      OrderGet: boolean
      DebtExistence: boolean
      InfoMissing: boolean
      CompanyNewsAndServiceChange: boolean
    }>
  >,
  settingType: 'Email' | 'Sms'
) => {
  data.map((item) => {
    if (item.notificationCategory.type === settingType) {
      set({
        OrderGet: item.notificationCategory.name === 'OrderGet' && item.enabled,
        DebtExistence:
          item.notificationCategory.name === 'DebtExistence' && item.enabled,
        InfoMissing:
          item.notificationCategory.name === 'InfoMissing' && item.enabled,
        CompanyNewsAndServiceChange:
          item.notificationCategory.name === 'CompanyNewsAndServiceChange' &&
          item.enabled,
      })
    }
  })

  return true
}
