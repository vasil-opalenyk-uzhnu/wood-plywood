import clsx from 'clsx';
import styles from './RatingSummary.module.scss';

function ProgressBar({ value, max }) {
  const percent = max > 0 ? Math.min(100, (value / 5) * 100) : 0;

  return (
    <div className={styles.progress} aria-hidden="true">
      <div
        className={clsx(styles.fill, {
          [styles.empty]: value === 0,
        })}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export default ProgressBar;
