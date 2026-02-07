export enum APP_ROUTERS_NAMES {
  lOGIN = 'lOGIN',
  ENROLLMENT = 'ENROLLMENT',
  MAIN = 'MAIN',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  RECOVERY_PASSWORD = 'RECOVERY_PASSWORD',
  PROFILE = 'PROFILE',
}

export const APP_ROUTES = {
  [APP_ROUTERS_NAMES.lOGIN]: '/',
  [APP_ROUTERS_NAMES.ENROLLMENT]: '/enrollment',
  [APP_ROUTERS_NAMES.MAIN]: '/main',
  [APP_ROUTERS_NAMES.FORGOT_PASSWORD]: '/forgot-password',
  [APP_ROUTERS_NAMES.RECOVERY_PASSWORD]: '/recovery-password',
  [APP_ROUTERS_NAMES.PROFILE]: '/profile',
} as const satisfies Record<APP_ROUTERS_NAMES, string>;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const KEEP_USER_LOGIN = 'KEEP_USER_LOGIN';

export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/;

export const PINIA_STORES_KEYS = {
  AUTH: 'auth',
};
