import clsx from 'clsx';
import styles from './ProductSpecs.module.scss';

function ProductSpecs({ specs, title, className }) {
  if (!specs?.length) return null;

  return (
    <div className={clsx(styles.root, className, 'block')}>
      <div className={styles.row}>
        <h3 className="h3">{title}</h3>
      </div>

      <dl className={styles.list}>
        {specs.map((spec) => (
          <div key={spec.id} className={styles.row}>
            <dt className="p">{spec.label}</dt>
            <dd className={clsx('p', styles.value)}>{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default ProductSpecs;
