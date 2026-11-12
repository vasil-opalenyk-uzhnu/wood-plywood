import styles from './SessionCard.module.scss';

import { BROWSER_ICONS, DEVICE_ICONS, FALLBACK_ICON, UNKNOWN } from './config.js';
import { formatLastActive } from './formatLastActive.js';

import { Icon } from '@/shared/ui/Icon';

const isKnown = (value) => Boolean(value) && value !== UNKNOWN;

const getTitle = ({ browser, os, device }) => {
  if (isKnown(browser) && isKnown(os)) return `${browser} on ${os}`;
  if (isKnown(browser)) return browser;
  if (isKnown(os)) return os;
  return `${device} device`;
};

const getIcon = ({ browser, device }) => {
  return BROWSER_ICONS[browser] ?? DEVICE_ICONS[device?.toLowerCase()] ?? FALLBACK_ICON;
};

function SessionCard({ session, action }) {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <Icon name={getIcon(session)} width={20} height={20} />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>{getTitle(session)}</h3>
          {session.isCurrent && <span className={styles.badge}>This device</span>}
        </div>
        <p>{formatLastActive(session.lastActiveAt)}</p>
      </div>
      {action}
    </div>
  );
}

export default SessionCard;
