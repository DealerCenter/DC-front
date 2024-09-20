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

type ORDERS_GET_RES = {
  id: number
  createdAt: string // DateTime
  updatedAt: string // DateTime
  manufacturer: string
  manufactureYear: number
  model: string
  vin: string
  transportaionCost: number
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

// type ORDERS_GET_RES = {
//   [ORDER_CONSTANTS.ID]: number
//   [ORDER_CONSTANTS.CREATED_AT]: string // DateTime
//   [ORDER_CONSTANTS.UPDATED_AT]: string // DateTime
//   [ORDER_CONSTANTS.MANUFACTURER]: string
//   [ORDER_CONSTANTS.MANUFACTURE_YEAR]: number
//   [ORDER_CONSTANTS.MODEL]: string
//   [ORDER_CONSTANTS.VIN]: string
//   [ORDER_CONSTANTS.TRANSPORTATION_COST]: number
//   [ORDER_CONSTANTS.CAR_COST]: number
//   [ORDER_CONSTANTS.EXACT_ADDRESS]: string
//   [ORDER_CONSTANTS.IS_INSURED]: boolean
//   [ORDER_CONSTANTS.CAR_CATEGORY]: string
//   [ORDER_CONSTANTS.MILEAGE]: number
//   [ORDER_CONSTANTS.STATUS]: string
//   [ORDER_CONSTANTS.STATE]: {
//     [ORDER_CONSTANTS.STATE.ID]: number
//     [ORDER_CONSTANTS.STATE.CREATED_AT]: string // DateTime
//     [ORDER_CONSTANTS.STATE.UPDATED_AT]: string // DateTime
//     [ORDER_CONSTANTS.STATE.NAME]: string
//   }
//   [ORDER_CONSTANTS.CONTAINER]: {
//     [ORDER_CONSTANTS.CONTAINER.ID]: number
//     [ORDER_CONSTANTS.CONTAINER.CREATED_AT]: string // DateTime
//     [ORDER_CONSTANTS.CONTAINER.UPDATED_AT]: string // DateTime
//     [ORDER_CONSTANTS.CONTAINER.NAME]: string
//     [ORDER_CONSTANTS.CONTAINER.TRACKING_URL]: string
//   }
//   [ORDER_CONSTANTS.RECEIVER]: {
//     [ORDER_CONSTANTS.RECEIVER.ID]: number
//     [ORDER_CONSTANTS.RECEIVER.CREATED_AT]: string // DateTime
//     [ORDER_CONSTANTS.RECEIVER.UPDATED_AT]: string // DateTime
//     [ORDER_CONSTANTS.RECEIVER.FIRST_NAME]: string
//     [ORDER_CONSTANTS.RECEIVER.LAST_NAME]: string
//     [ORDER_CONSTANTS.RECEIVER.PERSONAL_ID]: string
//     [ORDER_CONSTANTS.RECEIVER.PHONE_NUMBER]: string
//     [ORDER_CONSTANTS.RECEIVER.VERIFICATION_STATUS]: string
//     [ORDER_CONSTANTS.RECEIVER.IS_JURIDICAL]: boolean
//     [ORDER_CONSTANTS.RECEIVER.ID_IMAGE_URL]: string | null
//   }
// }
