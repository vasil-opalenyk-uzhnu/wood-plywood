import styles from './SessionCard.module.scss';

import { Skeleton } from '@/shared/ui/Skeleton';

function SessionCardSkeleton({ withAction = false }) {
  return (
    <div className={styles.root}>
      <Skeleton width="2.5rem" height="2.5rem" radius="0.5rem" />

      <div className={styles.info}>
        <Skeleton width="60%" height="1.25rem" />
        <Skeleton width="80%" height="1rem" />
      </div>

      {withAction && <Skeleton width="4rem" height="1.25rem" />}
    </div>
  );
}

export default SessionCardSkeleton;
