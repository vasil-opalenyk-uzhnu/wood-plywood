import styles from './StockBadge.module.scss';
import clsx from 'clsx';
import { getStatus } from './get-status.js';
import { DEFAULT_STOCK_THRESHOLD, DEFAULT_STOCK_VARIANT } from './config.js';

function StockBadge(props) {
  const {
    quantity,
    variant = DEFAULT_STOCK_VARIANT,
    lowStockThreshold = DEFAULT_STOCK_THRESHOLD,
    className,
  } = props;

  const status = getStatus(quantity, lowStockThreshold);

  return (
    <span
      className={clsx(styles.root, className, styles[variant])}
      aria-label={`Product status: ${status.label}`}
    >
      <span className={styles.text} style={{ color: status.colorClass }}>
        {status.label}
      </span>
    </span>
  );
}

export default StockBadge;
