import { Link } from 'react-router';

import clsx from 'clsx';
import styles from './ProductCard.module.scss';
import { DEFAULT_PRODUCT_CARD_ADD_LABEL, DEFAULT_PRODUCT_IS_LOADING } from './config.js';

import StockBadge from '../StockBadge/StockBadge.jsx';
import ProductPrice from '../ProductPrice/ProductPrice.jsx';

import { Rating } from '@/shared/ui/Rating';
import { Button } from '@/shared/ui/Button';
import { AppRoutes, routePaths } from '@/shared/config';

function ProductCard(props) {
  const {
    product,
    onAddToCart,
    className,
    addLabel = DEFAULT_PRODUCT_CARD_ADD_LABEL,
    loading = DEFAULT_PRODUCT_IS_LOADING,
  } = props;

  const { title, category, image, price, oldPrice, stock, rating, reviewsCount } = product;

  const handleAdd = () => onAddToCart?.(product);
  const handleLinkClick = (e) => {
    if (loading) e.preventDefault();
  };

  return (
    <article
      className={clsx(styles.root, className, {
        [styles.loading]: loading,
      })}
      aria-busy={loading || undefined}
    >
      <div className={styles.image}>
        <img src={image} alt="" width={268} height={280} loading="lazy" />
        <StockBadge className={styles.stock} quantity={stock} />
      </div>
      <div className={styles.body}>
        <div className={styles.up}>
          <p>{category}</p>
          <h3>
            <Link
              to={`${routePaths[AppRoutes.PRODUCT]}`}
              className={styles.link}
              onClick={handleLinkClick}
              aria-disabled={loading || undefined}
              tabIndex={loading ? -1 : undefined}
            >
              {title}
            </Link>
          </h3>
          <Rating value={rating} count={reviewsCount} readOnly />
        </div>
        <hr className={styles.line} />
        <div className={styles.down}>
          <ProductPrice price={price} oldPrice={oldPrice} size="small" />
          <Button
            disabled={stock <= 0}
            className={styles.add}
            size="small"
            onClick={handleAdd}
            loading={loading}
          >
            {addLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
