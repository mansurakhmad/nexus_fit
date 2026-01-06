export enum APP_ROUTERS_NAMES {
  lOGIN = 'lOGIN',
  ENROLLMENT = 'ENROLLMENT',
  CONFIRM = 'CONFIRM',
  MAIN = 'MAIN',
}

export const APP_ROUTES: Record<APP_ROUTERS_NAMES, string> = {
  [APP_ROUTERS_NAMES.lOGIN]: '/',
  [APP_ROUTERS_NAMES.ENROLLMENT]: '/enrollment',
  [APP_ROUTERS_NAMES.CONFIRM]: '/confirm',
  [APP_ROUTERS_NAMES.MAIN]: '/main',
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const KEEP_USER_LOGIN = 'KEEP_USER_LOGIN';
