import { Navigate, Route, Routes } from 'react-router';

import { routeConfig } from './routerConfig.jsx';
import buildRouteElement from './utils/buildRouteElement.jsx';
import { useMissingLanguageRedirect } from './utils/useMissingLanguageRedirect.js';

function AppRouter() {
  const missingLanguageRedirectPath = useMissingLanguageRedirect();

  if (missingLanguageRedirectPath) {
    return <Navigate to={missingLanguageRedirectPath} replace />;
  }

  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.path} path={route.path} element={buildRouteElement(route)} />
      ))}
    </Routes>
  );
}

export { AppRouter };
