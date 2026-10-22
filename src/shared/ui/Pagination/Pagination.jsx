import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import styles from './Pagination.module.scss';
import { getPageRange } from './get-page-range.js';
import { DEFAULT_PAGINATION_IS_DISABLED, DEFAULT_PAGINATION_SIBLING_COUNT } from './config.js';

function Pagination(props) {
  const {
    page,
    totalPages,
    onChange,
    label,
    className,
    siblingCount = DEFAULT_PAGINATION_SIBLING_COUNT,
    disabled = DEFAULT_PAGINATION_IS_DISABLED,
  } = props;

  if (totalPages <= 1) return null;

  const items = getPageRange(page, totalPages, siblingCount);

  const goTo = (n) => {
    if (disabled || n < 1 || n > totalPages || n === page) return;
    onChange?.(n);
  };

  return (
    <nav aria-label={label ?? 'Pagination'} className={clsx(styles.root, className)}>
      <ul className={styles.list}>
        <li>
          <button
            type="button"
            className={styles.button}
            onClick={() => goTo(page - 1)}
            disabled={disabled || page <= 1}
            aria-label="Previous page"
          >
            <Icon width={20} height={20} name="down" rotate={90} />
          </button>
        </li>

        {items.map((item) => {
          if (typeof item === 'string') {
            return (
              <li key={item} className={styles.dots} aria-hidden="true">
                …
              </li>
            );
          }

          const isActive = item === page;

          return (
            <li key={item}>
              <button
                type="button"
                className={clsx(styles.button, {
                  [styles['is-active']]: isActive,
                })}
                onClick={() => goTo(item)}
                disabled={disabled}
                aria-label={`Page ${item}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item}
              </button>
            </li>
          );
        })}

        <li>
          <button
            type="button"
            className={styles.button}
            onClick={() => goTo(page + 1)}
            disabled={disabled || page >= totalPages}
            aria-label="Next page"
          >
            <Icon width={20} height={20} name="down" rotate={-90} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
