import styles from './ToastNotificationList.module.scss';

import { useToastStore } from '../../state/toastStore.js';
import ToastNotificationListItem from '../ToastNotificationListItem/ToastNotificationListItem.jsx';

function ToastNotificationList({ closeLabel = 'Close' }) {
  const toasts = useToastStore((state) => state.toasts);
  const remove = useToastStore((state) => state.remove);

  return (
    <div className={styles.root}>
      {toasts.map((toast) => (
        <ToastNotificationListItem
          key={`${toast.id}-${toast.createdAt}`}
          toast={toast}
          closeLabel={closeLabel}
          onRemove={remove}
        />
      ))}
    </div>
  );
}

export default ToastNotificationList;
