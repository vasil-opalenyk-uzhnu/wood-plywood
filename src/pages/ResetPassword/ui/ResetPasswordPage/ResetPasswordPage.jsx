import styles from './ResetPasswordPage.module.scss';

import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm.jsx';

function ResetPasswordPage() {
  return (
    <section className={styles.root}>
      <ResetPasswordForm />
    </section>
  );
}

export default ResetPasswordPage;
