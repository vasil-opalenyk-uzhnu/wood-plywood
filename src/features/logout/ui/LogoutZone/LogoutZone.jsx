import styles from './LogoutZone.module.scss';

import LogoutButton from '../LogoutButton/LogoutButton.jsx';

function LogoutZone() {
  return (
    <section className={styles.root}>
      <div className={styles.info}>
        <h2 className={styles.title}>Leaving for now?</h2>
        <p className={styles.description}>Sign out on this device.</p>
      </div>
      <LogoutButton />
    </section>
  );
}

export default LogoutZone;
