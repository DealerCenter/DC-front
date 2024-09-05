import { AxiosResponse } from 'axios'
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
}

export const handleLogout = () => {
  Cookies.remove(ACCESS_TOKEN)
  Cookies.remove(REFRESH_TOKEN)
}
