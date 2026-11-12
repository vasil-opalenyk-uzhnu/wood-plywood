import { useState } from 'react';
import styles from './Avatar.module.scss';
import clsx from 'clsx';

import { getInitials } from './getInitials.js';
import { DEFAULT_AVATAR_IS_UPLOADING, DEFAULT_AVATAR_SIZE } from './config.js';

function Avatar(props) {
  const { src, name, size = DEFAULT_AVATAR_SIZE, uploading = DEFAULT_AVATAR_IS_UPLOADING } = props;

  const [failedSrc, setFailedSrc] = useState(null);

  const showPhoto = Boolean(src) && failedSrc !== src;

  return (
    <div className={clsx(styles.root, styles[`size-${size}`])} aria-hidden="true">
      {showPhoto ? (
        <img
          className={styles.photo}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          onError={() => setFailedSrc(src)}
        />
      ) : (
        <span className={styles.initials}>{getInitials(name)}</span>
      )}

      {uploading && (
        <span className={styles.overlay}>
          <span className={styles.spinner} />
        </span>
      )}
    </div>
  );
}

export default Avatar;
