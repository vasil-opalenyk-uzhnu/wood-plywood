import styles from './Modal.module.scss';
import {
  DEFAULT_MODAL_CLOSE_LABEL,
  DEFAULT_MODAL_IS_DISMISSIBLE,
  DEFAULT_MODAL_SIZE,
} from '@/shared/ui/Modal/config.js';
import { useEffect, useId, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '@/shared/ui/Icon';
import { createPortal } from 'react-dom';

function Modal(props) {
  const {
    open,
    onClose,
    title,
    children,
    footer,
    className,
    size = DEFAULT_MODAL_SIZE, // small | medium | large
    dismissible = DEFAULT_MODAL_IS_DISMISSIBLE,
    closeLabel = DEFAULT_MODAL_CLOSE_LABEL,
  } = props;

  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const handleCancel = (e) => {
    if (!dismissible) e.preventDefault();
  };

  const handleClose = () => {
    onClose?.();
  };

  const handleClick = (e) => {
    if (dismissible && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      className={clsx(styles.root, className, styles[size])}
      aria-labelledby={titleId}
      onCancel={handleCancel}
      onClose={handleClose}
      onClick={handleClick}
    >
      <div className={styles.panel}>
        <header className={styles.header}>
          <h2 id={titleId}>{title}</h2>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            disabled={!dismissible}
            aria-label={closeLabel}
          >
            <Icon width={20} height={20} name="x" />
          </button>
        </header>

        <div className={styles.body}>{open && children}</div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </dialog>,
    document.body,
  );
}

export default Modal;
