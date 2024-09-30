import { ORDER_CONSTANTS } from '@/common/helpers/constants'

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
  page: number
  pageCount: number
  pageSize: number
  total: number
  data: RECEIVER_DATA[]
}

type RECEIVER_DATA = {
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

type CONTAINER_POST_RES = {
  name: string
  trackingUrl: string
  id: number
  createdAt: string
  updatedAt: string
}

type CONTAINER_GET_RES = {
  name: string
  trackingUrl: string
  id: number
  createdAt: string
  updatedAt: string
}

type ORDERS_GET_RES = {
  page: number
  pageCount: number
  pageSize: number
  total: number
  data: ORDER_DATA[]
}

type ORDER_DATA = {
  id: number
  createdAt: string // DateTime
  updatedAt: string // DateTime
  carDetails: string
  additionalInformation: string
  manufacturer: string
  manufactureYear: number
  model: string
  vin: string
  transportationCost: number
  carDetails: string
  additionalInformation: string
  carCost: number
  exactAddress: string
  isInsured: boolean
  carCategory: string
  mileage: number
  status: string
  state: {
    id: number
    createdAt: string // DateTime
    updatedAt: string // DateTime
    name: string
  }
  container: {
    id: number
    createdAt: string // DateTime
    updatedAt: string // DateTime
    name: string
    trackingUrl: string
  }
  receiver: {
    id: number
    createdAt: string // DateTime
    updatedAt: string // DateTime
    firstName: string
    lastName: string
    personalId: string
    phoneNumber: string
    verificationStatus: string
    isJuridical: boolean
    idImageUrl: string | null
  }
}

type ADMIN_GET_RES = {
  id: number
  createdAt: string
  updatedAt: string
  username: string
  roleIds: number[]
}

type DEALERS_RES = {
  page: number
  pageCount: number
  pageSize: number
  total: number
  data: DEALERS_DATA[]
}

type DEALERS_DATA = {
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
  receivers?: RECEIVER_DATA[] | []
}
