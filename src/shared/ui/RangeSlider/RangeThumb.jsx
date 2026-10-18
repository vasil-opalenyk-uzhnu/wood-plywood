import styles from './RangeSlider.module.scss';
import clsx from 'clsx';

function RangeThumb(thumbProps) {
  const { props: rangeProps, index, isDragged, names, values, min, max } = thumbProps;
  const { key, ...rest } = rangeProps;

  return (
    <div
      key={key}
      className={styles.thumb}
      data-dragged={isDragged || undefined}
      aria-label={names[index]}
      {...rest}
    >
      <div
        className={clsx(styles.label, {
          [styles.start]: values[index] === min,
          [styles.end]: values[index] === max,
        })}
      >
        {values[index].toFixed(1)}
      </div>
    </div>
  );
}

export default RangeThumb;
