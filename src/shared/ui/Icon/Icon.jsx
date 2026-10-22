import {
  DEFAULT_ICON_HEIGHT,
  DEFAULT_ICON_PREFIX,
  DEFAULT_ICON_ROTATE,
  DEFAULT_ICON_WIDTH,
} from './config.js';

function Icon(props) {
  const {
    name,
    className,
    style,
    rotate = DEFAULT_ICON_ROTATE,
    prefix = DEFAULT_ICON_PREFIX,
    width = DEFAULT_ICON_WIDTH,
    height = DEFAULT_ICON_HEIGHT,
    ...rest
  } = props;
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden={true}
      style={rotate ? { ...style, transform: `rotate(${rotate}deg)` } : style}
      {...rest}
    >
      <use href={symbolId} />
    </svg>
  );
}

export default Icon;
