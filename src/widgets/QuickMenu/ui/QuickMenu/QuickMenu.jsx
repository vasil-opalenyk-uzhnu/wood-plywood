import { useState, useRef, useId, useEffect } from 'react';

import styles from './QuickMenu.module.scss';

import UserAvatar from '../UserAvatar/UserAvatar.jsx';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

import { Icon } from '@/shared/ui/Icon';

function QuickMenu() {
  const [open, setOpen] = useState(true);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={styles.root} data-open={open}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close quick menu' : 'Open quick menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon className={styles.chevron} name="down" />
      </button>

      <div id={panelId} className={styles.panel} inert={!open}>
        <UserAvatar />
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default QuickMenu;
