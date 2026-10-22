import { useId } from 'react';
import clsx from 'clsx';
import styles from './Textarea.module.scss';
import {
  DEFAULT_TEXTAREA_IS_DISABLED,
  DEFAULT_TEXTAREA_IS_LABEL_VISIBLE,
  DEFAULT_TEXTAREA_IS_READONLY,
  DEFAULT_TEXTAREA_IS_REQUIRED,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
} from './config.js';

function Textarea(props) {
  const {
    id,
    className,
    label,
    error,
    hint,
    rows = DEFAULT_TEXTAREA_ROWS,
    resize = DEFAULT_TEXTAREA_RESIZE, // none | vertical | both
    disabled = DEFAULT_TEXTAREA_IS_DISABLED,
    readOnly = DEFAULT_TEXTAREA_IS_READONLY,
    required = DEFAULT_TEXTAREA_IS_REQUIRED,
    isLabelVisible = DEFAULT_TEXTAREA_IS_LABEL_VISIBLE,
    ...rest
  } = props;

  const autoId = useId();
  const textareaId = id ?? autoId;
  const errorId = `${textareaId}-error`;
  const hintId = `${textareaId}-hint`;

  const showRequired = required && !readOnly;
  const hasError = Boolean(error) && !readOnly;
  const showHint = Boolean(hint) && !readOnly;

  const describedBy =
    [hasError && errorId, showHint && hintId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={clsx(styles.root, className)}>
      <label htmlFor={textareaId} className={clsx('p', { 'visible-hidden': !isLabelVisible })}>
        {label}
        {showRequired && <span aria-hidden="true"> *</span>}
      </label>

      <textarea
        id={textareaId}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        data-resize={readOnly ? 'none' : resize}
        className={clsx(styles.field, {
          [styles.readonly]: readOnly,
          [styles['has-error']]: hasError,
        })}
        aria-required={showRequired || undefined}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        {...rest}
      />

      {showHint && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}

      {hasError && (
        <div id={errorId} role="alert" className={styles.error}>
          {error}
        </div>
      )}
    </div>
  );
}

export default Textarea;
