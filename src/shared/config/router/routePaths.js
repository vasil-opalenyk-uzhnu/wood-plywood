export const AppRoutes = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
  SHOP: 'shop',
  PRODUCT: 'product',
  NOT_FOUND: 'not_found',
};

export const routePaths = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.SHOP]: '/shop',
  [AppRoutes.PRODUCT]: '/product',

  [AppRoutes.NOT_FOUND]: '*',
};
