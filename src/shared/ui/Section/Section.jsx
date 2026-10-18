import styles from './Section.module.scss';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import {
  DEFAULT_SECTION_IS_SECONDARY,
  DEFAULT_SECTION_IS_DECORATION_VISIBLE,
  DEFAULT_SECTION_ORDER,
  DEFAULT_SECTION_SIDE,
} from './config.js';

function Section(props) {
  const {
    id,
    bodyClassName,
    className,
    title,
    description,
    side = DEFAULT_SECTION_SIDE,
    order = DEFAULT_SECTION_ORDER,
    isSecondary = DEFAULT_SECTION_IS_SECONDARY,
    isDecorationVisible = DEFAULT_SECTION_IS_DECORATION_VISIBLE,
    children,
  } = props;

  const sideClasses = styles[side];
  const orderClasses = styles[order];

  return (
    <section
      id={id}
      className={clsx(styles.root, className, {
        [styles.secondary]: isSecondary,
      })}
    >
      <div className="container">
        {title && description && (
          <header className={clsx(styles.header, sideClasses, orderClasses)}>
            <p className="p p--secondary">{description}</p>
            {isDecorationVisible && (
              <div className={styles.decoration}>
                <div className="line line--right"></div>
                <Icon className={styles.icon} name="section" />
                <div className="line line--left"></div>
              </div>
            )}
            <h2>{title}</h2>
          </header>
        )}
        <div className={clsx(styles.body, bodyClassName)}>{children}</div>
      </div>
    </section>
  );
}

export default Section;
