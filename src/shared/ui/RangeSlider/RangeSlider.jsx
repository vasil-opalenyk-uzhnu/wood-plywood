import styles from './RangeSlider.module.scss';
import { Range as ReactRange } from 'react-range';
import RangeThumb from './RangeThumb.jsx';
import {
  DEFAULT_RANGE_IS_DISABLED,
  DEFAULT_RANGE_MAX,
  DEFAULT_RANGE_MIN,
  DEFAULT_RANGE_STEP,
  // DEFAULT_RANGE_WITH_INPUTS,
} from './config.js';
import RangeTrack from '@/shared/ui/RangeSlider/RangeTrack.jsx';
import clsx from 'clsx';

function RangeSlider(props) {
  const {
    values,
    onChange,
    onFinalChange,
    labels,
    className,
    min = DEFAULT_RANGE_MIN,
    max = DEFAULT_RANGE_MAX,
    step = DEFAULT_RANGE_STEP,
    disabled = DEFAULT_RANGE_IS_DISABLED,
  } = props;

  const isRange = values.length > 1;
  const names = labels ?? (isRange ? ['Minimum', 'Maximum'] : ['Value']);

  return (
    <div
      className={clsx(styles.root, className, {
        [styles.disabled]: disabled,
      })}
    >
      <ReactRange
        min={min}
        max={max}
        step={step}
        values={values}
        disabled={disabled}
        onChange={onChange}
        onFinalChange={onFinalChange}
        renderThumb={(thumbProps) => RangeThumb({ ...thumbProps, names, values, min, max })}
        renderTrack={(trackProps) => RangeTrack({ ...trackProps, values, min, max, step })}
      />
    </div>
  );
}

export default RangeSlider;
