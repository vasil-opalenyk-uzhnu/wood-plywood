import styles from './ForgotPasswordPage.module.scss';

import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm.jsx';

function ForgotPasswordPage() {
  return (
    <section className={styles.root}>
      <ForgotPasswordForm />
    </section>
  );
}

export default ForgotPasswordPage;
