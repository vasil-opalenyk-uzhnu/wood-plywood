import styles from './RegisterPage.module.scss';
import RegisterForm from '../RegisterForm/RegisterForm.jsx';

import { AuthByGoogleButton } from '@/features/auth-by-google';

function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <div className={styles.deco}>
        <p>or continue with</p>
      </div>
      <AuthByGoogleButton />
    </>
  );
}

export default RegisterPage;
