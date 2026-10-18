import styles from './Select.module.scss';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';

function Select(props) {
  const { options, value, onChange, label, prefix, placeholder, id, className, ...rest } = props;

  return (
    <div className={clsx(styles.root, className)}>
      <label htmlFor={id} className="visible-hidden">
        {label}
      </label>
      <select
        id={id}
        className={styles.select}
        value={value}
        onChange={(e) => onChange?.(e.target.value, e)}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {prefix ? `${prefix}: ${option.label}` : option.label}
            </option>
          ))}
      </select>
      <Icon className={styles.arrow} width={20} height={20} name="down" aria-hidden={true} />
    </div>
  );
}

export default Select;
