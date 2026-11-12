import styles from './UserSummary.module.scss';
import clsx from 'clsx';

import { Avatar } from '@/shared/ui/Avatar';

function UserSummary({ user, actions, uploading }) {
  const name = `${user.firstName} ${user.lastName}`;

  return (
    <div className={clsx(styles.root, 'block')}>
      <Avatar src={user?.profilePicture?.url} name={name} uploading={uploading} size="large" />
      <p className="h2">{name}</p>
      <p>{user.email}</p>
      <div className={styles.badges}>
        <span className={styles.badge}>
          <span>{user.provider}</span>
        </span>
        <span
          className={clsx(styles.badge, {
            [styles.success]: user.status === 'active',
            [styles.error]: user.status !== 'active',
          })}
        >
          <span>{user.status === 'active' ? 'verified' : 'not verified'}</span>
        </span>
      </div>
      {actions}
      <p>JPG, PNG or WebP. Square images look best.</p>
    </div>
  );
}

export default UserSummary;
