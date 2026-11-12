import { Suspense } from 'react';

import DefaultPageLayout from '@/app/layouts/DefaultPageLayout/DefaultPageLayout';

import RequireAuth from './RequireAuth.jsx';
import RequireGuest from './RequireGuest.jsx';
import LanguageSyncWrapper from '@/app/providers/router/LanguageSyncWrapper.jsx';

function buildRouteElement({ element, path, layout, hasLocalizedParams, requiresAuth, guestOnly }) {
  const isFullScreenLoader = layout === null;
  let routeElement = (
    <Suspense
      key={path}
      fallback={<div>{`Loading is ${isFullScreenLoader ? 'full' : 'not full'} ...`}</div>}
    >
      <LanguageSyncWrapper hasLocalizedParams={hasLocalizedParams}>{element}</LanguageSyncWrapper>
    </Suspense>
  );
  routeElement = requiresAuth ? <RequireAuth>{routeElement}</RequireAuth> : routeElement;
  routeElement = guestOnly ? <RequireGuest>{routeElement}</RequireGuest> : routeElement;
  const RouteLayout = layout === undefined ? DefaultPageLayout : layout;

  if (RouteLayout === null) {
    return routeElement;
  }

  return <RouteLayout>{routeElement}</RouteLayout>;
}

export default buildRouteElement;
