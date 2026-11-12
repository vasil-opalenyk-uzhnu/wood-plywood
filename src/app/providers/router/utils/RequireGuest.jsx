import { Navigate, useLocation } from 'react-router';

import { useIsAuthenticated, useIsSessionReady } from '@/entities/session';

function RequireGuest({ children }) {
  const isAuthenticated = useIsAuthenticated();
  const isSessionReady = useIsSessionReady();
  const location = useLocation();

  if (!isSessionReady) {
    return null;
  }

  if (!isAuthenticated) {
    return children;
  }

  const from = location.state?.from?.pathname ?? '/';
  return <Navigate to={from} replace />;
}

export default RequireGuest;
