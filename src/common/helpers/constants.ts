export const routeName = {
  landing: '/',
  auth: '/auth',

  dealer: '/dealer',
  dealerOrderHistory: '/dealer/order-history',
  dealerManageNotifications: '/dealer/manage-notifications',
  dealerUsersList: '/dealer/users-list',
  dealerPersonalInformation: '/dealer/personal-information',
  dealerOrder: '/dealer/order-details',
  adminOrderDetails: '/admin/order-details',

  admin: '/admin',
  adminOrderHistory: '/admin/order-history',
  adminManageNotifications: '/admin/manage-notifications',
  adminUsersList: '/admin/users-list',
  adminPersonalInformation: '/admin/personal-information',
  adminOrder: '/admin/order',
  adminCreateOrder: '/admin/create-order',
  adminSettings: '/admin/settings',
  // adminCreateOrderImageUpload: '/admin/create-order/image-upload',
  adminOrderImageUpload: '/admin/order/image-upload',
  adminDealersList: '/admin/dealers-list',
  adminDealerProfile: '/admin/dealer-profile',
  adminUserContainers: '/admin/shipping-containers',
  contact: '/contact',
  searchVehicle: '/search-vehicle',
  vehicleListing: '/search-vehicle/vehicle-listing',
  landingPage: '/',
  ourServices: '/our-services',
  documentCheck: '/our-services/document-check',
  historyCheck: '/our-services/history-check',
  statusCheck: '/our-services/status-check',
  transportationCalculator: '/our-services/transportation-calculator',
  aboutUs: '/about-us',
  adminContainers: '/admin/shipping-containers',
  resetPassword: '/auth/reset-password',
  inboxCar: '/search-vehicle/inbox-car',
}

export const locales = ['en', 'ge', 'ru']

export enum VERIFICATION_STATUS_NAME {
  PENDING = 'PENDING',
  VERIFIED = 'VERIFIED',
  UNVERIFIED = 'UNVERIFIED',
  UNKNOWN = 'UNKNOWN',
}

export enum SHIPPING_STATUS {
  IN_AUCTION = 'InAuction',
  IN_AMERICAN_WAREHOUSE = 'InAmericanWarehouse',
  IN_CONTAINER = 'InContainer',
  UNDERGOES_CUSTOMS = 'UndergoesCustomsProcedures',
  SENT = 'Sent',
}

export enum IMAGE_LOCATIONS {
  TOW_TRUCK = 'towTruckImages',
  ABROAD_PORT = 'abroadPortImages',
  CONTAINER = 'containerImages',
  HOME_PORT = 'homePortImages',
}

export type LocalesType = 'en' | 'ge' | 'ru'

export type ShippingStatus = SHIPPING_STATUS | null

export type ShippingStatusAndDates = {
  status: SHIPPING_STATUS
  date: string
  order: number
  isCurrent: boolean
}

export type OrdersQueryType =
  | {
      page?: number
      pageSize?: number
      sortByCreateDate?: 'asc' | 'desc' | null
      sortByCost?: 'asc' | 'desc' | null
      status?: ShippingStatus
      receiverId?: number
      carManufacturer?: string
      dealerId?: number
      orderId?: number
    }
  | undefined

export type DealersQueryType =
  | {
      // firstName?: string
      // lastName?: string
      // phoneNumber?: string

      personalId?: string
      email?: string
      page?: number
      pageSize?: number
      search?: string
    }
  | undefined

export type ReceiversQueryType =
  | {
      page?: number
      pageSize?: number
      search?: string
      dealerId?: number
    }
  | undefined

export const carCategories = [
  'Sedan',
  'Jeep',
  'Coupe',
  'Hatchback',
  'Universal',
  'Cabriolet',
  'Pickup',
  'Minivan',
  'Microbus',
  'GoodsWagon',
  'Limousine',
  'CrossOver',
]
