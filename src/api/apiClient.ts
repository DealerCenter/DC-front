import { message } from 'antd'
import axios from 'axios'

const BASE_URL = 'http://localhost:7070'
// const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const AUCTIONS_API = 'https://copart-iaai-api.com'
export const EMAIL_API =
  'https://api.mailinator.com/api/v2/domains/private/inboxes?token=30078e013ea341fe9b311dbb1d527bad '

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

// let isRefreshing = false
let failedQueue: any[] = []

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
  async (error) => {
    const originalRequest = error.config
    if (error.response && error.response.status === 403) {
      message.error('You are not authorized to access this page')
      window.location.href = '/'
      localStorage.clear()
    }
    if (error.response && error.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem('REFRESH_TOKEN')
        const response = await axios.post(
          `${BASE_URL}/auth/refresh`,
          {
            // refresh_token: refreshToken,
          },
          {
            headers: {
              refresh_token: `${refreshToken}`,
            },
          }
        )

        const newAccessToken = response.data
        console.log('newAccessToken', newAccessToken)

        localStorage.setItem('ACCESS_TOKEN', newAccessToken)

        // Retry the failed requests in the queue
        failedQueue.forEach((request) => request(newAccessToken))
        failedQueue = []

        originalRequest.headers['Authorization'] = `${newAccessToken}`
        return axios(originalRequest)
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError)
        return Promise.reject(refreshError)
      } finally {
        // isRefreshing = false
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
