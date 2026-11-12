import styles from './Logo.module.scss';
import { Link } from 'react-router';
import clsx from 'clsx';

function Logo({ variant, className, ...rest }) {
  return (
    <Link
      to="/#hero"
      className={clsx(styles.logo, styles[`variant-${variant}`], className)}
      {...rest}
    >
      Wood&Plywood
    </Link>
  );
}

export default Logo;
