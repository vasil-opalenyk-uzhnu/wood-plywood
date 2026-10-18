import styles from './StatCard.module.scss';
import clsx from 'clsx';

function StatCard(props) {
  const { value, label, className } = props;

  return (
    <div className={clsx(styles.root, className)}>
      <p className={clsx('h2', styles.label)}>{label}</p>
      <p className="p p--text">{value}</p>
    </div>
  );
}

export default StatCard;
