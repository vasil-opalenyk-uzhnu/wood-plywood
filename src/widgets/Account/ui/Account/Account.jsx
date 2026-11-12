import styles from './Account.module.scss';

import clsx from 'clsx';

import { LogoutZone } from '@/features/logout';

function Account() {
  return (
    <section className={clsx(styles.root, 'block')}>
      <h2 className="h3">Account</h2>
      <p>Manage your password and account access.</p>
      <LogoutZone />
    </section>
  );
}

export default Account;
