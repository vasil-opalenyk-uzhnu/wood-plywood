import styles from './SegmentedControl.module.scss';
import { useId } from 'react';
import clsx from 'clsx';

function SegmentedControl(props) {
  const { options, value, onChange, label, name, className } = props;
  const autoName = useId();
  const groupName = name ?? autoName;

  return (
    <div role="radiogroup" aria-label={label} className={clsx(styles.root, className)}>
      {options.map((option) => (
        <label key={option.value} className={styles.item}>
          <input
            type="radio"
            name={groupName}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            className={clsx('visible-hidden', styles.input)}
            aria-label={option.ariaLabel}
            lang={option.lang}
          />
          <span className={styles.text}>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

export default SegmentedControl;
