import styles from './VerifyEmailPage.module.scss';

import VerifyEmailButton from '../VerifyEmailButton/VerifyEmailButton.jsx';

function VerifyEmailPage() {
  return (
    <section className={styles.root}>
      <VerifyEmailButton />
    </section>
  );
}

export default VerifyEmailPage;
