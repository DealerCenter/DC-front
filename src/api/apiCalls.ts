import { handleLogout } from '@/common/helpers/utils'
import axiosInstance from './apiClient'
import { endpoints } from './endpoints'

export const fetchMe = async () => {
  try {
    const response = await axiosInstance.get<ME_RES>(endpoints.ME)
    return response.data
  } catch (error) {
    console.error('Failed to fetch user data:', error)
  }
}

export const logoutUser = async () => {
  try {
    await axiosInstance.post(endpoints.LOGOUT)
    handleLogout()
    return true
  } catch (error) {
    console.error('Error logging out:', error)
    return false
  }
}

export const changeUserPassword = async (
  oldPassword: string,
  newPassword: string
) => {
  const passwordData = {
    oldPassword: oldPassword,
    newPassword: newPassword,
  }

  try {
    await axiosInstance.post(endpoints.CHANGE_PASSWORD, passwordData)

    return true
  } catch (error) {
    console.error('Error with changing the password:', error)
    return false
  }
}

export const updateUserData = async (
  payload:
    | {
        email: string
        phoneNumber: string
        address: string
        juridicalInfo: {
          companyName: string
          identificationCode: string
          companyAddress: string
          websiteUrl: string
        }
      }
    | {
        email: string
        phoneNumber: string
        address: string
      }
) => {
  try {
    await axiosInstance.patch(endpoints.UPDATE_USER_DATA, payload)
    return true
  } catch (error) {
    console.error('Error with updating the data:', error)
    return false
  }
}

export const getNotificationSettings = async (id: number) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.NOTIFICATION_SETTINGS_DEALERS}${id}`
    )

    return response.data
  } catch (error) {
    console.error('Error getting notification settings:', error)
  }
}

export const updateNotificationSettings = async (
  id: number,
  data: {
    notificationId: number
    enabled: boolean
  }[]
) => {
  try {
    const response = await axiosInstance.put(
      `${endpoints.NOTIFICATION_SETTINGS_DEALERS}${id}`,
      data
    )

    console.log('notification settings updated successfully:', response)

    return response.data
  } catch (error) {
    console.error('Error getting notification settings:', error)
  }
}

export const uploadOrder = async (payload: {
  manufacturer: string
  manufactureYear: number
  model: string
  vin: string
  transportaionCost: number
  carCost: number
  stateId: number
  exactAddress: string
  isInsured: boolean
  carCategory: string
  mileage: number
  status: string
  containerId: number
  dealerId: number
  receiverId: number
}) => {
  try {
    const response = await axiosInstance.post(
      `${(endpoints.CREATE_ORDER, payload)}`
    )
    console.log(response)
  } catch (error) {
    console.error('Error creating new order:', error)
  }
}
