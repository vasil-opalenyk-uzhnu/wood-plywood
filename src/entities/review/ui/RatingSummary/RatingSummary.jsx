import clsx from 'clsx';
import styles from './RatingSummary.module.scss';
import ProgressBar from './ProgressBar.jsx';
import { RATING_LEVELS } from './config.js';

import { Rating } from '@/shared/ui/Rating';

const pluralize = (count) => (count === 1 ? 'review' : 'reviews');

function RatingSummary(props) {
  const { average, total, distribution, className } = props;

  if (total === 0) {
    return (
      <div className={clsx(styles.root, className, 'block')}>
        <p className={styles.empty}>No reviews yet</p>
      </div>
    );
  }

  const largest = Math.max(1, ...RATING_LEVELS.map((level) => distribution[level] ?? 0));

  return (
    <div className={clsx(styles.root, className, 'block')}>
      <div className={styles.header}>
        <p className="h2" aria-hidden="true">
          {average}
        </p>
        <Rating value={average} readOnly isText={false} />
        <p className="p" aria-hidden="true">
          {total} {pluralize(total)}
        </p>
        <span className="visible-hidden">
          Rated {average} out of 5, based on {total} {pluralize(total)}
        </span>
      </div>

      <hr className={styles.line} />

      <ul className={styles.list}>
        {RATING_LEVELS.map((level) => {
          const count = distribution[level] ?? 0;

          return (
            <li key={level} className={styles.row}>
              <span className="p" aria-hidden="true">
                {level}
              </span>
              <ProgressBar value={count} max={largest} />
              <span className="p" aria-hidden="true">
                {count}
              </span>
              <span className="visible-hidden">
                {level} {level === 1 ? 'star' : 'stars'}: {count} {pluralize(count)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RatingSummary;
