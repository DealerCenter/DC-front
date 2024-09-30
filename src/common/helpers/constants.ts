export const routeName = {
  landing: '/',
  auth: '/auth',

  dealer: '/dealer',
  dealerOrderHistory: '/dealer/order-history',
  dealerManageNotifications: '/dealer/manage-notifications',
  dealerUsersList: '/dealer/users-list',
  dealerPersonalInformation: '/dealer/personal-information',
  dealerOrder: '/dealer/order',

  admin: '/admin',
  adminOrderHistory: '/admin/order-history',
  adminManageNotifications: '/admin/manage-notifications',
  adminUsersList: '/admin/users-list',
  adminPersonalInformation: '/admin/personal-information',
  adminOrder: '/admin/order',
  adminCreateOrder: '/admin/create-order',
  adminCreateOrderImageUpload: '/admin/create-order/image-upload',
  adminOrderImageUpload: '/admin/order/image-upload',
  adminDealersList: '/admin/dealers-list',
  adminUserProfile: '/admin/dealer-profile',
  adminContainers: '/admin/shipping-containers',
}

export const locales = ['en', 'ge', 'ru']

export const VERIFICATION_STATUS_NAME = {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  UNVERIFIED: 'UNVERIFIED',
}

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

export const SHIPPING_STATUS = {
  IN_AUCTION: 'InAuction',
  IN_AMERICAN_WAREHOUSE: 'InAmericanWarehouse',
  IN_CONTAINER: 'InContainer',
  UNDERGOES_CUSTOMS: 'UndergoesCustomsProcedures',
  SENT: 'Sent',
}

export type LocalesType = 'en' | 'ge' | 'ru'

export type ParamsType = { locale?: LocalesType; id?: number }

export type VerificationStatusType = 'PENDING' | 'VERIFIED' | 'UNVERIFIED'

export type ShippingStatus =
  | 'InAuction'
  | 'InAmericanWarehouse'
  | 'InContainer'
  | 'UndergoesCustomsProcedures'
  | 'Sent'
  | null

export type OrdersQueryType =
  | {
      page?: number
      pageSize?: number
      sortByCreateDate?: 'asc' | 'desc' | null
      sortByCost?: 'asc' | 'desc' | null
      status?: ShippingStatus
      dealerId?: number
    }
  | undefined

export type DealersQueryType =
  | {
      page?: number
      pageSize?: number
      firstName?: string
      lastName?: string
      email?: string
      phoneNumber?: string
      personalId?: string
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
