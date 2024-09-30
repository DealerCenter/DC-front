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
  adminUserProfile: '/admin/user-profile',
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
      sortByCreateDate: 'asc' | 'desc' | null
      sortByCost: 'asc' | 'desc' | null
      status: ShippingStatus
      dealerId?: number
    }
  | undefined

// export const ORDER_CONSTANTS = {
//   ID: 'id',
//   CREATED_AT: 'createdAt',
//   UPDATED_AT: 'updatedAt',
//   MANUFACTURER: 'manufacturer',
//   MANUFACTURE_YEAR: 'manufactureYear',
//   CAR_DETAILS: 'carDetails',
//   ADDITIONAL_INFORMATION: 'additionalInformation',
//   MODEL: 'model',
//   VIN: 'vin',
//   TRANSPORTATION_COST: 'transportationCost',
//   CAR_COST: 'carCost',
//   EXACT_ADDRESS: 'exactAddress',
//   IS_INSURED: 'isInsured',
//   CAR_CATEGORY: 'carCategory',
//   MILEAGE: 'mileage',
//   STATUS: 'status',
//   STATE: {
//     ID: 'state.id',
//     CREATED_AT: 'state.createdAt',
//     UPDATED_AT: 'state.updatedAt',
//     NAME: 'state.name',
//   },
//   CONTAINER: {
//     ID: 'container.id',
//     CREATED_AT: 'container.createdAt',
//     UPDATED_AT: 'container.updatedAt',
//     NAME: 'container.name',
//     TRACKING_URL: 'container.trackingUrl',
//   },
//   RECEIVER: {
//     ID: 'receiver.id',
//     CREATED_AT: 'receiver.createdAt',
//     UPDATED_AT: 'receiver.updatedAt',
//     FIRST_NAME: 'receiver.firstName',
//     LAST_NAME: 'receiver.lastName',
//     PERSONAL_ID: 'receiver.personalId',
//     PHONE_NUMBER: 'receiver.phoneNumber',
//     VERIFICATION_STATUS: 'receiver.verificationStatus',
//     IS_JURIDICAL: 'receiver.isJuridical',
//     ID_IMAGE_URL: 'receiver.idImageUrl',
//   },
// }
