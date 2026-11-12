import styles from './Skeleton.module.scss';
import {
  DEFAULT_SKELETON_HEIGHT,
  DEFAULT_SKELETON_RADIUS,
  DEFAULT_SKELETON_WIDTH,
} from './config.js';

function Skeleton(props) {
  const {
    width = DEFAULT_SKELETON_WIDTH,
    height = DEFAULT_SKELETON_HEIGHT,
    radius = DEFAULT_SKELETON_RADIUS,
  } = props;
  return (
    <span
      className={styles.root}
      style={{ width, height, borderRadius: radius }}
      aria-hidden="true"
    />
  );
}

export default Skeleton;
