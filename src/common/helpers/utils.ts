import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

export const handleRegistrationResponse = (response: AxiosResponse) => {
  const { accessToken, refreshToken } = response.data

  Cookies.set('accessToken', accessToken, {
    secure: true,
    sameSite: 'Strict',
    httpOnly: false,
  })
  Cookies.set('refreshToken', refreshToken, {
    secure: true,
    sameSite: 'Strict',
    httpOnly: false,
  })

  console.log('Tokens set in cookies')
}
