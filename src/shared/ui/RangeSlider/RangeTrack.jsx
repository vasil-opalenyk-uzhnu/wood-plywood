import styles from './RangeSlider.module.scss';
import { getTrackBackground } from 'react-range';

function RangeTrack(trackProps) {
  const { props: rangeProps, children, values, min, max } = trackProps;
  const { ref, style, onMouseDown, onTouchStart } = rangeProps;

  return (
    <div
      className={styles.wrap}
      style={style}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div
        ref={ref}
        className={styles.track}
        style={{
          background: getTrackBackground({
            values,
            colors: [
              'var(--border-transparent)',
              'var(--primary-default)',
              'var(--border-transparent)',
            ],
            min,
            max,
          }),
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default RangeTrack;
