import { useVerifyEmail } from './useVerifyEmail/useVerifyEmail.js';

import { Button } from '@/shared/ui/Button';

function VerifyEmailButton() {
  const { handleClick, isLoading } = useVerifyEmail();

  return (
    <Button size="small" onClick={handleClick} loading={isLoading}>
      Confirm email
    </Button>
  );
}

export default VerifyEmailButton;
