import { useId } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import styles from './Input.module.scss';
import {
  DEFAULT_INPUT_ICON,
  DEFAULT_INPUT_IS_DISABLED,
  DEFAULT_INPUT_IS_LABEL_VISIBLE,
  DEFAULT_INPUT_IS_READONLY,
  DEFAULT_INPUT_IS_REQUIRED,
  DEFAULT_INPUT_TYPE,
} from './config.js';

function Input(props) {
  const {
    children,
    action,
    id,
    className,
    label,
    error,
    icon = DEFAULT_INPUT_ICON,
    type = DEFAULT_INPUT_TYPE,
    disabled = DEFAULT_INPUT_IS_DISABLED,
    readOnly = DEFAULT_INPUT_IS_READONLY,
    required = DEFAULT_INPUT_IS_REQUIRED,
    isLabelVisible = DEFAULT_INPUT_IS_LABEL_VISIBLE,
    ...rest
  } = props;

  const autoId = useId();
  const inputId = id ?? autoId;
  const errorId = `${inputId}-error`;

  const showRequired = required && !readOnly;
  const hasError = Boolean(error) && !readOnly;

  return (
    <div className={clsx(styles.root, className)}>
      <label htmlFor={inputId} className={clsx('p', { 'visible-hidden': !isLabelVisible })}>
        {label}
        {showRequired && <span aria-hidden="true"> *</span>}
      </label>

      <div
        className={clsx(styles.fluid, {
          [styles.readonly]: readOnly,
          [styles['has-error']]: hasError,
        })}
      >
        {children ?? (
          <>
            {icon && !readOnly && <Icon width={16} height={16} name={icon} />}
            <input
              id={inputId}
              type={type}
              disabled={disabled}
              readOnly={readOnly}
              aria-required={showRequired || undefined}
              aria-invalid={hasError || undefined}
              aria-describedby={hasError ? errorId : undefined}
              {...rest}
            />
            {action && !readOnly && action}
          </>
        )}
      </div>

      {hasError && (
        <div id={errorId} role="alert" className={styles.error}>
          {error}
        </div>
      )}
    </div>
  );
}

export default Input;
