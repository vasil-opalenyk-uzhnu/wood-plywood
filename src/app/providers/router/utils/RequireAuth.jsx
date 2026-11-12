import { generatePath, Navigate, useLocation, useParams } from 'react-router';

import { AppRoutes, routePaths, supportedLngs } from '@/shared/config';
import { useIsAuthenticated, useIsSessionReady } from '@/entities/session';

const fallbackLanguage = supportedLngs[0];

function RequireAuth({ children }) {
  const isAuthenticated = useIsAuthenticated();
  const isSessionReady = useIsSessionReady();
  const { lng } = useParams();
  const location = useLocation();

  if (!isSessionReady) {
    return null;
  }

  if (isAuthenticated) {
    return children;
  }

  const localizedLanguage = supportedLngs.includes(lng) ? lng : fallbackLanguage;
  const loginPath = generatePath(routePaths[AppRoutes.LOGIN], { lng: localizedLanguage });

  return <Navigate to={loginPath} replace state={{ from: location }} />;
}

export default RequireAuth;
