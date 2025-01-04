import { message } from 'antd'
import axios from 'axios'

// const BASE_URL = 'http://localhost:7070'
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const AUCTIONS_API = 'https://copart-iaai-api.com'
export const EMAIL_API =
  'https://api.mailinator.com/api/v2/domains/private/inboxes?token=30078e013ea341fe9b311dbb1d527bad '

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem('ACCESS_TOKEN')
    const refreshToken = localStorage.getItem('REFRESH_TOKEN')

    if (accessToken) {
      config.headers['Authorization'] = `${accessToken}`
    }
    if (refreshToken) {
      config.headers['refresh_token'] = `${refreshToken}`
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      // window.location.href = '/'
      message.error('You are not authorized to access this page')
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
