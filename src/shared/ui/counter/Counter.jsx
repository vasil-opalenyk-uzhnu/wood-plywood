import styles from './Counter.module.scss';
import {
  DEFAULT_COUNTER_IS_DISABLED,
  DEFAULT_COUNTER_MAX,
  DEFAULT_COUNTER_MIN,
  DEFAULT_COUNTER_SIZE,
  DEFAULT_COUNTER_STEP,
} from './config.js';
import { useId, useState } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';

function Counter(props) {
  const {
    value,
    onChange,
    label,
    className,
    min = DEFAULT_COUNTER_MIN,
    max = DEFAULT_COUNTER_MAX,
    step = DEFAULT_COUNTER_STEP,
    disabled = DEFAULT_COUNTER_IS_DISABLED,
    size = DEFAULT_COUNTER_SIZE,
  } = props;

  const id = useId();
  const [draft, setDraft] = useState(String(value));

  const clamp = (n) => Math.min(max, Math.max(min, n));

  const commit = (n) => {
    const next = clamp(n);
    setDraft(String(next));
    if (next !== value) onChange?.(next);
  };

  const handleInput = (e) => {
    setDraft(e.target.value.replace(/\D/g, ''));
  };

  const handleCommitDraft = () => {
    const n = parseInt(draft, 10);
    commit(Number.isNaN(n) ? value : n);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommitDraft();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      commit(value + step);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      commit(value - step);
    }
  };

  return (
    <div
      role="group"
      aria-labelledby={`${id}-label`}
      className={clsx(styles.root, className, styles[size], {
        [styles.disabled]: disabled,
      })}
    >
      <span id={`${id}-label`} className="visible-hidden">
        {label}
      </span>

      <button
        type="button"
        className={styles.button}
        onClick={() => commit(value - step)}
        disabled={disabled || value <= min}
        aria-label="Decrease quantity"
      >
        <Icon width={18} height={18} name="minus" />
      </button>

      <input
        id={id}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        autoComplete="off"
        className={styles.input}
        value={draft}
        onChange={handleInput}
        onBlur={handleCommitDraft}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-label={label}
      />

      <button
        type="button"
        className={styles.button}
        onClick={() => commit(value + step)}
        disabled={disabled || value >= max}
        aria-label="Increase quantity"
      >
        <Icon width={18} height={18} name="plus" />
      </button>

      <span role="status" aria-live="polite" className="visible-hidden">
        {label}: {value}
      </span>
    </div>
  );
}

export default Counter;
