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
  } catch (error) {
    console.error('Error logging out:', error)
  }
}
