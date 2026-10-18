import { useRef } from 'react';
import { Icon } from '@/shared/ui/Icon';
import Input from './Input.jsx';
import styles from './Input.module.scss';
import { DEFAULT_INPUT_SEARCH_CLEAR_LABEL, DEFAULT_INPUT_SEARCH_ICON } from './config.js';

function InputSearch(props) {
  const {
    value,
    onChange,
    onClear,
    icon = DEFAULT_INPUT_SEARCH_ICON,
    clearLabel = DEFAULT_INPUT_SEARCH_CLEAR_LABEL,
    autoComplete = 'off',
    ...rest
  } = props;

  const inputRef = useRef(null);

  const handleChange = (e) => {
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    onChange?.('');
    onClear?.();
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && value) {
      e.preventDefault();
      handleClear();
    }
  };

  return (
    <Input
      {...rest}
      ref={inputRef}
      type="search"
      icon={icon}
      value={value ?? ''}
      autoComplete={autoComplete}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      action={
        value && (
          <button
            type="button"
            className={styles.button}
            onClick={handleClear}
            aria-label={clearLabel}
          >
            <Icon width={16} height={16} name="x" />
          </button>
        )
      }
    />
  );
}

export default InputSearch;
