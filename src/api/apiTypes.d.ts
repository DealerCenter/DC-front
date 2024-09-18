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
  juridicalInfo: {
    companyAddress: string
    id: number
    createdAt: string
    updatedAt: string
    companyName: string
    identificationCode: string
    updatedAt: string
    websiteUrl: string
  } | null
}

type NOTIFICATION_RES = {
  id: number
  createdAt: string
  updatedAt: string
  enabled: boolean
  notificationCategory: {
    id: number
    createdAt: string
    updatedAt: string
    type: string
    name: string
  }
}

type RECEIVER_POST_RES = {
  firstName: string
  lastName: string
  personalId: string
  phoneNumber: string
  isJuridical: boolean
  dealer: {
    id: number
    createdAt: string // DateTime
    updatedAt: string // DateTime
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    isJuridical: boolean
    address: string
    personalId: string
    birthDate: string // DateTime
    idImageUrl: string
    idImageVerificationStatus: string
    juridicalDocUrl: string | null
    juridicalDocVerificationStatus: string
  }
  idImageUrl: string
  id: number
  createdAt: string // DateTime
  updatedAt: string // DateTime
  verificationStatus: string
}

type RECEIVER_GET_RES = {
  id: number
  firstName: string
  lastName: string
  personalId: string
  phoneNumber: string
  createdAt: string
  updatedAt: string
  isJuridical: boolean
  idImageUrl: string
  verificationStatus: string
}
