import { useLogout } from './useLogout/useLogout.js';

import { Button } from '@/shared/ui/Button';

function LogoutButton() {
  const { logout, isLoading } = useLogout();

  return (
    <Button variant="error" size="small" loading={isLoading} onClick={logout}>
      Sign out
    </Button>
  );
}

export default LogoutButton;
