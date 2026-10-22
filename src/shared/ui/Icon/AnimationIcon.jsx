import styles from './Icon.module.scss';
import Icon from './Icon.jsx';
import {
  DEFAULT_ICON_ANIMATION_NAME,
  DEFAULT_ICON_HEIGHT,
  DEFAULT_ICON_PREFIX,
  DEFAULT_ICON_WIDTH,
} from './config.js';
import clsx from 'clsx';

function AnimatedIcon(props) {
  const {
    name,
    className,
    prefix = DEFAULT_ICON_PREFIX,
    width = DEFAULT_ICON_WIDTH,
    height = DEFAULT_ICON_HEIGHT,
    animationName = DEFAULT_ICON_ANIMATION_NAME,
    ...rest
  } = props;

  return (
    <Icon
      name={name}
      className={clsx(className, styles[animationName.toLowerCase()])}
      prefix={prefix}
      width={width}
      height={height}
      {...rest}
    />
  );
}

export default AnimatedIcon;
