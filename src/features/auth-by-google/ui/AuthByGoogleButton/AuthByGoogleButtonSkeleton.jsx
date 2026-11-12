import styles from './AuthByGoogleButton.module.scss';

import { Skeleton } from '@/shared/ui/Skeleton';

function AuthByGoogleButtonSkeleton() {
  return <Skeleton className={styles.root} height={40} radius={20} />;
}

export default AuthByGoogleButtonSkeleton;
