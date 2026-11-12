import { ACTIVE_NOW_MS } from './config.js';

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const formatLastActive = (iso) => {
  const diff = Date.now() - new Date(iso).getTime();
  if (diff < ACTIVE_NOW_MS) return 'Active now';

  const minutes = Math.round(diff / 60000);
  if (minutes < 60) return `Last active ${rtf.format(-minutes, 'minute')}`;

  const hours = Math.round(minutes / 60);
  if (hours < 24) return `Last active ${rtf.format(-hours, 'hour')}`;

  return `Last active ${rtf.format(-Math.round(hours / 24), 'day')}`;
};
