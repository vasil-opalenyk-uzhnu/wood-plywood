import styles from './LoginPage.module.scss';
import LoginForm from '../LoginForm/LoginForm.jsx';

import { AuthByGoogleButton } from '@/features/auth-by-google';

function LoginPage() {
  return (
    <>
      <LoginForm />
      <div className={styles.deco}>
        <p>or continue with</p>
      </div>
      <AuthByGoogleButton />
    </>
  );
}

export default LoginPage;
