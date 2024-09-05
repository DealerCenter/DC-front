type REGISTER_RES = {
  accessToken: string
  refreshToken: string
}

type LOGIN_RES = {
  accessToken: string
  refreshToken: string
}

type ME_RES = {
  id: number
  createdAt: string
  updatedAt: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  isJuridical: boolean
  address: string
  personalId: string
  birthDate: string
  idImageUrl: string
  idImageVerificationStatus: string
  juridicalDocUrl: string | null
  juridicalDocVerificationStatus: string
  juridicalInfo: string | null
}
