import { Link } from 'react-router';
import styles from './Navigation.module.scss';
import clsx from 'clsx';
import { DEFAULT_NAVIGATION_MODIFIER, DEFAULT_NAVIGATION_ORDER } from './config.js';

function Navigation(props) {
  const {
    links,
    label,
    className,
    classNameList,
    classNameLink,
    order = DEFAULT_NAVIGATION_ORDER,
    variant = DEFAULT_NAVIGATION_MODIFIER,
    isLabelVisible,
  } = props;

  return (
    <div className={clsx(styles.root, className)}>
      {isLabelVisible && <p className="p p--secondary">{label}</p>}
      <nav aria-label={label}>
        <ul className={clsx(styles.list, styles[order], classNameList)}>
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className={clsx(styles.link, styles[variant], classNameLink)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
