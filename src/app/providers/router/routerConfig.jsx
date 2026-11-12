import AuthPageLayout from '@/app/layouts/AuthPageLayout/AuthPageLayout.jsx';

import { HomePage } from '@/pages/Home';
import { LoginPage } from '@/pages/Login';
import { RegisterPage } from '@/pages/Register';
import { ShopPage } from '@/pages/Shop';
import { ProductPage } from '@/pages/Product';
import { ProfilePage } from '@/pages/Profile';
import { VerifyEmailPage } from '@/pages/VerifyEmail';
import { ForgotPasswordPage } from '@/pages/ForgotPassword';
import { ResetPasswordPage } from '@/pages/ResetPassword';
import { NotFoundPage } from '@/pages/NotFound';

import { AppRoutes, routePaths } from '@/shared/config';

export const routeConfig = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
    layout: AuthPageLayout,
    guestOnly: true,
  },
  {
    path: routePaths[AppRoutes.REGISTER],
    element: <RegisterPage />,
    layout: AuthPageLayout,
    guestOnly: true,
  },
  {
    path: routePaths[AppRoutes.VERIFY_EMAIL],
    element: <VerifyEmailPage />,
    layout: null,
    guestOnly: true,
  },
  {
    path: routePaths[AppRoutes.FORGOT_PASSWORD],
    element: <ForgotPasswordPage />,
    layout: null,
    guestOnly: true,
  },
  {
    path: routePaths[AppRoutes.RESET_PASSWORD],
    element: <ResetPasswordPage />,
    layout: null,
    guestOnly: true,
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
    path: routePaths[AppRoutes.PROFILE],
    element: <ProfilePage />,
    requiresAuth: true,
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
