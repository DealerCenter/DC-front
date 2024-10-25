import axios from 'axios'

// const BASE_URL = 'http://localhost:7070'
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const AUCTIONS_API = 'https://copart-iaai-api.com'

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

export default axiosInstance
