import clsx from 'clsx';
import styles from './ProductPrice.module.scss';
import { formatPrice } from './format-price.js';
import {
  DEFAULT_PRICE_CURRENCY,
  DEFAULT_PRICE_CURRENT_LABEL,
  DEFAULT_PRICE_DISCOUNT_LABEL,
  DEFAULT_PRICE_IS_BADGE_VISIBLE,
  DEFAULT_PRICE_LOCALE,
  DEFAULT_PRICE_OLD_LABEL,
  DEFAULT_PRICE_SIZE,
} from './config.js';

function ProductPrice(props) {
  const {
    price,
    oldPrice,
    discount,
    className,
    size = DEFAULT_PRICE_SIZE, //small, medium, large
    locale = DEFAULT_PRICE_LOCALE,
    currency = DEFAULT_PRICE_CURRENCY,
    showBadge = DEFAULT_PRICE_IS_BADGE_VISIBLE,
    currentLabel = DEFAULT_PRICE_CURRENT_LABEL,
    oldLabel = DEFAULT_PRICE_OLD_LABEL,
    discountLabel = DEFAULT_PRICE_DISCOUNT_LABEL,
  } = props;

  if (!price) return null;

  const hasDiscount = oldPrice && oldPrice > price;
  const percent = discount ?? (hasDiscount ? Math.round((1 - price / oldPrice) * 100) : 0);

  return (
    <div className={clsx(styles.root, className, styles[size])}>
      <span className={styles.current}>
        <span className="visible-hidden">{currentLabel}: </span>
        {formatPrice(price, locale, currency)}
      </span>

      {hasDiscount && (
        <s className={styles.old}>
          <span className="visible-hidden">{oldLabel}: </span>
          {formatPrice(oldPrice, locale, currency)}
        </s>
      )}

      {hasDiscount && showBadge && percent > 0 && (
        <span className={styles.badge}>
          <span className="visible-hidden">{discountLabel}: </span>-{percent}%
        </span>
      )}
    </div>
  );
}

export default ProductPrice;
