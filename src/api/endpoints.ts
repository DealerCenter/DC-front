export const endpoints = {
  REGISTER: '/auth/register',
  REGISTER_LEGAL: '/auth/register-juridical',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  ME: '/auth/me',
  CHANGE_PASSWORD: '/auth/change-password',
  UPDATE_USER_DATA: '/api/dealers',
  NOTIFICATION_SETTINGS_DEALERS: '/notifications/dealers',
  ORDERS: '/api/orders',
  RECEIVERS: '/api/receivers',
  GET_CONTAINERS_BY_ORDER_ID: '/api/containers/by-order',
  HEALTH: '/health',

  ORDERS_ADMIN: '/orders',
  CONTAINERS_ADMIN: '/containers',
  RECEIVERS_ADMIN: '/receivers',
  GET_CONTAINERS_BY_ORDER_ID_ADMIN: '/containers/by-order',

  ADMINS: '/admins',
  LOGIN_ADMIN: '/admins/login',
  LOGOUT_ADMIN: '/admins/logout',
  CHANGE_PASSWORD_ADMIN: '/admins/change-password',
}
