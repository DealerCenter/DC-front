import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL
export const AUCTiONS_API = 'https://copart-iaai-api.com'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export default axiosInstance
