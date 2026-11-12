export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  SHOP: 'shop',
  PRODUCT: 'product',
  PROFILE: 'profile',
  VERIFY_EMAIL: 'verify-email',
  FORGOT_PASSWORD: 'forgot-password',
  RESET_PASSWORD: 'reset-password',
  NOT_FOUND: 'not_found',
};

export const routePaths = {
  [AppRoutes.HOME]: '/:lng',
  [AppRoutes.LOGIN]: '/:lng/login',
  [AppRoutes.REGISTER]: '/:lng/register',
  [AppRoutes.SHOP]: '/:lng/shop',
  [AppRoutes.PRODUCT]: '/:lng/product',
  [AppRoutes.PROFILE]: '/:lng/profile',
  [AppRoutes.VERIFY_EMAIL]: '/:lng/verify-email',
  [AppRoutes.FORGOT_PASSWORD]: '/:lng/forgot-password',
  [AppRoutes.RESET_PASSWORD]: '/:lng/reset-password',

  [AppRoutes.NOT_FOUND]: '*',
};
