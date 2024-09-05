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
    console.log('user logged out')
  } catch (error) {
    console.error('Error logging out:', error)
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
    const response = await axiosInstance.post(
      endpoints.CHANGE_PASSWORD,
      passwordData
    )

    console.log('successfully')
    return true
  } catch (error) {
    console.error('Error with changing the password:', error)
    return false
  }
}
