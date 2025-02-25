import {
  ORDER_CONSTANTS,
  SHIPPING_STATUS,
  VERIFICATION_STATUS_NAME,
} from '@/common/helpers/constants'

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
  idImageVerificationStatus: VERIFICATION_STATUS_NAME
  juridicalDocUrl: string | null
  juridicalDocVerificationStatus: VERIFICATION_STATUS_NAME
  level?: {
    id: number
    level: string
    cost: number
  }
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
    idImageVerificationStatus: VERIFICATION_STATUS_NAME
    juridicalDocUrl: string | null
    juridicalDocVerificationStatus: VERIFICATION_STATUS_NAME
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
  verificationStatus: VERIFICATION_STATUS_NAME
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
  createdAt: string
  updatedAt: string
  id: number
  trackingUrl: string
  orders: ORDER_DATA[]
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
  additionalDetails: string | null
  manufacturer: string
  manufactureYear: number
  model: string
  vin: string
  transportationCost: number
  carDetails: string | null
  carCost: number
  exactAddress: string
  isInsured: boolean
  carCategory: string
  mileage: number
  status: SHIPPING_STATUS
  statusAndDates: ShippingStatusAndDates[]
  state: string
  container: CONTAINER_GET_RES
  receiver: RECEIVER_DATA
  dealer: DEALERS_DATA
  carImages: CAR_IMAGE[]
}

type DOCUMENT_CHECK_RES = {
  id: number
  document: string
  description: string
  code: string
  label: string
}

type CAR_IMAGE = {
  id: number
  createdAt: string
  updatedAt: string
  url: string
  type: string
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
  idImageVerificationStatus: VERIFICATION_STATUS_NAME
  juridicalDocUrl: string | null
  juridicalDocVerificationStatus: VERIFICATION_STATUS_NAME
  receivers?: RECEIVER_DATA[] | []
  juridicalInfo?: JURIDICAL_INFO
  level?: {
    id: number
    level: string
    cost: number
  }
}

type JURIDICAL_INFO = {
  companyAddress: string
  companyName: string
  createdAt: string
  id: number
  identificationCode: string
  updatedAt: string
  websiteUrl: string
}

type OrderPostAdminType = {
  manufacturer: string
  manufactureYear: number
  model: string
  vin: string
  transportationCost: number
  carCost: number
  stateId: number
  exactAddress: string
  isInsured: boolean
  carCategory: string
  mileage: number
  status: string
  containerId: number
  receiverId: number
  additionalDetails?: string
  carDetails?: string
  towTruckImages?: any[]
  abroadPortImages?: any[]
  containerImages?: any[]
  homePortImages?: any[]
}

type OrderPutAdminType = {
  manufacturer?: string
  manufactureYear?: number
  model?: string
  vin?: string
  transportationCost?: number
  carCost?: number
  stateId?: number
  exactAddress?: string
  isInsured?: boolean
  carCategory?: string
  mileage?: number
  status?: string
  containerId?: number
  receiverId?: number
  additionalDetails?: string
  carDetails?: string
  towTruckImages?: any[]
  abroadPortImages?: any[]
  containerImages?: any[]
  homePortImages?: any[]
}

type STATES_RES = {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  abbreviation: string
}
