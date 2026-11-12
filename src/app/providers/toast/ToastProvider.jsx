import { createPortal } from 'react-dom';

import { ToastNotificationList } from '@/shared/lib/notifications';

function ToastProvider() {
  return createPortal(<ToastNotificationList />, document.body);
}

export default ToastProvider;
