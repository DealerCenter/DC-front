import axios from 'axios'

// const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const BASE_URL = 'http://localhost:7070'
export const AUCTIONS_API = 'https://copart-iaai-api.com'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export default axiosInstance
