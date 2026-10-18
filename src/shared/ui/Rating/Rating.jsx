import { useId, useState } from 'react';
import clsx from 'clsx';
import styles from './Rating.module.scss';
import {
  DEFAULT_RATING_COUNT,
  DEFAULT_RATING_IS_READ_ONLY,
  DEFAULT_RATING_MAX,
  DEFAULT_RATING_SIZE,
  DEFAULT_RATING_VALUE,
  DEFAULT_RATING_IS_TEXT,
} from './config.js';

function Rating(props) {
  const {
    onChange,
    value = DEFAULT_RATING_VALUE,
    count = DEFAULT_RATING_COUNT,
    max = DEFAULT_RATING_MAX,
    size = DEFAULT_RATING_SIZE,
    readOnly = DEFAULT_RATING_IS_READ_ONLY,
    isText = DEFAULT_RATING_IS_TEXT,
  } = props;

  const [hover, setHover] = useState(0);
  const name = useId();

  if (readOnly) {
    const realValue = Math.min(value, max);

    return (
      <div className={clsx(styles.rating, styles[size])}>
        <ul className={styles.stars} role="img" aria-label={`Rating of ${realValue} out of ${max}`}>
          {Array.from({ length: Math.ceil(realValue) }, (_, i) => (
            <li
              key={i}
              className={styles.star}
              style={{
                '--fill': `${Math.min(Math.max(realValue - i, 0), 1) * 100}%`,
              }}
            />
          ))}
        </ul>
        {isText && (
          <p>
            {realValue} ({count})
          </p>
        )}
      </div>
    );
  }

  const shown = hover || value;

  return (
    <fieldset className={clsx(styles.rating, styles[size])} onMouseLeave={() => setHover(0)}>
      <legend className="visible-hidden">Rating</legend>
      <ul className={styles.stars}>
        {Array.from({ length: max }, (_, i) => {
          const n = i + 1;
          return (
            <li key={n}>
              <label
                className={clsx(styles.star, { [styles.active]: n <= shown })}
                onMouseEnter={() => setHover(n)}
              >
                <input
                  type="radio"
                  name={name}
                  value={n}
                  checked={value === n}
                  onChange={() => onChange?.(n)}
                  className="visible-hidden"
                />
                <span className="visible-hidden">{n}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export default Rating;
