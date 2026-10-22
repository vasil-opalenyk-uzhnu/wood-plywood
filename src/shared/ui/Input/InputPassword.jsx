import { useState } from 'react';
import { Icon } from '@/shared/ui/Icon';
import Input from './Input.jsx';
import styles from './Input.module.scss';
import {
  DEFAULT_INPUT_PASSWORD_HIDE_LABEL,
  DEFAULT_INPUT_PASSWORD_ICON,
  DEFAULT_INPUT_PASSWORD_SHOW_LABEL,
} from './config.js';

function InputPassword(props) {
  const {
    icon = DEFAULT_INPUT_PASSWORD_ICON,
    showLabel = DEFAULT_INPUT_PASSWORD_SHOW_LABEL,
    hideLabel = DEFAULT_INPUT_PASSWORD_HIDE_LABEL,
    autoComplete = 'current-password',
    ...rest
  } = props;

  const [isVisible, setVisible] = useState(false);

  const handleToggle = () => setVisible((prev) => !prev);

  return (
    <Input
      {...rest}
      icon={icon}
      type={isVisible ? 'text' : 'password'}
      autoComplete={autoComplete}
      action={
        <button
          type="button"
          className={styles.button}
          onClick={handleToggle}
          aria-label={isVisible ? hideLabel : showLabel}
          aria-pressed={isVisible}
        >
          <Icon width={16} height={16} name={isVisible ? 'eye-closed' : 'eye'} />
        </button>
      }
    />
  );
}

export default InputPassword;
