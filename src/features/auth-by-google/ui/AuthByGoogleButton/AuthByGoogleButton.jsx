import clsx from 'clsx';
import styles from './AuthByGoogleButton.module.scss';

import AuthByGoogleButtonSkeleton from './AuthByGoogleButtonSkeleton.jsx';
import { useAuthByGoogle } from './useAuthByGoogle/useAuthByGoogle.js';
import { GoogleLogin } from '@react-oauth/google';

function AuthByGoogleButton() {
  const { isReady, isPending, handleSuccess, handleError } = useAuthByGoogle();

  if (!isReady) return <AuthByGoogleButtonSkeleton />;

  return (
    <div className={clsx(styles.root, isPending && styles.pending)} aria-busy={isPending}>
      <GoogleLogin width="100%" size="large" onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}

export default AuthByGoogleButton;
