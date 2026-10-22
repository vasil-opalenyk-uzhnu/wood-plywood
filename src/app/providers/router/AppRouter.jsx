import { Route, Routes } from 'react-router';

import { routeConfig } from './routerConfig.jsx';
import buildRouteElement from './utils/buildRouteElement.jsx';

function AppRouter() {
  return (
    <Routes>
      {routeConfig.map((route) => (
        <Route key={route.path} path={route.path} element={buildRouteElement(route)} />
      ))}
    </Routes>
  );
}

export default AppRouter;
