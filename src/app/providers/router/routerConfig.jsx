import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import { RegisterPage } from '@/pages/Register';
import { ShopPage } from '@/pages/Shop';
import { ProductPage } from '@/pages/Product';

import { AppRoutes, routePaths } from '@/shared/config';

export const routeConfig = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
    layout: null,
  },
  {
    path: routePaths[AppRoutes.REGISTER],
    element: <RegisterPage />,
    layout: null,
  },
  {
    path: routePaths[AppRoutes.SHOP],
    element: <ShopPage />,
  },
  {
    path: routePaths[AppRoutes.PRODUCT],
    element: <ProductPage />,
  },
  {
    path: '/protected',
    element: <div>Some protected route</div>,
    requiresAuth: true,
  },
];
