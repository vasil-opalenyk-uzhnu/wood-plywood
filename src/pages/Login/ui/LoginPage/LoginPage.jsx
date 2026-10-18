import clsx from 'clsx';
import styles from './LoginPage.module.scss';
import LoginForm from '../LoginForm/LoginForm.jsx';

import authImg from '/images/auth/img.jpg';

import { Button } from '@/shared/ui/Button';
import Icon from '@/shared/ui/Icon/Icon.jsx';

function LoginPage() {
  return (
    <main className={styles.root}>
      <div className="container">
        <div className={clsx(styles.container, 'block')}>
          <div className={styles.image}>
            <img src={authImg} alt="" width={530} height={680} />
          </div>
          <div className={styles.main}>
            <LoginForm />
            <div className={styles.deco}>
              <p>or continue with</p>
            </div>
            <Button variant="secondary" size="small" fullWidth>
              <Icon name="google" width={16} height={16} />
              Google
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
