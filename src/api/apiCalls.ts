import {
  DealersQueryType,
  OrdersQueryType,
  ReceiversQueryType,
} from '@/common/helpers/constants'
import { handleLogout } from '@/common/helpers/utils'
import axiosInstance from './apiClient'
import {
  CONTAINER_GET_RES,
  CONTAINER_POST_RES,
  DEALERS_DATA,
  DEALERS_RES,
  DOCUMENT_CHECK_RES,
  ME_RES,
  OrderPostAdminType,
  OrderPutAdminType,
  ORDERS_GET_RES,
  RECEIVER_GET_RES,
  STATES_RES,
} from './apiTypes'
import { endpoints } from './endpoints'
import { message } from 'antd'

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

export const createOrder = async (payload: OrderPostAdminType) => {
  try {
    const response = await axiosInstance.post(endpoints.ORDERS_ADMIN, payload)
    return response
  } catch (error) {
    console.error('Error creating new order:', error)
  }
}

export const changeOrderAdmin = async (
  payload: OrderPutAdminType,
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
      params: payload,
    })
    return response.data
  } catch (error) {
    console.error('Failed to fetch orders data:', error)
  }
}

export const getDealersAdmin = async (payload: DealersQueryType) => {
  try {
    const response = await axiosInstance.get<DEALERS_RES>(
      endpoints.DEALERS_ADMIN,
      {
        params: payload, // Pass payload as query parameters
      }
    )
    return response.data
  } catch (error) {
    console.error('Failed to fetch dealers data:', error)
  }
}

export const getDealerWithId = async (id: string) => {
  try {
    const response = await axiosInstance.get<DEALERS_DATA>(
      `${endpoints.DEALERS_ADMIN}/${id}`
    )
    return response.data
  } catch (error) {
    console.error('Failed to fetch dealer data:', error)
  }
}

export const deleteDealerAdmin = async (id: string) => {
  try {
    const response = await axiosInstance.delete(
      `${endpoints.DEALERS_ADMIN}/${id}`
    )
    return response
  } catch (error) {
    console.error('Failed to delete dealer:', error)
  }
}

export const getReceivers = async (payload: {
  page?: number
  pageSize?: number
  search?: string
}) => {
  try {
    const response = await axiosInstance.get<RECEIVER_GET_RES>(
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

export const getReceiversAdmin = async (payload: ReceiversQueryType) => {
  try {
    const response = await axiosInstance.get<RECEIVER_GET_RES>(
      endpoints.RECEIVERS_ADMIN,
      {
        params: payload, // Pass payload as query parameters
      }
    )
    return response.data
  } catch (error) {
    console.error('Error getting receivers:', error)
  }
}

export const getReceiversAdminWithId = async (id: string) => {
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

export const getStates = async (isAdmin?: boolean) => {
  try {
    const response = await axiosInstance.get<STATES_RES[]>(
      isAdmin ? endpoints.STATES_ADMIN : endpoints.STATES
    )
    return response.data
  } catch (error) {
    console.error('Error getting health:', error)
  }
}

export const getSingleMail = async (id: string) => {
  try {
    const response = await axiosInstance.get<any>(
      `${endpoints.GET_SINGLE_MAIL}/${id}`
    )
    return response.data
  } catch (error) {
    console.error('Error getting mail:', error)
  }
}

export const uploadCalculatorData = async (file: FormData) => {
  try {
    const response = await axiosInstance.post<any>(
      endpoints.UPLOAD_CALCULATOR_DATA,
      file
    )
    message.success('File uploaded successfully!')
    return response.data
  } catch (error) {
    console.error('Error getting mail:', error)
    message.error('Error uploading file!')
  }
}

export const uploadDocumentsData = async (file: FormData) => {
  try {
    const response = await axiosInstance.post<any>(
      endpoints.DOCUMENTS_CHECK,
      file
    )
    message.success('File uploaded successfully!')
    return response.data
  } catch (error) {
    console.error('Error getting mail:', error)
    message.error('Error uploading file!')
  }
}

export const downloadDocumentsData = async () => {
  try {
    const response = await axiosInstance.get(endpoints.DOCUMENTS_CHECK_DOWNLOAD)
    if (!response) {
      throw new Error('Failed to fetch the file')
    }
    const blob = new Blob([response.data])
    const link = document.createElement('a')

    const url = window.URL.createObjectURL(blob)
    link.href = url
    link.download = 'DocumentsData.xlsx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    return response
  } catch (error) {
    console.error('Error downloading file:', error)
  }
}

export const getDocumentsData = async () => {
  try {
    const response = await axiosInstance.get<DOCUMENT_CHECK_RES[]>(
      endpoints.DOCUMENTS_CHECK
    )
    return response.data
  } catch (error) {
    console.error('Error getting documents data:', error)
  }
}

export const downloadCalculatorExcel = async () => {
  try {
    const response = await axiosInstance.get(endpoints.DOWNLOAD_CALCULATOR_DATA)
    if (!response) {
      throw new Error('Failed to fetch the file')
    }
    const blob = new Blob([response.data])
    const link = document.createElement('a')

    const url = window.URL.createObjectURL(blob)
    link.href = url
    link.download = 'CalculatorData.xlsx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    return response
  } catch (error) {
    console.error('Error downloading file:', error)
  }
}

export const getAuctionsList = async () => {
  try {
    const response = await axiosInstance.get<string[]>(`${endpoints.AUCTIONS}`)
    return response.data
  } catch (error) {
    console.error('Error getting auctions list:', error)
  }
}

export const getLocationList = async () => {
  try {
    const response = await axiosInstance.get<string[]>(`${endpoints.LOCATIONS}`)
    return response.data
  } catch (error) {
    console.error('Error getting locations list:', error)
  }
}

export const getCargoTypes = async () => {
  try {
    const response = await axiosInstance.get<string[]>(
      `${endpoints.CARGO_TYPES}`
    )
    return response.data
  } catch (error) {
    console.error('Error getting cargo types:', error)
  }
}

export const getDestinationList = async () => {
  try {
    const response = await axiosInstance.get<string[]>(
      `${endpoints.DESTINATIONS}`
    )
    return response.data
  } catch (error) {
    console.error('Error getting destinations list:', error)
  }
}

export const getAuctionsAndLocations = async () => {
  try {
    const response = await axiosInstance.get<string[]>(
      `${endpoints.AUCTIONS_AND_LOCATIONS}`
    )
    return response.data
  } catch (error) {
    console.error('Error getting auctions and locations:', error)
  }
}

export const getCalculatedPrice = async (data: {
  cargoType: string
  auctionLocation: string
  destination: string
}) => {
  try {
    const response = await axiosInstance.post<{
      totalPrice: number
      auctionName: string
      cargoType: string
      auctionLocation: string
      destination: string
    }>(`${endpoints.CALCULATE_PRICE}`, { data })
    return response.data
  } catch (error) {
    console.error('Error getting calculated price:', error)
  }
}

export const verifyDealer = async (id: string) => {
  try {
    const response = await axiosInstance.put(`/dealers/${id}/verify-id-image`)
    return response
  } catch (error) {
    console.error('Error verifying dealer:', error)
  }
}

export const unVerifyDealer = async (id: string) => {
  try {
    const response = await axiosInstance.put(`/dealers/${id}/unverify-id-image`)
    return response
  } catch (error) {
    console.error('Error verifying dealer:', error)
  }
}

export const verifyReceiver = async (id: string) => {
  try {
    const response = await axiosInstance.put(`/receivers/${id}/verify`)
    return response
  } catch (error) {
    console.error('Error verifying receiver:', error)
  }
}

export const unVerifyReceiver = async (id: string) => {
  try {
    const response = await axiosInstance.put(`/receivers/${id}/unverify`)
    return response
  } catch (error) {
    console.error('Error verifying receiver:', error)
  }
}

export const createDealerLevels = async (
  data: {
    level: string
    cost: string
  }[]
) => {
  try {
    const response = await axiosInstance.post(endpoints.DEALER_LEVELS, {
      data,
    })
    message.success('Dealer levels created successfully!')
    return response
  } catch (error) {
    console.error('Error creating dealer levels:', error)
  }
}

export const getDealerLevels = async () => {
  try {
    const response = await axiosInstance.get<
      {
        id: number
        level: string
        cost: string
      }[]
    >(endpoints.DEALER_LEVELS)
    return response.data
  } catch (error) {
    console.error('Error getting dealer levels:', error)
  }
}

export const assignDealerLevel = async (dealerId: string, levelId: string) => {
  try {
    const response = await axiosInstance.patch(endpoints.ASSIGN_DEALER_LEVEL, {
      dealerId,
      levelId,
    })
    message.success('Dealer level assigned successfully!')
    return response
  } catch (error) {
    message.error('Error assigning dealer level')
    console.error('Error assigning dealer level:', error)
  }
}

export const resetPassInit = async (email: string, callback?: () => void) => {
  try {
    const response = await axiosInstance.post(endpoints.RESET_PASS_INIT, {
      email,
    })
    callback && callback()
    message.success('Password reset initiated successfully!')
    return response
  } catch (error) {
    message.error('Error initiating password reset')
    console.error('Error initiating password reset:', error)
  }
}

export const resetPassValidate = async (
  email: string,
  otp: string,
  callback?: () => void
) => {
  try {
    const response = await axiosInstance.post(endpoints.RESET_PASS_VALIDATE, {
      email,
      otp,
    })
    message.success('Password reset validated successfully!')
    callback && callback()

    return response
  } catch (error) {
    message.error('Error validating password reset')
    console.error('Error validating password reset:', error)
  }
}

export const resetPassFinalize = async (
  email: string,
  password: string,
  callback?: () => void
) => {
  try {
    const response = await axiosInstance.post(endpoints.RESET_PASS_FINALIZE, {
      email,
      password,
    })
    message.success('Password reset finalized successfully!')
    callback && callback()
    return response
  } catch (error) {
    message.error('Error finalizing password reset')
    console.error('Error finalizing password reset:', error)
  }
}

export const getMailinatorInbox = async () => {
  try {
    const response = await axiosInstance.get(endpoints.MAILINATOR_INBOX)
    return response.data
  } catch (error) {
    console.error('Error getting mailinator inbox:', error)
  }
}

export const getMailinatorMessageById = async (id: string) => {
  try {
    const response = await axiosInstance.get(
      `${endpoints.MAILINATOR_MESSAGE}/${id}`
    )
    return response.data
  } catch (error) {
    console.error('Error getting mailinator message:', error)
  }
}

export const removeOrderFromContainer = async (
  orderId: string,
  containerId: string
) => {
  try {
    const response = await axiosInstance.post(
      `/containers/${containerId}/unassign-order`,
      {
        orderId,
      }
    )
    message.success('Order removed from container successfully!')
    return response
  } catch (error: any) {
    message.error(
      'Error removing order from container!',
      error.response.data.message
    )
    console.error('Error removing order from container:', error)
  }
}

export const assignOrderToContainer = async (
  orderId: string,
  containerId: string
) => {
  try {
    const response = await axiosInstance.post(
      `/containers/${containerId}/assign-order`,
      {
        orderId,
      }
    )
    message.success('Order assigned to container successfully!')
    return response
  } catch (error: any) {
    message.error(
      'Error assigning order to container!',
      error.response.data.message
    )
    console.error('Error assigning order to container:', error.response.data)
  }
}

export const getOrdersWithoutContainer = async () => {
  try {
    const response = await axiosInstance.get(endpoints.ORDERS_WITHOUT_CONTAINER)
    return response.data
  } catch (error) {
    console.error('Error getting orders without container:', error)
  }
}
