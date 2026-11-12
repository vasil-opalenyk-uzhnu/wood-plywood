import styles from './UserSummary.module.scss';
import clsx from 'clsx';

import { AvatarSkeleton } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';

function UserSummarySkeleton() {
  return (
    <div className={clsx(styles.root, 'block')}>
      <AvatarSkeleton size="large" />
      <Skeleton width="100%" height="2.5rem" />
      <Skeleton width="100%" height="1.25rem" />
      <div className={styles.badges}>
        <Skeleton width="3.5rem" height="2rem" radius="0.375rem" />
        <Skeleton width="4.5rem" height="2rem" radius="0.375rem" />
      </div>
      <Skeleton width="100%" height="2.5rem" />
      <Skeleton width="100%" height="2.5rem" />
      <Skeleton width="100%" height="1.25rem" />
    </div>
  );
}

export default UserSummarySkeleton;
