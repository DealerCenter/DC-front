import { AUCTIONS_API } from '@/api/apiClient'
import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

const ACCESS_TOKEN = 'accessToken'
const REFRESH_TOKEN = 'refreshToken'

export const handleAuthResponse = (response: AxiosResponse) => {
  const { accessToken, refreshToken } = response.data

  Cookies.set(ACCESS_TOKEN, accessToken, {
    secure: true,
    sameSite: 'Strict',
    httpOnly: false,
  })

  Cookies.set(REFRESH_TOKEN, refreshToken, {
    secure: true,
    sameSite: 'Strict',
    httpOnly: false,
  })

  localStorage.setItem('ACCESS_TOKEN', accessToken)
  localStorage.setItem('REFRESH_TOKEN', refreshToken)
}

export const handleLogout = () => {
  Cookies.remove(ACCESS_TOKEN)
  Cookies.remove(REFRESH_TOKEN)
  localStorage.clear()
}

export const getCarDetailsByVin = async (vin: string) => {
  const response = await axios.post<AuctionApiResponse>(
    `${AUCTIONS_API}/api/v1/get-car-vin?api_token=${process.env.NEXT_PUBLIC_AUCTIONS_API_TOKEN}&vin_number=${vin}`
  )
  return response.data
}

export const getVehicleList = async (payload: {
  page: number
  per_page?: number
  auction_name?: 'COPART' | 'IAAI'
  make?: string // manufacturer
  model?: string
  year_from?: string
  year_to?: string
  odometer_from?: number
  odometer_to?: number
}) => {
  const response = await axios.post<VehicleListApiResponse>(
    `${AUCTIONS_API}/api/v2/get-cars?api_token=${process.env.NEXT_PUBLIC_AUCTIONS_API_TOKEN}`,
    payload
  )
  return response.data
}

export const getMakeNames = async () => {
  const response = await axios.post<getMakesResponse>(
    `${AUCTIONS_API}/api/v1/get-makes?api_token=${process.env.NEXT_PUBLIC_AUCTIONS_API_TOKEN}`
  )
  return response.data
}

export const getModelByMake = async (makeId: number) => {
  const response = await axios.post<getModelByMakeResponse>(
    `${AUCTIONS_API}/api/v1/get-model-by-make/${makeId}?api_token=${process.env.NEXT_PUBLIC_AUCTIONS_API_TOKEN}`
  )
  return response.data
}
