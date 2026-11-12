import clsx from 'clsx';

import styles from './Avatar.module.scss';

function AvatarSkeleton({ size = 'small' }) {
  return (
    <div
      className={clsx(styles.root, styles[`size-${size}`], styles.skeleton)}
      aria-hidden="true"
    />
  );
}

export default AvatarSkeleton;
