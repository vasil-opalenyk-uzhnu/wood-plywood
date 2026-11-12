import { useEffect, useRef, useState } from 'react';

import styles from './ToastNotificationListItem.module.scss';
import clsx from 'clsx';

import { Icon } from '@/shared/ui/Icon';

function ToastNotificationListItem({ toast, closeLabel, onRemove }) {
  const [paused, setPaused] = useState(false);
  const [closing, setClosing] = useState(false);
  const remaining = useRef(toast.duration);

  useEffect(() => {
    if (paused || closing || toast.duration <= 0) return;

    const startedAt = Date.now();
    const timer = setTimeout(() => setClosing(true), remaining.current);

    return () => {
      clearTimeout(timer);
      remaining.current -= Date.now() - startedAt;
    };
  }, [paused, closing, toast.duration]);

  return (
    <div
      className={clsx(styles.root, closing && styles.closing)}
      onAnimationEnd={(e) => {
        if (closing && e.target === e.currentTarget) onRemove(toast.id);
      }}
    >
      <div
        className={clsx(styles.toast, styles[toast.type])}
        role={toast.type === 'error' ? 'alert' : 'status'}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <Icon className={styles.icon} name={toast.type} width={28} height={28} />
        <p className="p">{toast.message}</p>
        <button
          type="button"
          className={styles.close}
          aria-label={closeLabel}
          onClick={() => setClosing(true)}
        >
          <Icon name="x" width={14} height={14} />
        </button>
      </div>
    </div>
  );
}

export default ToastNotificationListItem;
