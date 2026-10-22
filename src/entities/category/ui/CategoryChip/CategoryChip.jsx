import clsx from 'clsx';
import styles from './CategoryChip.module.scss';
import { DEFAULT_CHIP_IS_DISABLED, DEFAULT_CHIP_IS_SELECTED, DEFAULT_CHIP_TYPE } from './config.js';

function CategoriesChip(props) {
  const {
    children,
    className,
    onClick,
    type = DEFAULT_CHIP_TYPE,
    selected = DEFAULT_CHIP_IS_SELECTED,
    disabled = DEFAULT_CHIP_IS_DISABLED,
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={clsx(styles.root, className, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      {...rest}
    >
      {children}
    </button>
  );
}

export default CategoriesChip;
