import { useState } from 'react';
import clsx from 'clsx';
import styles from './ProductGallery.module.scss';
import { DEFAULT_GALLERY_INDEX, DEFAULT_GALLERY_ZOOM_LABEL } from './config.js';

import { Icon } from '@/shared/ui/icon';
import { Modal } from '@/shared/ui/modal';

function ProductGallery(props) {
  const {
    images,
    title,
    className,
    defaultIndex = DEFAULT_GALLERY_INDEX,
    zoomLabel = DEFAULT_GALLERY_ZOOM_LABEL,
    ...rest
  } = props;

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const [isZoomed, setZoomed] = useState(false);

  if (!images?.length) return null;

  const current = images[activeIndex] ?? images[0];
  const hasThumbs = images.length > 1;

  const handleZoomOpen = () => setZoomed(true);
  const handleZoomClose = () => setZoomed(false);

  return (
    <div
      className={clsx(styles.root, className, {
        [styles.multiple]: hasThumbs,
      })}
      {...rest}
    >
      {hasThumbs && (
        <div className={styles.thumbs}>
          <ul className={styles.list}>
            {images.map((image, i) => {
              const isActive = i === activeIndex;

              return (
                <li key={image.id} className={styles.item}>
                  <button
                    type="button"
                    className={clsx(styles.thumb, {
                      [styles.active]: isActive,
                    })}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Show image ${i + 1} of ${images.length}`}
                    aria-current={isActive || undefined}
                  >
                    <img
                      className={styles.preview}
                      src={image.thumb ?? image.src}
                      alt=""
                      loading="lazy"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className={styles.main}>
        <button type="button" className={styles.trigger} onClick={handleZoomOpen}>
          <img className={styles.photo} src={current.src} alt={current.alt} fetchPriority="high" />
          <span className={styles.hint}>
            <Icon width={16} height={16} name="zoom-in" />
            {zoomLabel}
          </span>
        </button>
      </div>

      <Modal open={isZoomed} onClose={handleZoomClose} title={title ?? current.alt} size="large">
        <img className={styles.zoom} src={current.src} alt={current.alt} />
      </Modal>
    </div>
  );
}

export default ProductGallery;
