import { handleLogout } from '@/common/helpers/utils'
import axiosInstance from './apiClient'
import { endpoints } from './endpoints'
import { OrdersQueryType, ShippingStatus } from '@/common/helpers/constants'
import {
  ADMIN_GET_RES,
  CONTAINER_GET_RES,
  CONTAINER_POST_RES,
  ME_RES,
  ORDERS_GET_RES,
  RECEIVER_GET_RES,
} from './apiTypes'

export const fetchMe = async () => {
  try {
    const response = await axiosInstance.get<ME_RES>(endpoints.ME)
    return response.data
  } catch (error) {
    console.error('Failed to fetch user data:', error)
  }
}

export const fetchMeAdmin = async () => {
  try {
    const response = await axiosInstance.get(endpoints.ADMINS)
    // console.log(response.data)
    return response.data
  } catch (error) {
    console.error('Failed to fetch user data:', error)
  }
}

export const logoutUser = async (isAdmin?: boolean) => {
  const endpoint = isAdmin ? endpoints.LOGOUT_ADMIN : endpoints.LOGOUT

  try {
    const response = await axiosInstance.post(endpoint)
    handleLogout()
    return response
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

    return response
  } catch (error) {
    console.error('Error with changing the password:', error)
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
    return response.data
  } catch (error) {
    console.error('Error with updating the data:', error)
  }
}

export const getNotificationSettings = async (id: number) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.NOTIFICATION_SETTINGS_DEALERS}/${id}`
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
      `${endpoints.NOTIFICATION_SETTINGS_DEALERS}/${id}`,
      data
    )

    return response.data
  } catch (error) {
    console.error('Error getting notification settings:', error)
  }
}

export const createOrder = async (payload: {
  manufacturer: string
  manufactureYear: number
  model: string
  vin: string
  transportationCost: number
  carCost: number
  stateId: number
  exactAddress: string
  isInsured: boolean
  carCategory: string
  mileage: number
  status: string
  containerId: number
  receiverId: number
}) => {
  try {
    const response = await axiosInstance.post(endpoints.ORDERS_ADMIN, payload)
    return response
  } catch (error) {
    console.error('Error creating new order:', error)
  }
}

export const changeOrder = async (
  payload: {
    manufacturer: string
    manufactureYear: number
    model: string
    vin: string
    transportationCost: number
    carCost: number
    stateId: number
    exactAddress: string
    isInsured: boolean
    carCategory: string
    mileage: number
    status: string
    containerId: number
    receiverId: number
  },
  id: number
) => {
  try {
    const response = await axiosInstance.put(
      `${endpoints.ORDERS_ADMIN}/${id}`,
      payload
    )
    return response
  } catch (error) {
    console.error('Error changing order:', error)
  }
}

export const getOrders = async (
  payload: OrdersQueryType,
  isAdmin?: boolean
) => {
  const endpoint = isAdmin ? endpoints.ORDERS_ADMIN : endpoints.ORDERS

  try {
    const response = await axiosInstance.get<ORDERS_GET_RES>(endpoint, {
      params: payload, // Pass payload as query parameters
    })
    return response.data
  } catch (error) {
    console.error('Failed to fetch orders data:', error)
  }
}

export const getReceivers = async (payload: {
  skip: number
  take: number
  search: string
}) => {
  try {
    const response = await axiosInstance.get<RECEIVER_GET_RES[]>(
      endpoints.RECEIVERS,
      {
        params: payload, // Pass payload as query parameters
      }
    )
    return response.data
  } catch (error) {
    console.error('Error getting receivers:', error)
  }
}

export const getReceiversAdmin = async (id: string) => {
  try {
    const response = await axiosInstance.get<RECEIVER_GET_RES[]>(
      `${endpoints.RECEIVERS_ADMIN}/${id}`
    )
    console.log('getReceiversAdmin:', response)
    return response.data
  } catch (error) {
    console.error('Error getting receivers:', error)
  }
}

export const deleteReceiver = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`${endpoints.RECEIVERS}/${id}`)
    return response
  } catch (error) {
    console.error('Error getting receivers:', error)
  }
}

export const createContainer = async (payload: {
  name: string
  trackingUrl: string
}) => {
  console.log('apiCalls createContainer?')
  try {
    const response = await axiosInstance.post<CONTAINER_POST_RES>(
      endpoints.CONTAINERS_ADMIN,
      payload
    )
    return response.data
  } catch (error) {
    console.error('Error with updating the data:', error)
  }
}

export const getContainersAdmin = async () => {
  try {
    const response = await axiosInstance.get<CONTAINER_GET_RES[]>(
      endpoints.CONTAINERS_ADMIN
    )
    return response.data
  } catch (error) {
    console.error('Error getting containers:', error)
  }
}

export const checkHealth = async () => {
  try {
    const response = await axiosInstance.get(endpoints.HEALTH)
    return response.data
  } catch (error) {
    console.error('Error getting health:', error)
  }
}
