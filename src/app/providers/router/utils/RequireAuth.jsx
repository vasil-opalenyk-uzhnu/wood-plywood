import { Navigate } from 'react-router';

import { AppRoutes, routePaths } from '@/shared/config';

function RequireAuth({ children }) {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return children;
  }

  const loginPath = routePaths[AppRoutes.LOGIN];

  return <Navigate to={loginPath} replace />;
}

export default RequireAuth;
