import DefaultPageLayout from '@/app/layouts/DefaultPageLayout/DefaultPageLayout';

import RequireAuth from './RequireAuth.jsx';

function buildRouteElement({ element, layout, requiresAuth }) {
  const guardedElement = requiresAuth ? <RequireAuth>{element}</RequireAuth> : element;
  const RouteLayout = layout === undefined ? DefaultPageLayout : layout;

  if (RouteLayout === null) {
    return guardedElement;
  }

  return <RouteLayout>{guardedElement}</RouteLayout>;
}

export default buildRouteElement;
