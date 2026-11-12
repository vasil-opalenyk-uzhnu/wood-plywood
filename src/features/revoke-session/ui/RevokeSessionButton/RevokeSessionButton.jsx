import { useRevokeSession } from './useRevokeSession/useRevokeSession.js';

import { Button } from '@/shared/ui/Button';

function RevokeSessionButton({ session }) {
  const { mutate, isPending } = useRevokeSession(session);

  const handleClick = () => {
    mutate();
  };

  return (
    <Button variant="secondary" size="small" loading={isPending} onClick={handleClick}>
      Sign out
    </Button>
  );
}

export default RevokeSessionButton;
