import styles from './Button.module.scss';
import {
  DEFAULT_BUTTON_IS_DISABLED,
  DEFAULT_BUTTON_IS_FULL_WIDTH,
  DEFAULT_BUTTON_IS_LOADING,
  DEFAULT_BUTTON_LOADING_TEXT,
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_TYPE,
  DEFAULT_BUTTON_VARIANT,
} from './config.js';
import clsx from 'clsx';
import { AnimationIcon } from '@/shared/ui/Icon';

function Button(props) {
  const {
    children,
    className,
    onClick,
    to,
    type = DEFAULT_BUTTON_TYPE,
    variant = DEFAULT_BUTTON_VARIANT,
    size = DEFAULT_BUTTON_SIZE,
    fullWidth = DEFAULT_BUTTON_IS_FULL_WIDTH,
    disabled = DEFAULT_BUTTON_IS_DISABLED,
    loading = DEFAULT_BUTTON_IS_LOADING,
    loadingText = DEFAULT_BUTTON_LOADING_TEXT,
    ...rest
  } = props;

  const isInactive = disabled || loading;

  const classes = clsx([
    styles.root,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    {
      [styles.full]: fullWidth,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className,
  ]);

  const content = loading ? (
    <>
      <AnimationIcon name="loader" animationName="spin" aria-hidden="true" />
      <span>{loadingText}</span>
    </>
  ) : (
    children
  );

  if (to) {
    const handleClick = (e) => {
      if (isInactive) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <a
        href={to}
        className={classes}
        onClick={handleClick}
        aria-disabled={isInactive || undefined}
        aria-busy={loading || undefined}
        tabIndex={isInactive ? -1 : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={isInactive}
      aria-busy={loading || undefined}
      {...rest}
    >
      {content}
    </button>
  );
}

export default Button;
