import { Button } from '@/shared/ui/Button';
import { useRevokeOtherSessions } from './useRevokeOtherSessions/useRevokeOtherSessions.js';

function RevokeOtherSessionsButton() {
  const { mutate, isPending } = useRevokeOtherSessions();

  const handleClick = () => {
    mutate();
  };

  return (
    <Button variant="secondary" size="small" loading={isPending} onClick={handleClick}>
      Sign out other sessions
    </Button>
  );
}

export default RevokeOtherSessionsButton;
