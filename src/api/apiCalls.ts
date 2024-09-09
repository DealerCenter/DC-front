import { handleLogout } from '@/common/helpers/utils'
import axiosInstance from './apiClient'
import { endpoints } from './endpoints'

export const fetchUserData = async () => {
  try {
    const response = await axiosInstance.get<ME_RES>(endpoints.ME)
    return response
  } catch (error) {
    console.error('Error with fetching data:', error)
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
    const response = await axiosInstance.patch(
      endpoints.UPDATE_USER_DATA,
      payload
    )

    return true
  } catch (error) {
    console.error('Error with updating the data:', error)
    return false
  }
}
